package com.example.demo.Service.Admin;

import com.example.demo.Model.Group;
import com.example.demo.Model.Participant;
import com.example.demo.Model.User;
import jakarta.jws.soap.SOAPBinding;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.servlet.http.Part;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    List<Participant> getAllParticipant();
    List<Group> getAllGroup();
    List<User> getAllUser();
    String removeUserById(Integer userId);
    String removeParticipantById(Integer participantId);
    String removeGroupById(Integer groupId);
    User getUserById(Integer userId);
    Participant getParticipantById(Integer participantId);
    Group getGroupById(Integer groupId);
}
