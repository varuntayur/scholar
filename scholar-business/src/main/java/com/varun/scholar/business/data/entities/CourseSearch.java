package com.varun.scholar.business.data.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
public class CourseSearch extends AbstractEntity {
	String courseCode;
	String courseName;
	@Temporal(TemporalType.DATE)
	Date lastChange;
}
