package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	Optional<User> findByUserName(String userName);
	Optional<User> findByUserEmail(String userEmail);
}
