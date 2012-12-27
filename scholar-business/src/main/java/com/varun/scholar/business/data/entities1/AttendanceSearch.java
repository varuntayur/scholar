package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class AttendanceSearch extends AbstractEntity {
	int attendanceId;
	String admissionNumber;
	String studentName;
	String standard;
	String address;
	Date lastChange;
}
