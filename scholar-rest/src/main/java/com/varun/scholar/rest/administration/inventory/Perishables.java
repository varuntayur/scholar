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

import com.varun.scholar.shared.interfaces.administration.inventory.PerishablesCrud;

@Named
@Path("/")
public class Perishables {

	@Inject
	private PerishablesCrud perishables;

	public Perishables() {
	}

	@GET
	@Path("/perishables")
	@Produces({ "application/json" })
	public String getPerishables(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return perishables.findAll(page, start, limit);
	}

	@POST
	@Path("/perishables")
	@Produces({ "application/json" })
	public String postPerishables(String json) {
		return perishables.createOrUpdate(json);
	}

	@DELETE
	@Path("/perishables")
	@Produces({ "application/json" })
	public String deletePerishables(String json) {
		return perishables.remove(json);
	}

	@PUT
	@Path("/perishables")
	@Produces({ "application/json" })
	public String putPerishables(String json) {
		return perishables.createOrUpdate(json);
	}

}
