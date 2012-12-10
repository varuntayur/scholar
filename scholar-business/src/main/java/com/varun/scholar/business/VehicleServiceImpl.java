package com.varun.scholar.business;

import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

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
		vh.setVehicleNumber("ka05");
		vh.setVehicleDetails("Test 123");
		vh.setLastUpdatedDate(new Date());
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
	public String findAll(int page, int start, int limit) {

		CriteriaQuery<Vehicle> criteria = em.getCriteriaBuilder().createQuery(
				Vehicle.class);
		
		criteria.select(criteria.from(Vehicle.class));

		List<Vehicle> vehicles = em.createQuery(criteria).setMaxResults(limit)
				.setFirstResult(start).getResultList();

//		@SuppressWarnings("unchecked")
//		List<Vehicle> vehicles = em.createQuery("from Vehicle v")
//				.setMaxResults(limit).getResultList();

		return gson.toJson(vehicles);
	}

}
