package com.example.demo.Controller;

import com.example.demo.Model.Group;
import com.example.demo.Model.Participant;
import com.example.demo.Model.User;
import com.example.demo.Service.Admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
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
}
