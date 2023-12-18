package com.example.demo.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Group;
import com.example.demo.Model.Organizer;
import com.example.demo.Model.RequestWrapper;
import com.example.demo.Service.Organizer.OrganizerService;

@RestController
@RequestMapping("/organizer")
public class OrganizerController {
	private OrganizerService organizerService;
	@PostMapping
	public Group addOrganizer(@RequestBody RequestWrapper wrapper) {
		Organizer organizer=wrapper.getOrganizer();
		Group group=wrapper.getGroup();
		return organizerService.addOrganizer(organizer,group);
	}
	
}
