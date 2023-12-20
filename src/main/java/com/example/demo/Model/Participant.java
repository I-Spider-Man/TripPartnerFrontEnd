package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Participant {
    @Id
    @GeneratedValue
    private Integer participantId;
    @Column(name = "user_id", unique = true)
    private Integer userId;
    private Integer groupId;
    private Integer participationCount = 0;
    private boolean status ;

    public Integer getParticipantId() {
        return participantId;
    }

    public void setParticipantId(Integer participantId) {
        this.participantId = participantId;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public Integer getParticipationCount() {
        return participationCount;
    }

    public void setParticipationCount(Integer participationCount) {
        this.participationCount = participationCount;
    }

    public void increaseParticipationCount() {
        this.participationCount += 1;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Participant{" +
                "participantId=" + participantId +
                ", userId=" + userId +
                ", groupId=" + groupId +
                ", participationCount=" + participationCount +
                ", status=" + status +
                '}';
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Participant() {
    }

    public Participant(Integer participantId, Integer userId, Integer groupId, Integer participationCount, boolean status) {
        this.participantId = participantId;
        this.userId = userId;
        this.groupId = groupId;
        this.participationCount = participationCount;
        this.status = status;
    }
}
