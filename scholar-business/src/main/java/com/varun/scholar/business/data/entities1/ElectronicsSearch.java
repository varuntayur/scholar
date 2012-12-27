package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class ElectronicsSearch extends AbstractEntity {
	String itemId;
	String itemName;
	String itemDescription;
	String quantity;
	Date itemAcquisitionDate;
}
