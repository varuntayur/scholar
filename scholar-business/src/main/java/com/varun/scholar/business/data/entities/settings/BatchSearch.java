package com.varun.scholar.business.data.entities.settings;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class BatchSearch extends AbstractEntity {
	String batchName;
	String courseName;
	String section;
	@Temporal(TemporalType.DATE)
	Date startDate;
	@Temporal(TemporalType.DATE)
	Date endDate;
	@Temporal(TemporalType.DATE)
	Date lastChange;
}
