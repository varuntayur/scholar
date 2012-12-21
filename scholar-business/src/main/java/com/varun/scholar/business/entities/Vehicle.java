package com.varun.scholar.business.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Vehicle {

	@Id
	@GeneratedValue
	private Long vehicleId;

	private String vehicleNumber;
	private String vehicleDetails;
	
	@Temporal(TemporalType.DATE)
	private Date lastUpdatedDate;

	public Vehicle() {
	}

	public Long getId() {
		return vehicleId;
	}

	public void setId(Long id) {
		this.vehicleId = id;
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
