package com.varun.scholar.business;

import java.util.List;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import com.google.gson.Gson;
import com.varun.scholar.business.entities.Vehicle;
import com.varun.scholar.shared.transport.VehicleService;

@Stateless
public class VehicleServiceImpl implements VehicleService {

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	private Gson gson = new Gson();

	@PostConstruct
	private void insertSeed() {
		Vehicle vh = new Vehicle();
		vh.setTitle("Test");
		vh.setVehicleDetails("Test 123");
		createOrUpdate(gson.toJson(vh));
	}

	public String find(Object id) {
		return null;
	}

	@Override
	public String createOrUpdate(String vehicleJson) {
		Vehicle vh = gson.fromJson(vehicleJson, Vehicle.class);
		em.merge(vh);
		return "Success";
	}

	@Override
	public void remove(String vehicleJson) {
		em.remove(em.merge(vehicleJson));

	}

	@Override
	public String findAll() {

		@SuppressWarnings("unchecked")
		List<Vehicle> vehicles = em.createQuery("from Vehicle v")
				.getResultList();

		return gson.toJson(vehicles);
	}

}
