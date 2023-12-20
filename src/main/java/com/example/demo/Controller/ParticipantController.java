package com.example.demo.Controller;

import com.example.demo.Model.Participant;
import com.example.demo.Service.ParticipantServices.ParticipantService;
import jakarta.servlet.http.Part;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Participant")
public class ParticipantController {
    @Autowired
    private ParticipantService participantService;
    @GetMapping
    public List<Participant> getAllParticipant(){
        return participantService.getAllParticipants();
    }

    @PostMapping
    public String addParticipant(@RequestBody Participant newParticipant){
        return participantService.addParticipant(newParticipant);
    }

}
