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

import com.varun.scholar.shared.interfaces.administration.settings.BatchCrud;

@Named
@Path("/")
public class Batch {

	@Inject
	private BatchCrud batch;

	public Batch() {
	}

	@GET
	@Path("/batch")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return batch.findAll(page, start, limit);
	}

	@POST
	@Path("/batch")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		return batch.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/batch")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		return batch.remove(vehicleJson);
	}

	@PUT
	@Path("/batch")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		return batch.createOrUpdate(vehicleJson);
	}

}
