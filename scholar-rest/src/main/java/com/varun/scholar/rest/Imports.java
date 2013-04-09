package com.varun.scholar.rest;

import javax.ejb.EJB;
import javax.enterprise.inject.Produces;

import com.varun.scholar.shared.interfaces.administration.settings.BatchCrud;
import com.varun.scholar.shared.interfaces.administration.settings.BloodgroupCrud;
import com.varun.scholar.shared.interfaces.administration.settings.CategoryCrud;
import com.varun.scholar.shared.interfaces.administration.settings.CourseCrud;
import com.varun.scholar.shared.interfaces.administration.settings.DepartmentCrud;
import com.varun.scholar.shared.interfaces.administration.settings.InstitutionDetailsCrud;
import com.varun.scholar.shared.interfaces.administration.settings.NationalityCrud;
import com.varun.scholar.shared.interfaces.administration.settings.SubjectCrud;
import com.varun.scholar.shared.interfaces.administration.users.RolesCrud;
import com.varun.scholar.shared.interfaces.administration.users.UsersCrud;
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
	@EJB(lookup = "java:global/scholar-business/InstitutionDetailsCrudImpl!com.varun.scholar.shared.interfaces.administration.settings.InstitutionDetailsCrud")
	private InstitutionDetailsCrud institutionDetails;

	@Produces
	@EJB(lookup = "java:global/scholar-business/CourseCrudImpl!com.varun.scholar.shared.interfaces.administration.settings.CourseCrud")
	private CourseCrud courseCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/NationalityCrudImpl!com.varun.scholar.shared.interfaces.administration.settings.NationalityCrud")
	private NationalityCrud nationalityCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/DepartmentCrudImpl!com.varun.scholar.shared.interfaces.administration.settings.DepartmentCrud")
	private DepartmentCrud departmentCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/CategoryCrudImpl!com.varun.scholar.shared.interfaces.administration.settings.CategoryCrud")
	private CategoryCrud categoryCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/BloodgroupCrudImpl!com.varun.scholar.shared.interfaces.administration.settings.BloodgroupCrud")
	private BloodgroupCrud bloodgroupCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/BatchCrudImpl!com.varun.scholar.shared.interfaces.administration.settings.BatchCrud")
	private BatchCrud batchCrud;

	@Produces
	@EJB(lookup = "java:global/scholar-business/SubjectCrudImpl!com.varun.scholar.shared.interfaces.administration.settings.SubjectCrud")
	private SubjectCrud subjectCrud;
	
	@Produces
	@EJB(lookup = "java:global/scholar-business/RolesCrudImpl!com.varun.scholar.shared.interfaces.administration.users.RolesCrud")
	private RolesCrud rolesCrud;
	
	@Produces
	@EJB(lookup = "java:global/scholar-business/UsersCrudImpl!com.varun.scholar.shared.interfaces.administration.users.UsersCrud")
	private UsersCrud usersCrud;

	private Imports() {
	}

}
