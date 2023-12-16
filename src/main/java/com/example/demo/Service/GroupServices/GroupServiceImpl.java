package com.example.demo.Service.GroupServices;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.demo.Service.Scheduling;
import com.example.demo.Service.SchedulingImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Group;
import com.example.demo.Repository.GroupRepository;

import jakarta.annotation.PostConstruct;

@Service
public class GroupServiceImpl implements GroupService {
	@Autowired
	private GroupRepository grpRepo;

	@Autowired
	private Scheduling scheduling;
	
 	@Override
	public List<Group> getAllGroups() {
		return (List<Group>) grpRepo.findAll();
	}

	@Override
	public String addGroup(Group newGroup) {
		Optional<Group> grp=grpRepo.findByOrganizerId(newGroup.getOrganizerId());
		if(grp.isPresent()) {
			if(!grp.get().isGroupStatus()) {
				grpRepo.save(newGroup);
				scheduling.addActiveGrpId(newGroup.getGroupId());
				return "GROUP SUCCESSFULLY CREATED";
			}
			else {
				return "YOU ARE ALREADY ORGANIZING ONE EVENT";
			}
		}
		else {
			grpRepo.save(newGroup);
			scheduling.addActiveGrpId(newGroup.getGroupId());
			return "GROUP SUCCESSFULLY CREATED";
		}
	}

	@Override
	public Group getGroupById(Integer grpId) {
		Optional<Group> grp=grpRepo.findById(grpId);
        return grp.orElse(null);
	}



	@Override
	public Group getGroupByOrganizerId(Integer orgId) {
		Optional<Group> grp=grpRepo.findByOrganizerId(orgId);
        return grp.orElse(null);
	}
}
