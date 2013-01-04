package com.varun.scholar.business.data.entities.transport;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class Route extends AbstractEntity {

	private String routeNumber;
	private String vehicleNumber;
	private String routeDetails;
	private String driverName;

	@Temporal(TemporalType.DATE)
	private Date lastUpdatedDate;

	public Route() {
	}

	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
	}

	public void setLastUpdatedDate(Date lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
	}

	public String getRouteNumber() {
		return routeNumber;
	}

	public void setRouteNumber(String routeNumber) {
		this.routeNumber = routeNumber;
	}

	public String getRouteDetails() {
		return routeDetails;
	}

	public void setRouteDetails(String routeDetails) {
		this.routeDetails = routeDetails;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

}
