package com.example.demo.Controller;

import com.example.demo.Model.*;
import com.example.demo.Service.Admin.AdminService;
import com.example.demo.Service.Event.EventService;
import com.example.demo.Service.TouristSpot.TouristSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @Autowired
    private EventService eventService;
    @Autowired
    private TouristSpotService touristSpotService;
    @PostMapping("/events")
    public String addEvent(@RequestBody Event newEvent){
        return eventService.addEvent(newEvent);
    }
    @PostMapping("/touristSpot")
    public String addTouristSpot(@RequestBody TouristSpot newSpot){
        return touristSpotService.addSpot(newSpot);
    }
    @GetMapping("/participants")
    public List<Participant> getAllParticipants(){
        return adminService.getAllParticipant();
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return adminService.getAllUser();
    }

    @GetMapping("/groups")
    public List<Group> getAllGroup(){
        return adminService.getAllGroup();
    }

    @GetMapping("/events")
    public List<Event> getAllEvent(){
        return adminService.getAllEvent();
    }

    @GetMapping("/touristSpots")
    public List<TouristSpot> getAllTouristSpot(){return adminService.getAllSpot();}

    @GetMapping("/users/{userId}")
    public User getUserById(@PathVariable Integer userId){
        return adminService.getUserById(userId);
    }
    @GetMapping("/participants/{participantId}")
    public Participant getParticipantById(@PathVariable Integer participantId){
        return adminService.getParticipantById(participantId);
    }
    @GetMapping("/groups/{groupId}")
    public Group getGroupById(@PathVariable Integer groupId){
        return adminService.getGroupById(groupId);
    }
    @GetMapping("/events/{eventId}")
    public Event getEventById(@PathVariable Integer eventId){
        return adminService.getEventById(eventId);
    }
    @GetMapping("/touristSpots/{spotId}")
    public TouristSpot getSpotById(@PathVariable Integer spotId){
        return adminService.getSpotById(spotId);
    }
    @DeleteMapping("/users/{userId}")
    public String removeUser(@PathVariable Integer userId){
        return adminService.removeUserById(userId);
    }

    @DeleteMapping("/participants/{participantId}")
    public String removeParticipant(@PathVariable Integer participantId){
        return adminService.removeParticipantById(participantId);
    }
    @DeleteMapping("/groups/{groupId}")
    public String removeGroup(@PathVariable Integer groupId){
        return adminService.removeGroupById(groupId);
    }
    @DeleteMapping("/events/{eventId}")
    public String removeEvent(@PathVariable Integer eventId){
        return adminService.removeEventById(eventId);
    }
    @DeleteMapping("/touristSpots/{spotId}")
    public String removeTouristSpot(@PathVariable Integer spotId){
        return adminService.removeTouristSpotById(spotId);
    }
}
