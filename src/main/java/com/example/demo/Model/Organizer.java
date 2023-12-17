package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Organizer {
    @Id
    @GeneratedValue
    private Integer organizerId;
    @Column(name = "user_id", unique = true)
    private Integer userId;
    private boolean organizerStatus;
    private Integer organizedCount=0;

    public Organizer() {
    }

    @Override
    public String toString() {
        return "Organizer{" +
                "organizerId=" + organizerId +
                ", userId=" + userId +
                ", organizerStatus=" + organizerStatus +
                ", organizedCount=" + organizedCount +
                '}';
    }
    public void increseOrganizedCount() {
        this.organizedCount += 1;
    }
    public Integer getOrganizerId() {
        return organizerId;
    }

    public void setOrganizerId(Integer organizerId) {
        this.organizerId = organizerId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public boolean isOrganizerStatus() {
        return organizerStatus;
    }

    public void setOrganizerStatus(boolean organizerStatus) {
        this.organizerStatus = organizerStatus;
    }

    public Integer getOrganizedCount() {
        return organizedCount;
    }

    public void setOrganizedCount(Integer organizedCount) {
        this.organizedCount = organizedCount;
    }

    public Organizer(Integer organizerId, Integer userId, boolean organizerStatus, Integer organizedCount) {
        this.organizerId = organizerId;
        this.userId = userId;
        this.organizerStatus = organizerStatus;
        this.organizedCount = organizedCount;
    }
}
