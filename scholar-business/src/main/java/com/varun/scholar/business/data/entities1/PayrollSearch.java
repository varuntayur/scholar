package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class PayrollSearch extends AbstractEntity {
	String userName;
	String userRole;
	@Temporal(TemporalType.DATE)
	Date dateOfJoining;
	String grade;
	String experience;
	@Temporal(TemporalType.DATE)
	Date lastChange;
}
