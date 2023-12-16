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
	private Integer eventId;
	private Integer spotId;
	private String about;
	private boolean groupStatus;
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
	public Integer getEventId() {
		return eventId;
	}
	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}
	public Integer getSpotId() {
		return spotId;
	}
	public void setSpotId(Integer spotId) {
		this.spotId = spotId;
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
		System.out.println(groupStatus);
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
	public Group(Integer groupId, String groupName, Integer organizerId, Integer eventId, Integer spotId, String about,
			boolean groupStatus, Integer participantsLimit, LocalDate dateFrom, LocalDate dateTo) {
		super();
		this.groupId = groupId;
		this.groupName = groupName;
		this.organizerId = organizerId;
		this.eventId = eventId;
		this.spotId = spotId;
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
