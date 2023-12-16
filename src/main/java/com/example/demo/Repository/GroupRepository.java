package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Group;

public interface GroupRepository extends JpaRepository<Group,Integer>{
	Optional<Group> findByOrganizerId(Integer organizerId);

}
