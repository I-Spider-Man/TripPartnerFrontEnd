package com.example.demo.Model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Party")
public class Group {
	@Id
	@GeneratedValue
	private Integer groupId;
	private String groupName;
	private LocalDate dateFrom;
	private LocalDate dateTo;
	private Integer organizerId;
	private String eventName;
	private String spotName;
	private String about;
	private boolean groupStatus = true;
	private Integer participantsLimit;
	
	public Integer getGroupId() {
		return groupId;
	}
	public void setGroupId(Integer groupId) {
		this.groupId = groupId;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public Integer getOrganizerId() {
		return organizerId;
	}
	public void setOrganizerId(Integer organizerId) {
		this.organizerId = organizerId;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getSpotName() {
		return spotName;
	}
	public void setSpotName(String spotName) {
		this.spotName = spotName;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
	}
	public boolean isGroupStatus() {
		return groupStatus;
	}
	public void setGroupStatus(boolean groupStatus) {
		this.groupStatus = groupStatus;
	}
	public Integer getParticipantsLimit() {
		return participantsLimit;
	}
	public void setParticipantsLimit(Integer participantsLimit) {
		this.participantsLimit = participantsLimit;
	}
	public LocalDate getDateFrom() {
		return dateFrom;
	}
	public void setDateFrom(LocalDate dateFrom) {
		this.dateFrom = dateFrom;
	}
	public LocalDate getDateTo() {
		return dateTo;
	}
	public void setDateTo(LocalDate dateTo) {
		this.dateTo = dateTo;
	}
	public Group(Integer groupId, String groupName, Integer organizerId, String eventName, String spotName, String about,
			boolean groupStatus, Integer participantsLimit, LocalDate dateFrom, LocalDate dateTo) {
		super();
		this.groupId = groupId;
		this.groupName = groupName;
		this.organizerId = organizerId;
		this.eventName = eventName;
		this.spotName = spotName;
		this.about = about;
		this.groupStatus = groupStatus;
		this.participantsLimit = participantsLimit;
		this.dateFrom = dateFrom;
		this.dateTo = dateTo;
	}
	public Group() {
		super();
	}
	


}
