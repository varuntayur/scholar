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

import com.varun.scholar.shared.interfaces.administration.settings.NationalityCrud;

@Named
@Path("/")
public class Nationality {

	@Inject
	private NationalityCrud nationality;

	public Nationality() {
	}

	@GET
	@Path("/nationality")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return nationality.findAll(page, start, limit);
	}

	@POST
	@Path("/nationality")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		return nationality.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/nationality")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		return nationality.remove(vehicleJson);
	}

	@PUT
	@Path("/nationality")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		return nationality.createOrUpdate(vehicleJson);
	}

}
