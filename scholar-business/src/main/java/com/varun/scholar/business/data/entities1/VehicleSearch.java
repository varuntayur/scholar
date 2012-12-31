package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class VehicleSearch extends AbstractEntity {
	int vehicleId;
	String vehicleNumber;
	String vehicleDetails;
	@Temporal(TemporalType.DATE)
	Date lastUpdatedDate;
}
