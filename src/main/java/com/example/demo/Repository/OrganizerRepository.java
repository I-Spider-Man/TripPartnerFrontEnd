package com.example.demo.Repository;

import com.example.demo.Model.Organizer;
import com.example.demo.Model.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrganizerRepository extends JpaRepository<Organizer,Integer> {
    Optional<Organizer> findByUserId(Integer userId);
    List<Organizer> findAllByOrganizerStatus(UserStatus userStatus);
}
