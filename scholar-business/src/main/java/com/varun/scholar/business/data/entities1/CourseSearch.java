package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class CourseSearch extends AbstractEntity {
	String courseCode;
	String courseName;
	Date lastChange;
}
