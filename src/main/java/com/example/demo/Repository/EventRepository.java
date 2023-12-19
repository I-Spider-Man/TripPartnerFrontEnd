package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Event;
@Repository
public interface EventRepository extends JpaRepository<Event, Integer>{
	Optional<Event> findByEventName(String eventName);
}
