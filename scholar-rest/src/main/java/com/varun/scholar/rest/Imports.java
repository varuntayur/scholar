package com.varun.scholar.rest;

import javax.ejb.EJB;
import javax.enterprise.inject.Produces;

import com.varun.scholar.shared.interfaces.adminstration.settings.BatchCrud;
import com.varun.scholar.shared.interfaces.adminstration.settings.BloodgroupCrud;
import com.varun.scholar.shared.interfaces.adminstration.settings.CategoryCrud;
import com.varun.scholar.shared.interfaces.adminstration.settings.CourseCrud;
import com.varun.scholar.shared.interfaces.adminstration.settings.DepartmentCrud;
import com.varun.scholar.shared.interfaces.adminstration.settings.InstitutionDetailsCrud;
import com.varun.scholar.shared.interfaces.adminstration.settings.NationalityCrud;
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
	@EJB(lookup = "java:global/scholar-business/InstitutionDetailsCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.InstitutionDetailsCrud")
	private InstitutionDetailsCrud institutionDetails;

	@Produces
	@EJB(lookup = "java:global/scholar-business/CourseCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.CourseCrud")
	private CourseCrud courseCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/NationalityCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.NationalityCrud")
	private NationalityCrud nationalityCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/DepartmentCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.DepartmentCrud")
	private DepartmentCrud departmentCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/CategoryCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.CategoryCrud")
	private CategoryCrud categoryCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/BloodgroupCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.BloodgroupCrud")
	private BloodgroupCrud bloodgroupCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/BatchCrudImpl!com.varun.scholar.shared.interfaces.adminstration.settings.BatchCrud")
	private BatchCrud batchCrud;

	private Imports() {
	}

}
