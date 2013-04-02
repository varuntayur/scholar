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

import com.varun.scholar.shared.interfaces.administration.settings.BloodgroupCrud;

@Named
@Path("/")
public class Bloodgroup {

	@Inject
	private BloodgroupCrud bloodgroup;

	public Bloodgroup() {
	}

	@GET
	@Path("/bloodgroup")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return bloodgroup.findAll(page, start, limit);
	}

	@POST
	@Path("/bloodgroup")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		return bloodgroup.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/bloodgroup")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		return bloodgroup.remove(vehicleJson);
	}

	@PUT
	@Path("/bloodgroup")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		return bloodgroup.createOrUpdate(vehicleJson);
	}

}
