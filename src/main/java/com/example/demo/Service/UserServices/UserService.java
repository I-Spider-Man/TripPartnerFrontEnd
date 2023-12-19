package com.example.demo.Service.UserServices;

import java.util.List;

import com.example.demo.Model.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
	List<User> getAllUser();
	User getUserById(Integer userId);
	ResponseEntity<String> addUser(User user);
	String removeUserById(Integer userId);
	List<User> getAllByUserName(String userName);
	User getByUserEmail(String userEmail);
}
