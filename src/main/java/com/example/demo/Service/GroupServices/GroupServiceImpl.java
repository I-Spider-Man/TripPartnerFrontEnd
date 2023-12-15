package com.example.demo.Service.GroupServices;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

	private List<Integer> activeGrpId =new ArrayList<>();
	private List<Integer> notActiveGrpId=new ArrayList<>();
	
	
	@PostConstruct
    private void initializeActiveAndNotActiveLists() {
        // Initialize the lists based on the initial state in the database
        List<Group> allGroups = grpRepo.findAll();
        for (Group group : allGroups) {
            if (group.isGroupStatus()) {
                activeGrpId.add(group.getGroupId());
            } else {
                notActiveGrpId.add(group.getGroupId());
            }
        }
    }
	
 	@Override
	public List<Group> getAllGroups() {
		return (List<Group>) grpRepo.findAll();
	}

	@Override
	public String addGroup(Group newGroup) {
		Optional<Group> grp=grpRepo.findByOrganizerId(newGroup.getOrganizerId());
		if(grp.isPresent()) {
			if(grp.get().isGroupStatus()==false) {
				grpRepo.save(newGroup);
				activeGrpId.add(newGroup.getGroupId());
				return "GROUP SUCCESSFULLY CREATED";
			}
			else {
				return "YOU ARE ALREADY ORGANIZING ONE EVENT";
			}
		}
		else {
			grpRepo.save(newGroup);
			activeGrpId.add(newGroup.getGroupId());
			return "GROUP SUCCESSFULLY CREATED";
		}
	}

	@Override
	public Group getGroupById(Integer grpId) {
		Optional<Group> grp=grpRepo.findById(grpId);
		if(grp.isPresent()) {
			return grp.get();
		}
		else {
			return null;
		}
	}

	@Override
	@Scheduled(fixedRate=7000)
	public void setGroupInactive() {
	    List<Group> allActiveGrp = grpRepo.findAllById(activeGrpId);
	    LocalDate currentDate = LocalDate.now();
	    
	    allActiveGrp.forEach(grp -> {
	        if (currentDate.isAfter(grp.getDateTo()) || currentDate.isEqual(grp.getDateTo())) {
	            grp.setGroupStatus(false);
	            activeGrpId.remove(grp.getGroupId());
	            notActiveGrpId.add(grp.getGroupId());
	        }
	    });
	    
	    grpRepo.saveAll(allActiveGrp);
	   	    
	    System.out.println("active group id "+activeGrpId);
	    System.out.println("inactive group id "+notActiveGrpId);
	}

	@Override
	public Group getGroupByOrganizerId(Integer orgId) {
		Optional<Group> grp=grpRepo.findByOrganizerId(orgId);
		if(grp.isPresent()) {
			return grp.get();
		}
		else {
			return null;
		}
	}
}
