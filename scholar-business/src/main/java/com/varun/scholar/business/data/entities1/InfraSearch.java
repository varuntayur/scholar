package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class InfraSearch extends AbstractEntity {
	String itemId;
	String itemName;
	String quantity;
	Date itemAcquisitionDate;
}
