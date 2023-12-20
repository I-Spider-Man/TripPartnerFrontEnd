package com.example.demo.Service;

import java.util.List;

public interface Scheduling {
    void checkGroupStatus();
    List<Integer> getActiveGrpId();
    void addActiveGrpId(Integer activeGrpId);
    List<Integer> getNotActiveGrpId();
    List<Integer> getActiveOrganizerId();
//    void addNotActiveGrpId(Integer notActiveGrpId);
    List<Integer> getActiveParticipantId();

}
