package com.varun.scholar.business.data.entities.administration.users;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class UserSearch extends AbstractEntity {
	String userName;
	String userRole;
	@Temporal(TemporalType.DATE)
	Date lastChange;
}
