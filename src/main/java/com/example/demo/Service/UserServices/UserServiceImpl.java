package com.example.demo.Service.UserServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.OtpMailService.SMTP_mailService;

import jakarta.mail.MessagingException;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepo;
	@Autowired
    private SMTP_mailService mailService;
	@Override
	public List<User> getAllUser() {
		return (List<User>) userRepo.findAll(); 
	}
	
	@Override
	public User getUserById(Integer userId) {
		return userRepo.findById(userId).get();
	}
	
	@Override
	public boolean addUser(User newUser) {
		Optional<User> user=userRepo.findByUserEmail(newUser.getUserEmail());
		if(user.isEmpty()) {
				userRepo.save(newUser);
				try {
					String Email=newUser.getUserEmail();
	            	String Subject="User creation";
	            	String Content="Hii "+newUser.getUserName()+ "\nWelcome to Trip partner, Thank you for joining us";
	            	mailService.sendMailService(Email,Subject,Content);
				} catch (MessagingException e) {
					e.printStackTrace();
				}
				return true;
		}
		else {
			return false;
		}
	}

	@Override
	public String removeUserById(Integer userId) {
		Optional<User> user=userRepo.findById(userId);
		if(user.isPresent()){
			userRepo.deleteById(userId);
			return "user with id: "+userId+" is removed successfully";
		}
		else {
			return "user with id: "+userId+" is not found";
		}
	}
	
	@Override
	public User getByUserEmail(String userEmail) {
		Optional<User> user=userRepo.findByUserEmail(userEmail);
		return user.orElse(null);
	}
	
	@Override
	public List<User> getAllByUserName(String userName) {
		return userRepo.findAllByUserName(userName);
	}

}
