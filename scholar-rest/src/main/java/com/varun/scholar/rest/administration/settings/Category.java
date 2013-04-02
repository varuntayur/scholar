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

import com.varun.scholar.shared.interfaces.administration.settings.CategoryCrud;

@Named
@Path("/")
public class Category {

	@Inject
	private CategoryCrud category;

	public Category() {
	}

	@GET
	@Path("/category")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return category.findAll(page, start, limit);
	}

	@POST
	@Path("/category")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		return category.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/category")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		return category.remove(vehicleJson);
	}

	@PUT
	@Path("/category")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		return category.createOrUpdate(vehicleJson);
	}

}
