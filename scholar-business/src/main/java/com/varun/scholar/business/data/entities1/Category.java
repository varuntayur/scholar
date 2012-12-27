package com.varun.scholar.business.data.entities1;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class Category extends AbstractEntity {
	String abbr;
	String categoryName;
}
