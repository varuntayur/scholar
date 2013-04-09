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

import com.varun.scholar.shared.interfaces.administration.inventory.InfraCrud;

@Named
@Path("/")
public class Infra {

	@Inject
	private InfraCrud infra;

	public Infra() {
	}

	@GET
	@Path("/infra")
	@Produces({ "application/json" })
	public String getInfra(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return infra.findAll(page, start, limit);
	}

	@POST
	@Path("/infra")
	@Produces({ "application/json" })
	public String postInfra(String json) {
		return infra.createOrUpdate(json);
	}

	@DELETE
	@Path("/infra")
	@Produces({ "application/json" })
	public String deleteInfra(String json) {
		return infra.remove(json);
	}

	@PUT
	@Path("/infra")
	@Produces({ "application/json" })
	public String putInfra(String json) {
		return infra.createOrUpdate(json);
	}

}
