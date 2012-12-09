package com.varun.scholar.rest;

import javax.ejb.EJB;
import javax.enterprise.inject.Produces;

import com.varun.scholar.shared.transport.VehicleService;

public class Imports {

	@Produces
	@EJB(lookup = "java:global/scholar-business/VehicleServiceImpl!com.varun.scholar.shared.transport.VehicleService")
	private VehicleService vehicle;

	private Imports() {
		// Disable instantiation of this class
	}

}
