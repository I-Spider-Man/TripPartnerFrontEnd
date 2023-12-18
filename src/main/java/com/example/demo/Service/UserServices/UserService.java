package com.example.demo.Service.UserServices;

import java.util.List;

import com.example.demo.Model.User;

public interface UserService {
	List<User> getAllUser();
	User getUserById(Integer userId);
	boolean addUser(User user);
	List<User> getAllByUserName(String userName);
	User getByUserEmail(String userEmail);
	boolean checkUser(String userEmail);
}
