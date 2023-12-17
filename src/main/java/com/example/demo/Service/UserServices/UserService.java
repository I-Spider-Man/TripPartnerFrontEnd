package com.example.demo.Service.UserServices;

import java.util.List;

import com.example.demo.Model.User;

public interface UserService {
	List<User> getAllUser();
	User getUserById(Integer userId);
	boolean addUser(User user);
	User getByUserName(String userName);
	boolean checkUser(String userEmail);
}
