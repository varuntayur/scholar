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

import com.varun.scholar.shared.interfaces.administration.users.UsersCrud;

@Named
@Path("/")
public class Users {

	@Inject
	private UsersCrud users;

	public Users() {
	}

	@GET
	@Path("/users")
	@Produces({ "application/json" })
	public String getUsers(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		return users.findAll(page, start, limit);
	}

	@POST
	@Path("/users")
	@Produces({ "application/json" })
	public String postUsers(String UsersJson) {
		return users.createOrUpdate(UsersJson);
	}

	@DELETE
	@Path("/users")
	@Produces({ "application/json" })
	public String deleteUsers(String UsersJson) {
		return users.remove(UsersJson);
	}

	@PUT
	@Path("/users")
	@Produces({ "application/json" })
	public String putUsers(String UsersJson) {
		return users.createOrUpdate(UsersJson);
	}

}
