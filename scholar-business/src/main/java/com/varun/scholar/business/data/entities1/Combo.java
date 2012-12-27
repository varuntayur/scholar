package com.varun.scholar.business.data.entities1;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class Combo extends AbstractEntity {
	String abbr;
	String courseName;
}
