package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class SubjectSearch extends AbstractEntity {
	String subjectName;
	String subjectCode;
	Boolean examinationRequired;
	Date startDate;
	Date endDate;
	Date lastChange;
}
