package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Event;

public interface EventRepository extends JpaRepository<Event, Integer>{
	Optional<Event> findByEventName(String eventName);
}
