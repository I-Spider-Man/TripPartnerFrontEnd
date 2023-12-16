package com.example.demo.Service.GroupServices;

import java.util.List;

import com.example.demo.Model.Group;

public interface GroupService {
	List<Group> getAllGroups();
	String addGroup(Group newGroup);
	Group getGroupById(Integer grpId);
	void setGroupInactive();
	Group getGroupByOrganizerId(Integer orgId);
}
