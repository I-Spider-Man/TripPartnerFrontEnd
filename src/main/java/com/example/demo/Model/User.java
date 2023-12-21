package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	
	@Id
	@GeneratedValue
	private Integer userId;
	private String userName;
	private String userEmail;
	private String aboutUser;
	private Role role=Role.User_Role;
	private String userPassword;
	public User() {
		super();
	}

	@Override
	public String toString() {
		return "User{" +
				"userId=" + userId +
				", userName='" + userName + '\'' +
				", userEmail='" + userEmail + '\'' +
				", aboutUser='" + aboutUser + '\'' +
				", role=" + role +
				", userPassword='" + userPassword + '\'' +
				'}';
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public User(Integer userId, String userName, String userEmail, String aboutUser, Role role, String userPassword) {
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;
		this.aboutUser = aboutUser;
		this.role = role;
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
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	
}
