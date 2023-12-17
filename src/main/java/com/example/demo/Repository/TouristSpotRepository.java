package com.example.demo.Repository;

import com.example.demo.Model.TouristSpot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TouristSpotRepository extends JpaRepository<TouristSpot, Integer> {
}
