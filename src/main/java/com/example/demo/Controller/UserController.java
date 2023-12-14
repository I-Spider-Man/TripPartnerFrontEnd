package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.User;
import com.example.demo.Service.UserService;

@RestController
@RequestMapping("/User")
public class UserController {
	
	@Autowired
	private UserService userServ;
	
	@GetMapping
	public List<User> getAllUser(){
		return userServ.getAllUser();
	}
	
	@PostMapping
	public String addUser(@RequestBody User newUser) {
		if(userServ.addUser(newUser)) {
			return "success User with id: "+newUser.getUserId()+" is registered";
		}else {
			return "User mail already exists";
		}
		
	}
	
	@GetMapping("name/{userName}")
	public User getUserByName(@PathVariable String userName) {
		return userServ.getByUserName(userName);
	}
	
	
}