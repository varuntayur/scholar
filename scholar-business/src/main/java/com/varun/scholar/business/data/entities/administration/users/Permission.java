package com.varun.scholar.business.data.entities.administration.users;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class Permission extends AbstractEntity {
	String formName;
	boolean read;
	boolean write;
	boolean delete;
	@Temporal(TemporalType.DATE)
	Date lastChange;

	@Override
	public String toString() {
		return "Permission [formName=" + formName + ", read=" + read
				+ ", write=" + write + ", delete=" + delete + ", lastChange="
				+ lastChange + "]";
	}

}
