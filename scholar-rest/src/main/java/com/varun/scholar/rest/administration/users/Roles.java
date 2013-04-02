package com.varun.scholar.rest.administration.users;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.varun.scholar.shared.interfaces.administration.users.RolesCrud;

@Named
@Path("/")
public class Roles {

	@Inject
	private RolesCrud roles;

	public Roles() {
	}

	@GET
	@Path("/userRoles")
	@Produces({ "application/json" })
	public String getRoles(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return roles.findAll(page, start, limit);
	}

	@POST
	@Path("/userRoles")
	@Produces({ "application/json" })
	public String postRoles(String rolesJson) {
		return roles.createOrUpdate(rolesJson);
	}

	@DELETE
	@Path("/userRoles")
	@Produces({ "application/json" })
	public String deleteRoles(String rolesJson) {
		return roles.remove(rolesJson);
	}

	@PUT
	@Path("/userRoles")
	@Produces({ "application/json" })
	public String putRoles(String rolesJson) {
		return roles.createOrUpdate(rolesJson);
	}

}
