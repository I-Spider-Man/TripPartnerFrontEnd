package com.example.demo.Repository;

import com.example.demo.Model.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrganizerRepository extends JpaRepository<Organizer,Integer> {
    Optional<Organizer> findByUserId(Integer userId);
}
