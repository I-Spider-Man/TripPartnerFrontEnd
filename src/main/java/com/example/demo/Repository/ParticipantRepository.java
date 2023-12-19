package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Participant;
@Repository
public interface ParticipantRepository extends JpaRepository<Participant,Integer> {
	Optional<Participant> findByUserId(Integer userId);
	List<Participant> findAllByGroupId(Integer groupId);
}
