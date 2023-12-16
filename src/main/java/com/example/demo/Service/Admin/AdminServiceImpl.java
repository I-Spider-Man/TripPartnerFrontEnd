package com.example.demo.Service.Admin;

import com.example.demo.Model.Group;
import com.example.demo.Model.Participant;
import com.example.demo.Model.User;
import com.example.demo.Repository.GroupRepository;
import com.example.demo.Repository.ParticipantRepository;
import com.example.demo.Repository.UserRepository;
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
}
