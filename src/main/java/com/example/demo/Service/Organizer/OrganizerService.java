package com.example.demo.Service.Organizer;

import com.example.demo.Model.Group;
import com.example.demo.Model.Organizer;

import java.util.List;
import java.util.Optional;

public interface OrganizerService {
    List<Organizer> getAllOrganizer();
    Organizer getOrganizerById(Integer organizerId);
    Organizer getOrganizerByUserId(Integer userId);
    Group addOrganizer(Organizer newOrganizer, Group newGroup);
    //String addParticipantToGroup();
    String removeOrganizerById(Integer organizerId);
}
