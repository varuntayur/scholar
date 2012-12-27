package com.varun.scholar.business.data.entities1;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class BloodGroup extends AbstractEntity {
	String abbr;
	String bloodGroupName;
}
