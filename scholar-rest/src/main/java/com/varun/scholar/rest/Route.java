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

import com.varun.scholar.shared.interfaces.transport.RouteCrud;

@Named
@Path("/")
public class Route {

	@Inject
	private RouteCrud routeService;

	public Route() {
	}

	@GET
	@Path("/route")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return routeService.findAll(page, start, limit);
	}

	@POST
	@Path("/route")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {		
		return routeService.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/route")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		System.out.println(vehicleJson);
		return routeService.remove(vehicleJson);
	}

	@PUT
	@Path("/route")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		System.out.println(vehicleJson);
		return routeService.createOrUpdate(vehicleJson);
	}

}
