package com.varun.scholar.business.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Vehicle {
	@Id
	@GeneratedValue
	private Long id;
	private String title;

	private String vehicleNumber;
	private String vehicleDetails;
	private Date lastUpdatedDate;

	public Vehicle() {
	}

	public Vehicle(String title) {
		this.title = title;
	}
}
