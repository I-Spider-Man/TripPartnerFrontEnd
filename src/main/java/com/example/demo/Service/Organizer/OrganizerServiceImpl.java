package com.example.demo.Service.Organizer;

import java.util.List;
import java.util.Optional;

import com.example.demo.Model.*;
import com.example.demo.Repository.GroupRepository;
import com.example.demo.Repository.ParticipantRepository;
import com.example.demo.Service.Scheduling;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.OrganizerRepository;
import com.example.demo.Service.GroupServices.GroupService;
import com.example.demo.Service.OtpMailService.SMTP_mailService;
import com.example.demo.Service.UserServices.UserService;

import jakarta.mail.MessagingException;

@Service
public class OrganizerServiceImpl implements OrganizerService{
    @Autowired
    private OrganizerRepository organizerRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private Scheduling scheduling;
    @Autowired
    private ParticipantRepository participantRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private GroupService groupService;
    @Autowired
    private SMTP_mailService mailService;

    @Override
    public List<Organizer> getAllOrganizer() {
        return (List<Organizer>) organizerRepository.findAll();
    }

    @Override
    public Organizer getOrganizerById(Integer organizerId) {
        Optional<Organizer> organizer=organizerRepository.findById(organizerId);
        return organizer.orElse(null);
    }

    @Override
    public Organizer getOrganizerByUserId(Integer userId) {
        Optional<Organizer> organizer=organizerRepository.findByUserId(userId);
        return organizer.orElse(null);
    }
    
    @Override
    public Group addOrganizer(Organizer newOrganizer, Group newGroup) {
        Optional<Organizer> organizer=organizerRepository.findByUserId(newOrganizer.getUserId());
        User user=userService.getUserById(newOrganizer.getUserId());
        String organizerEmail=user.getUserEmail();
        if(!scheduling.getActiveParticipantId().contains(newOrganizer.getUserId())){
            if(organizer.isPresent()){
                if(organizer.get().getOrganizerStatus() == UserStatus.Free){
                    newOrganizer.setOrganizerId(organizer.get().getOrganizerId());
                    newOrganizer.setOrganizedCount(organizer.get().getOrganizedCount());
                    newOrganizer.increseOrganizedCount();
                    newOrganizer.setOrganizerStatus(UserStatus.Busy);
                    organizerRepository.save(newOrganizer);
                    scheduling.addActiveOrganizerUserId(newOrganizer.getUserId());
                    newGroup.setOrganizerId(newOrganizer.getOrganizerId());
                    groupService.addGroup(newGroup);
                    try {
                        String Subject="Group Creation";
                        String Content="Hii "+user.getUserName()+",\nyour group "+newGroup.getGroupName()+" is successfully created.";
                        mailService.sendMailService(organizerEmail,Subject,Content);
                    } catch (MessagingException e) {
                        e.printStackTrace();
                    }
                    return newGroup;
                }
                else {
                    return null;//"organizer already organizing "+groupService.getGroupByOrganizerId(organizer.get().getOrganizerId());
                }
            }
            else {

                newOrganizer.setOrganizerStatus(UserStatus.Busy);
                newOrganizer.increseOrganizedCount();
                organizerRepository.save(newOrganizer);
                newGroup.setOrganizerId(newOrganizer.getOrganizerId());
                groupService.addGroup(newGroup);

                try {
                    String Subject="Group Creation";
                    String Content="Hii "+user.getUserName()+" your group "+newGroup.getGroupName()+" creation is Successfully";
                    mailService.sendMailService(organizerEmail,Subject,Content);
                } catch (MessagingException e) {
                    e.printStackTrace();
                }

                return  newGroup;
            }
        }else{
            return null;
        }
    }

    @Override
    public String removeOrganizerById(Integer organizerId) {
        Optional<Organizer> organizer=organizerRepository.findById(organizerId);
        if(organizer.isPresent()){
            Optional<Group> group=groupRepository.findByOrganizerId(organizer.get().getOrganizerId());
            group.ifPresent(value -> {
                value.setGroupStatus(GroupStatus.InActive);
                List<Participant> participants=participantRepository.findAllByGroupId(value.getGroupId());
                participants.forEach(participant -> participant.setParticipantStatus(UserStatus.Free));
                groupRepository.save(value);
                participantRepository.saveAll(participants);
            });
            organizerRepository.deleteById(organizerId);
            return "Organizer with id: "+organizerId+" is removed successfully";
        }
        else{
            return "Organizer with id: "+organizerId+" is not found";
        }
    }
}
