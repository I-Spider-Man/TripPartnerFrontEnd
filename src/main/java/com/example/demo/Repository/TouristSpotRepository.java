package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.TouristSpot;

public interface TouristSpotRepository extends JpaRepository<TouristSpot, Integer> {
	Optional<TouristSpot> findBySpotName(String spotName);
}
