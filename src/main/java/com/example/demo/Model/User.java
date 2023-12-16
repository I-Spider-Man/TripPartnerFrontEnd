package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {
	
	@Id
	@GeneratedValue
	private Integer userId;
	private String userName;
	private String userEmail;
	private String aboutUser;
	private boolean sysAdmin;
	private String userPassword;
	
	public User() {
		super();
	}
	public User(Integer userId, String userName, String userEmail, String aboutUser, boolean sysAdmin,
			String userPassword) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;
		this.aboutUser = aboutUser;
		this.sysAdmin = sysAdmin;
		this.userPassword = userPassword;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getAboutUser() {
		return aboutUser;
	}
	public void setAboutUser(String aboutUser) {
		this.aboutUser = aboutUser;
	}
	public boolean isSysAdmin() {
		return sysAdmin;
	}
	public void setSysAdmin(boolean sysAdmin) {
		this.sysAdmin = sysAdmin;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", aboutUser="
				+ aboutUser + ", sysAdmin=" + sysAdmin + ", userPassword=" + userPassword + "]";
	}
	
}
