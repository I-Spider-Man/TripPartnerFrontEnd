package com.example.demo.Service;

import java.util.List;

import com.example.demo.Model.User;

public interface UserService {
	List<User> getAllUser();
	User getUserById(Integer userId);
	boolean addUser(User user);
	boolean removeUserById(Integer userId);
	User getByUserName(String userName);
	boolean checkUser(String userEmail);
}
