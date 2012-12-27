package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class PerformanceSearch extends AbstractEntity {
	String admissionNumber;
	String studentName;
	String courseName;
	String batchName;
	Date admissionDate;
	Date lastChange;
}
