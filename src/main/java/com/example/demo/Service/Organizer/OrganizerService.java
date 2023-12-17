package com.example.demo.Service.Organizer;

import com.example.demo.Model.Group;
import com.example.demo.Model.Organizer;

import java.util.List;

public interface OrganizerService {
    List<Organizer> getAllOrganizer();
    String addOrganizer(Organizer newOrganizer, Group newGroup);
    //String addParticipantToGroup();
}
