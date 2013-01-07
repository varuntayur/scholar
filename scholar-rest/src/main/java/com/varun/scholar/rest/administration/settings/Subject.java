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

import com.varun.scholar.shared.interfaces.adminstration.settings.SubjectCrud;

@Named
@Path("/")
public class Subject {

	@Inject
	private SubjectCrud subject;

	public Subject() {
	}

	@GET
	@Path("/subject")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return subject.findAll(page, start, limit);
	}

	@POST
	@Path("/subject")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		return subject.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/subject")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		return subject.remove(vehicleJson);
	}

	@PUT
	@Path("/subject")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		return subject.createOrUpdate(vehicleJson);
	}

}
