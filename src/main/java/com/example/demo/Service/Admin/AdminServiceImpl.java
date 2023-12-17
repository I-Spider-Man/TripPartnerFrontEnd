package com.example.demo.Service.Admin;

import com.example.demo.Model.*;
import com.example.demo.Repository.EventRepository;
import com.example.demo.Repository.GroupRepository;
import com.example.demo.Repository.ParticipantRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.TouristSpot.TouristSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ParticipantRepository participantRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private TouristSpotService touristSpotService;
    @Override
    public List<Participant> getAllParticipant() {
        return (List<Participant>) participantRepository.findAll();
    }

    @Override
    public List<Group> getAllGroup() {
        return (List<Group>) groupRepository.findAll();
    }

    @Override
    public List<User> getAllUser() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public List<Event> getAllEvent() {
        return (List<Event>) eventRepository.findAll();
    }

    @Override
    public List<TouristSpot> getAllSpot() {
        return touristSpotService.getAllSpots();
    }

    @Override
    public String removeUserById(Integer userId) {
        userRepository.deleteById(userId);
        return "User with id "+userId+" is removed successfully";
    }

    @Override
    public String removeParticipantById(Integer participantId) {
        participantRepository.deleteById(participantId);
        return "Participant with id "+participantId+" is removed successfully";
    }

    @Override
    public String removeGroupById(Integer groupId) {
        groupRepository.deleteById(groupId);
        return "Group with id "+groupId+" is removed successfully";
    }
    @Override
    public String removeEventById(Integer eventId) {
        Optional<Event> event=eventRepository.findById(eventId);
        if(event.isPresent()){
            eventRepository.deleteById(eventId);
            return "Event "+event.get().getEventName()+" is removed.";
        }
        else {
            return "Event with id "+eventId+" is not present.";
        }
    }

    @Override
    public String removeTouristSpotById(Integer spotId) {
        return touristSpotService.removeSpotById(spotId);
    }

    @Override
    public User getUserById(Integer userId) {
        Optional<User> user=userRepository.findById(userId);
        return user.orElse(null);
    }
    @Override
    public Participant getParticipantById(Integer participantId) {
        Optional<Participant> participant=participantRepository.findById(participantId);
        return participant.orElse(null);
    }
    @Override
    public Group getGroupById(Integer groupId) {
        Optional<Group> group=groupRepository.findById(groupId);
        return group.orElse(null);
    }
    @Override
    public Event getEventById(Integer eventId) {
        Optional<Event> event=eventRepository.findById(eventId);
        return event.orElse(null);
    }

    @Override
    public TouristSpot getSpotById(Integer spotId) {
        return touristSpotService.getSpotById(spotId);
    }
}
