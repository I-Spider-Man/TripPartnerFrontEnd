package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Participant;

public interface ParticipantRepository extends JpaRepository<Participant,Integer> {
	
}
