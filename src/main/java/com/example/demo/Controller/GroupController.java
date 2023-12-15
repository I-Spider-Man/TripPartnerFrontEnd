package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Group;
import com.example.demo.Service.GroupServices.GroupService;

@RestController
@RequestMapping("/Group")

public class GroupController {
	@Autowired
	private GroupService grpService;
	@GetMapping
	public List<Group> getAllGroup(){
		return grpService.getAllGroups();	
	}
	@PostMapping
	public String addGroup(@RequestBody Group newGrp) {
		System.out.println(newGrp);
		return grpService.addGroup(newGrp);
	}
}
