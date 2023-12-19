package com.example.demo.Service.Admin;

import com.example.demo.Model.*;
import com.example.demo.Service.Organizer.OrganizerService;
import com.example.demo.Service.TouristSpot.TouristSpotService;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.jws.soap.SOAPBinding;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.servlet.http.Part;

import java.util.List;
import java.util.Optional;

public interface AdminService {

    String addEvent(Event newEvent);
    String addSpot(TouristSpot spot);
    List<Participant> getAllParticipant();
    List<Participant> getAllParticipantByGroupId(Integer groupId);
    List<Group> getAllGroup();
    List<User> getAllUser();
    List<Event> getAllEvent();
    List<TouristSpot> getAllSpot();
    List<Organizer> getAllOrganizer();

    String removeUserById(Integer userId);
    String removeParticipantById(Integer participantId);
    String removeGroupById(Integer groupId);
    String removeEventById(Integer eventId);
    String removeTouristSpotById(Integer spotId);
    String removeOrganizerById(Integer organizerId);

    User getUserById(Integer userId);
    Participant getParticipantById(Integer participantId);
    Group getGroupById(Integer groupId);
    Event getEventById(Integer eventId);
    TouristSpot getSpotById(Integer spotId);
    Organizer getOrganizerById(Integer organizerId);
}
