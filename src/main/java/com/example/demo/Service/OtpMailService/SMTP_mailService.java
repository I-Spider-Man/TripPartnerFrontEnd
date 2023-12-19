package com.example.demo.Service.OtpMailService;

import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import com.example.demo.Model.User;
import com.example.demo.Service.UserServices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
@Service
public class SMTP_mailService {
	@Autowired
	private JavaMailSender javaMailSender;
	private final Map<String,String> otpStorage=new HashMap<>();
	
	public void sendMailService(String mail,String Subject ,String message) throws MessagingException {
		MimeMessage mimeMessage=javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(mimeMessage);
		mimeMessageHelper.setTo(mail);
		mimeMessageHelper.setSubject(Subject);
		mimeMessageHelper.setText(message);
		javaMailSender.send(mimeMessage);
	}
	public String sendOTPService(String mail) {
		String otp=generateOtp();
		otpStorage.put(mail, otp);
		try {
			sendOtpToMail(mail,otp);
			return otp;
		}catch(MessagingException e) {
			throw new RuntimeException("unable to send otp.");
		}
	}
	public boolean verifyOtp(String email,String userEnteredOtp) {
		String storedOtp = otpStorage.get(email);
		return storedOtp != null && storedOtp.equals(userEnteredOtp);
	}
	private String generateOtp() {
		SecureRandom random=new SecureRandom();
		int otp= 10000+random.nextInt(900000);
		return String.valueOf(otp);
	}
	private void sendOtpToMail(String email,String otp) throws MessagingException{
		MimeMessage mimeMessage=javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(mimeMessage);
		mimeMessageHelper.setTo(email);
		mimeMessageHelper.setSubject("Your OTP is");
		mimeMessageHelper.setText("<p> your OTP is:"+otp+"</p>",true);
		javaMailSender.send(mimeMessage);
	}
}
