package com.example.demo.Service.ParticipantServices;

import com.example.demo.Model.Group;
import com.example.demo.Model.Participant;
import com.example.demo.Repository.GroupRepository;
import com.example.demo.Repository.ParticipantRepository;
import jakarta.servlet.http.Part;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
@Service
public class ParticipantServiceImpl implements ParticipantService{
    @Autowired
    private ParticipantRepository participantRepo;
    @Autowired
    private GroupRepository grpRepo;
    @Override
    public List<Participant> getAllParticipants() {

        return (List<Participant>) participantRepo.findAll();
    }

    @Override
    public Participant getParticipantById(Integer participantId) {
        Optional<Participant> participant=participantRepo.findById(participantId);
        return participant.orElse(null);
    }

    @Override
    public List<Participant> getAllParticipantsByGroupId(Integer groupId) {
        return participantRepo.findAllByGroupId(groupId);
    }


    @Override
    public String addParticipant(Participant newParticipant) {

        Optional<Participant> participant = participantRepo.findByUserId(newParticipant.getUserId());
        Optional<Group> grp=grpRepo.findById(newParticipant.getGroupId());

        if(grp.isPresent() && grp.get().isGroupStatus()) {
            if (participant.isPresent() ) {

                if(!participant.get().isStatus()) {
                    newParticipant.setParticipantId(participant.get().getParticipantId());
                    newParticipant.setParticipationCount(participant.get().getParticipationCount());
                    newParticipant.increseParticipationCount();
                    newParticipant.setStatus(grp.get().isGroupStatus());
                    participantRepo.save(newParticipant);
                    return "Participant added to group "+grp.get().getGroupName();
                }

                else{
                    return "Participant is already joined in a grp : "+grpRepo.findById(participant.get().getGroupId()).get().getGroupName();
                }
            } else {
                participantRepo.save(newParticipant);
                return "participant added successfully to the group "+grp.get().getGroupName();
            }
        }
        else{
             return "check Group details";
        }

    }

    @Override
    public String removeParticipantById(Integer participantId) {
        Optional<Participant> participant=participantRepo.findById(participantId);
        if(participant.isPresent()){
            participantRepo.deleteById(participantId);
            return "participant with id: "+participantId+" removed successfully";
        }
        else{
            return "participant with id: "+participantId+" is not found";
        }
    }

    @Override
    public boolean requestJoin() {
        return false;
    }
}
