package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class SubjectAllocation extends AbstractEntity {
	String batchName;
	String courseName;
	String section;
	String subject;
	Bool supervisor;
	Date startDate;
	Date endDate;
	Date lastChange;
}
