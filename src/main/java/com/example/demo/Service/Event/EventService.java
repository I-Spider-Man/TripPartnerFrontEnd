package com.example.demo.Service.Event;

import com.example.demo.Model.Event;

import java.util.List;

public interface EventService {
    List<Event> getAllEvents();
    List<Event> getAllActiveEvents();
    String addEvent(Event newEvent);
    String deleteEventById(Integer eventId);
    Event getEventById(Integer eventId);
}
