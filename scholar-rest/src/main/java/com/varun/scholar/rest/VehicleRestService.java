package com.varun.scholar.rest;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.varun.scholar.shared.transport.VehicleService;

@Named
@Path("/")
public class VehicleRestService {

	@Inject
	private VehicleService vehicleService;

	public VehicleRestService() {
	}

	@GET
	@Path("/vehicle")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return vehicleService.findAll(page, start, limit);
	}

	@POST
	@Path("/vehicle")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		vehicleService.createOrUpdate(vehicleJson);
		return vehicleService.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/vehicle")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		System.out.println(vehicleJson);
		return vehicleService.remove(vehicleJson);
	}

	@PUT
	@Path("/vehicle")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		System.out.println(vehicleJson);
		return vehicleService.createOrUpdate(vehicleJson);
	}

}
