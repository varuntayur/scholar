package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class LeaveSettingsSearch extends AbstractEntity {
	String roleName;
	String numOfSickCasualLeaves;
	String numOfEarnedLeaves;
	@Temporal(TemporalType.DATE)
	Date lastChange;
}
