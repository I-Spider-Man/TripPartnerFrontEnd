package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Organizer;
@Repository
public interface OrganizerRepository extends JpaRepository<Organizer,Integer> {
    Optional<Organizer> findByUserId(Integer userId);
}
