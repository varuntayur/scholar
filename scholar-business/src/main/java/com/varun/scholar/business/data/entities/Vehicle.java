package com.varun.scholar.business.data.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Vehicle extends AbstractEntity{

	private String vehicleNumber;
	private String vehicleDetails;
	
	@Temporal(TemporalType.DATE)
	private Date lastUpdatedDate;

	public Vehicle() {
	}


	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public String getVehicleDetails() {
		return vehicleDetails;
	}

	public void setVehicleDetails(String vehicleDetails) {
		this.vehicleDetails = vehicleDetails;
	}

	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
	}

	public void setLastUpdatedDate(Date lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
	}

}
