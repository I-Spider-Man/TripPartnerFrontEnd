package com.example.demo.Service.Event;

import com.example.demo.Model.Event;
import com.example.demo.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService{
    @Autowired
    private EventRepository eventRepository;
    @Override
    public List<Event> getAllEvents() {
        return (List<Event>) eventRepository.findAll();
    }

    @Override
    public String addEvent(Event newEvent) {
        eventRepository.save(newEvent);
        return "Event "+newEvent.getEventId()+" Added Successfully ";
    }

    @Override
    public String deleteEvent(Integer eventId) {
        Optional<Event> event=eventRepository.findById(eventId);
        if(event.isPresent()){
        eventRepository.deleteById(eventId);
        return "Event "+event.get().getEventName()+" Removed Successfully";
    }else{
            return "Event with id "+eventId+" not present in database";
        }
    }

    @Override
    public Event getEventById(Integer eventId) {
        Optional<Event> event=eventRepository.findById(eventId);
        return event.orElse(null);
    }
}
