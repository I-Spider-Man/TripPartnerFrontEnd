package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.TouristSpot;
@Repository
public interface TouristSpotRepository extends JpaRepository<TouristSpot, Integer> {
	Optional<TouristSpot> findBySpotName(String spotName);
}
