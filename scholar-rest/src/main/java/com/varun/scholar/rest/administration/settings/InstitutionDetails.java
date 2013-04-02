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

import com.varun.scholar.shared.interfaces.administration.settings.InstitutionDetailsCrud;

@Named
@Path("/")
public class InstitutionDetails {

	@Inject
	private InstitutionDetailsCrud institutionDetails;

	public InstitutionDetails() {
	}

	@GET
	@Path("/institutionDetails")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return institutionDetails.findAll(page, start, limit);
	}

	@POST
	@Path("/institutionDetails")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		return institutionDetails.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/institutionDetails")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		return institutionDetails.remove(vehicleJson);
	}

	@PUT
	@Path("/institutionDetails")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		return institutionDetails.createOrUpdate(vehicleJson);
	}

}
