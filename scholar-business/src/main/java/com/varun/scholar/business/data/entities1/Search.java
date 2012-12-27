package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class Search extends AbstractEntity {
	String employeeId;
	String staffName;
	String department;
	String address;
	Date lastChange;
}
