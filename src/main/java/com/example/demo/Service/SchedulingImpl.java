package com.example.demo.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.demo.Model.*;
import com.example.demo.Repository.EventRepository;
import com.example.demo.Service.Organizer.OrganizerService;
import com.example.demo.Service.ParticipantServices.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.GroupRepository;
import com.example.demo.Repository.OrganizerRepository;
import com.example.demo.Repository.ParticipantRepository;

import jakarta.annotation.PostConstruct;

import javax.swing.text.html.Option;

@Service
public class SchedulingImpl implements Scheduling{
    @Autowired
    private GroupRepository grpRepo;
    @Autowired
    private ParticipantRepository participantRepository;
    @Autowired
    private OrganizerRepository organizerRepository;
    @Autowired
    private EventRepository eventRepository;
    private final List<Integer> activeGrpId =new ArrayList<>();
    private final List<Integer> notActiveGrpId=new ArrayList<>();
    private final List<Integer> activeOrganizers=new ArrayList<>();
    private final List<Integer> activeParticipants=new ArrayList<>();
    private final List<Integer> activeEvents=new ArrayList<>();
    private List<Event> allActiveEvent=new ArrayList<>();
    private List<Group> allActiveGroup=new ArrayList<>();
    @PostConstruct
    private void initializeActiveAndNotActiveLists() {
        // Initialize the lists based on the initial state in the database
        allActiveGroup=grpRepo.findAllByGroupStatus(GroupStatus.Active);
        allActiveGroup.forEach(grp->activeGrpId.add(grp.getGroupId()));
        allActiveEvent=eventRepository.findAllByEventStatus(EventStatus.Active);
        allActiveEvent.forEach(event -> activeEvents.add(event.getEventId()));
    }
    @Override
    public void addActiveGrpId(Integer activeGrpId) {
        this.activeGrpId.add(activeGrpId);
        this.notActiveGrpId.remove(activeGrpId);
    }
    @Override
    public void addActiveEventId(Integer eventId){
        this.activeEvents.add(eventId);
    }
    @Override
    public void addActiveOrganizerUserId(Integer activeOrganizerUserId){
        this.activeOrganizers.add(activeOrganizerUserId);
    }
    @Override
    public void addActiveParticipantUserId(Integer activeParticipantUserId){
        this.activeParticipants.add(activeParticipantUserId);
    }
    @Override
    public List<Integer> getNotActiveGrpId() {
        return notActiveGrpId;
    }
    @Override
    public List<Integer> getActiveOrganizerId() {
        return activeOrganizers;
    }
    @Override
    public List<Integer> getActiveParticipantId() {
        return activeParticipants;
    }


    @Override
    @Scheduled(fixedRate=60000)//(cron="0 0 0 * * *")
    public void checkGroupStatus() {
    	
        List<Group> allActiveGrp = grpRepo.findAllById(activeGrpId);
        allActiveGrp.forEach(activeGrp->{
            Optional<Organizer> organizer=organizerRepository.findById(activeGrp.getOrganizerId());
            Integer orgUserId=organizer.get().getUserId();
            if(!activeOrganizers.contains(orgUserId)) {
                activeOrganizers.add(orgUserId);
            }
            participantRepository.findAllByGroupId(
                    activeGrp.getGroupId()).forEach(participant -> {
                        Integer participantUserId=participant.getUserId();
                        if(!activeParticipants.contains(participantUserId)) {
                            activeParticipants.add(participantUserId);
                        }
                    });
        });

        LocalDate currentDate = LocalDate.now();
        allActiveEvent.forEach(event->{
            if(currentDate.isAfter(event.getEndDate())){
                activeEvents.add(event.getEventId());
                event.setEventStatus(EventStatus.InActive);
            }
        });
        eventRepository.saveAll(allActiveEvent);
        allActiveGrp.forEach(grp -> {
            if (currentDate.isAfter(grp.getDateTo())) {
                grp.setGroupStatus(GroupStatus.InActive);

                Optional<Organizer> organizer=organizerRepository.findById(grp.getOrganizerId());
                organizer.get().setOrganizerStatus(UserStatus.Free);
                organizerRepository.save(organizer.get());

                System.out.println("organized updated");
                activeGrpId.remove(grp.getGroupId());
                activeOrganizers.remove(organizer.get().getUserId());
                notActiveGrpId.add(grp.getGroupId());

                List<Participant> allParticipants= participantRepository.findAllByGroupId(grp.getGroupId());
                allParticipants.forEach(participant -> {
                    participant.setParticipantStatus(UserStatus.Free);
                    System.out.println("participant updated");
                    activeParticipants.remove(participant.getUserId());
                });
                participantRepository.saveAll(allParticipants);
            };

        });
        grpRepo.saveAll(allActiveGrp);
        System.out.println("active group id "+activeGrpId);
        System.out.println("inactive group id "+notActiveGrpId);
        System.out.println("active organizer id "+activeOrganizers);
        System.out.println("active participant id "+activeParticipants);
        System.out.println("active event id "+activeEvents);
        
    }

    public List<Integer> getActiveOrganizers() {
        return activeOrganizers;
    }

    public List<Integer> getActiveParticipants() {
        return activeParticipants;
    }

    @Override
    public List<Integer> getActiveGrpId() {
        return activeGrpId;
    }
}