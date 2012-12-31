package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class PerishableSearch extends AbstractEntity {
	String itemId;
	String itemName;
	String itemDescription;
	String quantity;
	@Temporal(TemporalType.DATE)
	Date itemAcquisitionDate;
}
