package com.example.demo.Service;

import java.util.List;

public interface Scheduling {
    void checkGroupStatus();
    List<Integer> getActiveGrpId();
    void addActiveGrpId(Integer activeGrpId);
    void addActiveOrganizerUserId(Integer organizerUserId);
    void addActiveParticipantUserId(Integer participantUserId);
    void addActiveEventId(Integer eventId);
    List<Integer> getActiveOrganizerId();
//    void addNotActiveGrpId(Integer notActiveGrpId);
    List<Integer> getActiveParticipantId();

}
