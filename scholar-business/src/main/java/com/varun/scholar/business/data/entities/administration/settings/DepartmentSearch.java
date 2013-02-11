package com.varun.scholar.business.data.entities.administration.settings;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class DepartmentSearch extends AbstractEntity {
	String departmentName;
	@Temporal(TemporalType.DATE)
	Date lastChange;
}
