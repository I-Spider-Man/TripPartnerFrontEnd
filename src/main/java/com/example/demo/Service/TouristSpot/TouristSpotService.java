package com.example.demo.Service.TouristSpot;

import com.example.demo.Model.TouristSpot;

import java.util.List;

public interface TouristSpotService {
    List<TouristSpot> getAllSpots();
    TouristSpot getSpotById(Integer spotId);
    String addSpot(TouristSpot newSpot);
    String removeSpotById(Integer spotId);

}
