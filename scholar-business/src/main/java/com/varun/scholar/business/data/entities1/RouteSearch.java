package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class RouteSearch extends AbstractEntity {
	int routeId;
	String routeNumber;
	String vehicleNumber;
	String routeDetails;
	String driverName;
	Date lastUpdatedDate;
}
