package com.example.demo.Service.UserServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepo;
	@Override
	public List<User> getAllUser() {
		return (List<User>) userRepo.findAll(); 
	}
	@Override
	public User getUserById(Integer userId) {
		return userRepo.findById(userId).get();
	}
	
	@Override
	public boolean addUser(User user) {
		if(checkUser(user.getUserEmail())) {
			return false;
		}
		else {
			userRepo.save(user);
			return true;
		}
	}

	@Override
	public User getByUserName(String userName) {
		return userRepo.findByUserName(userName).get();
	}
	
	public boolean checkUser(String userEmail) {
		
		if(userRepo.findByUserEmail(userEmail).isPresent()) {
			return true;
		}else {
			return false;
		}
	}

}
