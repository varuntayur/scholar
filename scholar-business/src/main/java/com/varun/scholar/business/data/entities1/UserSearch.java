package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class UserSearch extends AbstractEntity {
	String userName;
	String userRole;
	Date lastChange;
}
