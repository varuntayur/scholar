package com.varun.scholar.transport.vehicle;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.google.gson.Gson;

@Path("/")
public class VehicleService {

	private final Gson gson = new Gson();

	@GET
	@Path("/vehicle")
	@Produces({ "application/json" })
	public String getVehicle() {
		String temp = "{ \"data\": [" + gson.toJson(new VehicleDao()) + "] }";
				
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
		return true;
	}

	@PUT
	@Path("/vehicle")
	@Produces({ "application/json" })
	public boolean putVehicle(String a, String b, String c, String d) {
		return true;
	}

	
	public static void main(String[] args) {
		System.out.println(new Gson().toJson(new VehicleDao()));
	}
}