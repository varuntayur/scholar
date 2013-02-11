package com.varun.scholar.business.data.entities.administration.settings;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;


@Entity
public class SubjectSearch extends AbstractEntity {
	String subjectName;
	String subjectCode;
	boolean examinationRequired;
	@Temporal(TemporalType.DATE)
	Date startDate;
	@Temporal(TemporalType.DATE)
	Date endDate;
	@Temporal(TemporalType.DATE)
	Date lastChange;
}
