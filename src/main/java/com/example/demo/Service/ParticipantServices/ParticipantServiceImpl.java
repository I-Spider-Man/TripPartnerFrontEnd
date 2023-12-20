package com.example.demo.Service.ParticipantServices;

import com.example.demo.Model.Group;
import com.example.demo.Model.Participant;
import com.example.demo.Model.User;
import com.example.demo.Repository.GroupRepository;
import com.example.demo.Repository.ParticipantRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.OtpMailService.SMTP_mailService;
import com.example.demo.Service.Scheduling;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ParticipantServiceImpl implements ParticipantService{
    @Autowired
    private ParticipantRepository participantRepo;
    @Autowired
    private SMTP_mailService mailService;
    @Autowired
    private Scheduling scheduling;
    @Autowired
    private UserRepository userRepository;
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
        Optional<User> user=userRepository.findById(newParticipant.getUserId());
        String participantEmail=user.get().getUserEmail();
        Optional<Group> grp=grpRepo.findById(newParticipant.getGroupId());

        if(scheduling.getActiveGrpId().contains(newParticipant.getGroupId())) {
            if(!scheduling.getActiveOrganizerId().contains(newParticipant.getUserId())) {
                if (participant.isPresent()) {
                    if (!participant.get().isStatus()) {
                        newParticipant.setParticipantId(participant.get().getParticipantId());
                        newParticipant.setParticipationCount(participant.get().getParticipationCount());
                        newParticipant.increaseParticipationCount();
                        newParticipant.setStatus(grp.get().isGroupStatus());
                        participantRepo.save(newParticipant);
                        try {

                            String Subject="Group Joining";
                            String Content="Hi "+user.get().getUserName()+",\n you have been successfully joined in "+grp.get().getGroupName();
                            mailService.sendMailService(participantEmail,Subject,Content);
                        } catch (MessagingException e) {
                            e.printStackTrace();
                        }
                        return "Participant added to group " + grp.get().getGroupName();
                    } else {
                        return "Participant is already joined in a grp : " + grpRepo.findById(participant.get().getGroupId()).get().getGroupName();
                    }
                } else {
                    participantRepo.save(newParticipant);
                    try {
                        String Subject="Group Joining";
                        String Content="Hi "+user.get().getUserName()+",\n you have been successfully joined in "+grp.get().getGroupName();
                        mailService.sendMailService(participantEmail,Subject,Content);
                    } catch (MessagingException e) {
                        e.printStackTrace();
                    }
                    return "participant added successfully to the group " + grp.get().getGroupName();
                }
            }else{
                return "you already organizing one group so you cannot join here";
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
