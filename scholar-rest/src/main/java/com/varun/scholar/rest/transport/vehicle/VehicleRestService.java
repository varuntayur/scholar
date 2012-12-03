package com.varun.scholar.rest.transport.vehicle;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.jboss.as.quickstarts.interapp.shared.Foo;

import com.google.gson.Gson;
import com.varun.scholar.shared.VehicleService;

@Path("/")
public class VehicleRestService {

	
	@Inject
	private Foo foo;

	private Gson gson = new Gson();

	public VehicleRestService() {
	}

	@GET
	@Path("/vehicle")
	@Produces({ "application/json" })
	public String getVehicle(@QueryParam("_dc") long dc,
			@QueryParam("page") int page, @QueryParam("start") int start,
			@QueryParam("limit") int limit) {

		System.out.println("_dc=" + dc + " page=" + page + " start=" + start
				+ " limit=" + limit);

		String temp = "{\"total\": 100, \"data\": ["
				+ gson.toJson(new VehicleDao()) + "] }";

		System.out.println(foo.getName());

		// rc.createOrUpdate(new Vehicle("Test"));

		return temp;
	}

	@POST
	@Path("/vehicle")
	@Produces({ "application/json" })
	public boolean postVehicle(String a, String b, String c, String d) {
		System.out.println(a + b + c + d);
		return true;
	}

	@DELETE
	@Path("/vehicle")
	@Produces({ "application/json" })
	public boolean deleteVehicle(String a, String b, String c, String d) {
		System.out.println(a + b + c + d);
		return true;
	}

	@PUT
	@Path("/vehicle")
	@Produces({ "application/json" })
	public boolean putVehicle(String a, String b, String c, String d) {
		System.out.println(a + b + c + d);
		return true;
	}

	public static void main(String[] args) {
		System.out.println(new Gson().toJson(new VehicleDao()));
	}
}
