package com.varun.scholar.business.data.entities.settings;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class Category extends AbstractEntity {
	String abbr;
	String categoryName;
}
