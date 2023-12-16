package com.example.demo.Service;

import java.util.List;

public interface Scheduling {
    void checkGroupStatus();
    void setParticipantStatus();
    void setOrganizerStatus();
    List<Integer> getActiveGrpId();
    void addActiveGrpId(Integer activeGrpId);
    List<Integer> getNotActiveGrpId();
//    void addNotActiveGrpId(Integer notActiveGrpId);


}
