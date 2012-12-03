package com.varun.scholar.data.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Vehicle {

	@Id
	@GeneratedValue
	private Long id;
	private String title;

	public Vehicle() {
	}

	public Vehicle(String title) {
		this.title = title;
	}
}