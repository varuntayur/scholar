package com.varun.scholar.transport.vehicle;

import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.jboss.as.quickstarts.ejb.remote.stateful.RemoteCounter;

import com.google.gson.Gson;

@Path("/")
public class VehicleService {

	public VehicleService() {

		final Hashtable jndiProperties = new Hashtable();
		jndiProperties.put(Context.URL_PKG_PREFIXES,
				"org.jboss.ejb.client.naming");
		Context context;
		try {
			context = new InitialContext(jndiProperties);
			RemoteCounter rc = (RemoteCounter) context
					.lookup("ejb:/scholar-ejb/CounterBean!"
							+ RemoteCounter.class.getName() + "?stateful");
			rc.increment();
			System.out.println("Boom" + rc.getCount());
		} catch (NamingException e1) {
			e1.printStackTrace();
		}

	}

	private final Gson gson = new Gson();

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
