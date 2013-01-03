package com.varun.scholar.rest.administration.settings;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.varun.scholar.shared.interfaces.adminstration.settings.institution.CourseCrud;

@Named
@Path("/")
public class Course {

	@Inject
	private CourseCrud course;

	public Course() {
	}

	@GET
	@Path("/course")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return course.findAll(page, start, limit);
	}

	@POST
	@Path("/course")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		return course.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/course")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		return course.remove(vehicleJson);
	}

	@PUT
	@Path("/course")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		return course.createOrUpdate(vehicleJson);
	}

}
