package com.example.demo.Service.ParticipantServices;

import com.example.demo.Model.Participant;

public interface ParticipantService {
	
	Participant getAllParticipants();
	String addParticipant();
	boolean requestJoin();
	
}
