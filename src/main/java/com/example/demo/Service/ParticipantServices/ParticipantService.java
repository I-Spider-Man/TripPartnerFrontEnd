package com.example.demo.Service.ParticipantServices;

import com.example.demo.Model.Participant;
import java.util.*;
public interface ParticipantService {
	
	List<Participant> getAllParticipants();
	String addParticipant(Participant newParticipant);
	boolean requestJoin();
	
}
