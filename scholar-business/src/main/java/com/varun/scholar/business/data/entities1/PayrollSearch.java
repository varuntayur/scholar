package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class PayrollSearch extends AbstractEntity {
	String userName;
	String userRole;
	Date dateOfJoining;
	String grade;
	String experience;
	Date lastChange;
}
