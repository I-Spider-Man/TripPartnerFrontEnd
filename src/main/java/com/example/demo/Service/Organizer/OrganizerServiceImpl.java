package com.example.demo.Service.Organizer;

import java.util.List;
import java.util.Optional;

import com.example.demo.Service.Scheduling;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Group;
import com.example.demo.Model.Organizer;
import com.example.demo.Model.User;
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
                if(!organizer.get().isOrganizerStatus()){
                    newOrganizer.setOrganizerId(organizer.get().getOrganizerId());
                    newOrganizer.setOrganizedCount(organizer.get().getOrganizedCount());
                    newOrganizer.increseOrganizedCount();
                    newOrganizer.setOrganizerStatus(true);
                    organizerRepository.save(newOrganizer);
                    newGroup.setOrganizerId(newOrganizer.getOrganizerId());
                    groupService.addGroup(newGroup);

                    try {
                        String Subject="Group Creation";
                        String Content="Hii "+user.getUserName()+" your group "+newGroup.getGroupName()+" creation is Successfull";
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

                newOrganizer.setOrganizerStatus(true);
                newOrganizer.increseOrganizedCount();
                organizerRepository.save(newOrganizer);
                newGroup.setOrganizerId(newOrganizer.getOrganizerId());
                groupService.addGroup(newGroup);

                try {
                    String Subject="Group Creation";
                    String Content="Hii "+user.getUserName()+" your group "+newGroup.getGroupName()+" creation is Successfull";
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
            organizerRepository.deleteById(organizerId);
            return "Organizer with id: "+organizerId+" is removed successfully";
        }
        else{
            return "Organizer with id: "+organizerId+" is not found";
        }
    }
}
