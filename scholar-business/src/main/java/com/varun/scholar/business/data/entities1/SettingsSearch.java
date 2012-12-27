package com.varun.scholar.business.data.entities1;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class SettingsSearch extends AbstractEntity {
	int institutionDetailsId;
	String name;
	String address;
	String phone;
	String fax;
}
