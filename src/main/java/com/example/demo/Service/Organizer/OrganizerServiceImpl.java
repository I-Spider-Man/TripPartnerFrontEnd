package com.example.demo.Service.Organizer;

import com.example.demo.Model.Group;
import com.example.demo.Model.Organizer;
import com.example.demo.Repository.OrganizerRepository;
import com.example.demo.Service.GroupServices.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrganizerServiceImpl implements OrganizerService{
    @Autowired
    private OrganizerRepository organizerRepository;
    @Autowired
    private GroupService groupService;
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
        if(organizer.isPresent()){
            if(!organizer.get().isOrganizerStatus()){
                newOrganizer.setOrganizerId(organizer.get().getOrganizerId());
                newOrganizer.setOrganizedCount(organizer.get().getOrganizedCount());
                newOrganizer.increseOrganizedCount();
                newOrganizer.setOrganizerStatus(true);
                organizerRepository.save(newOrganizer);
                newGroup.setOrganizerId(newOrganizer.getOrganizerId());
                groupService.addGroup(newGroup);
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
            return  newGroup;
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
