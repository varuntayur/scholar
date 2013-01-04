package com.varun.scholar.business.data.entities.settings;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class BloodGroup extends AbstractEntity {
	String abbr;
	String bloodGroupName;
}
