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

import com.varun.scholar.shared.interfaces.administration.settings.DepartmentCrud;

@Named
@Path("/")
public class Department {

	@Inject
	private DepartmentCrud department;

	public Department() {
	}

	@GET
	@Path("/department")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return department.findAll(page, start, limit);
	}

	@POST
	@Path("/department")
	@Produces({ "application/json" })
	public String postVehicle(String vehicleJson) {
		return department.createOrUpdate(vehicleJson);
	}

	@DELETE
	@Path("/department")
	@Produces({ "application/json" })
	public String deleteVehicle(String vehicleJson) {
		return department.remove(vehicleJson);
	}

	@PUT
	@Path("/department")
	@Produces({ "application/json" })
	public String putVehicle(String vehicleJson) {
		return department.createOrUpdate(vehicleJson);
	}

}
