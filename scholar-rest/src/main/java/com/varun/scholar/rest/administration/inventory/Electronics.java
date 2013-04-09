package com.varun.scholar.rest.administration.inventory;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.varun.scholar.shared.interfaces.administration.inventory.ElectronicsCrud;

@Named
@Path("/")
public class Electronics {

	@Inject
	private ElectronicsCrud electronics;

	public Electronics() {
	}

	@GET
	@Path("/electronics")
	@Produces({ "application/json" })
	public String getElectronics(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return electronics.findAll(page, start, limit);
	}

	@POST
	@Path("/electronics")
	@Produces({ "application/json" })
	public String postElectronics(String json) {
		return electronics.createOrUpdate(json);
	}

	@DELETE
	@Path("/electronics")
	@Produces({ "application/json" })
	public String deleteElectronics(String json) {
		return electronics.remove(json);
	}

	@PUT
	@Path("/electronics")
	@Produces({ "application/json" })
	public String putElectronics(String json) {
		return electronics.createOrUpdate(json);
	}

}
