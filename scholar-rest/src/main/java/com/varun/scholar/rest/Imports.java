package com.varun.scholar.rest;

import javax.ejb.EJB;
import javax.enterprise.inject.Produces;

import com.varun.scholar.shared.interfaces.adminstration.settings.institution.CourseCrud;
import com.varun.scholar.shared.interfaces.adminstration.settings.institution.InstitutionDetailsCrud;
import com.varun.scholar.shared.interfaces.transport.RouteCrud;
import com.varun.scholar.shared.interfaces.transport.VehicleCrud;

public class Imports {

	@Produces
	@EJB(lookup = "java:global/scholar-business/VehicleCrudImpl!com.varun.scholar.shared.interfaces.transport.VehicleCrud")
	private VehicleCrud vehicle;
	
	@Produces
	@EJB(lookup = "java:global/scholar-business/RouteCrudImpl!com.varun.scholar.shared.interfaces.transport.RouteCrud")
	private RouteCrud route;
	
	@Produces
	@EJB(lookup = "java:global/scholar-business/InstitutionDetailsCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.institution.InstitutionDetailsCrud")
	private InstitutionDetailsCrud institutionDetails;
	
	@Produces
	@EJB(lookup = "java:global/scholar-business/CourseCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.institution.CourseCrud")
	private CourseCrud courseCrud;

	private Imports() {
	}

}
