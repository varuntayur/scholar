package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class Model extends AbstractEntity {
	String admissionNumber;
	String studentName;
	String courseName;
	String batchName;
	@Temporal(TemporalType.DATE)
	Date admissionDate;
	@Temporal(TemporalType.DATE)
	Date lastChange;
}
