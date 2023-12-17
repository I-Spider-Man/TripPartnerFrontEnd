package com.example.demo.Service.Event;

import com.example.demo.Model.Event;

import java.util.List;

public interface EventService {
    List<Event> getAllEvents();
    String addEvent(Event newEvent);
    String deleteEvent(Integer eventId);
    Event getEventById(Integer eventId);
}
