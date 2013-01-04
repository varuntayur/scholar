package com.varun.scholar.business.data.entities.settings;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class Nationality extends AbstractEntity {
	String abbr;
	String nationality;
}
