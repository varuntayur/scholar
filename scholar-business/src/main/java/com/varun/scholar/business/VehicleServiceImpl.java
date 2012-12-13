package com.varun.scholar.business;

import java.util.List;
import java.util.logging.Logger;

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
	
	// @PostConstruct
	// private void insertSeed() {
	// Vehicle vh = new Vehicle();
	// vh.setVehicleNumber("ka05");
	// vh.setVehicleDetails("Test 123");
	// vh.setLastUpdatedDate(new Date());
	// createOrUpdate(gson.toJson(vh));
	// }

	public String find(Object id) {
		return null;
	}

	@Override
	public String createOrUpdate(String vehicleJson) {
		em.merge(gson.fromJson(vehicleJson, Vehicle.class));
		return findAll(1, 1, VehicleService.NUM_RECS);
	}

	@Override
	public String remove(String vehicleJson) {
		em.remove(em.merge(gson.fromJson(vehicleJson, Vehicle.class)));
		em.flush();
		return findAll(1, 1, VehicleService.NUM_RECS);
	}

	@Override
	public String findAll(int page, int start, int limit) {

		CriteriaQuery<Vehicle> criteria = em.getCriteriaBuilder().createQuery(
				Vehicle.class);

		criteria.select(criteria.from(Vehicle.class));

		List<Vehicle> vehicles = em.createQuery(criteria).setMaxResults(limit)
				.setFirstResult(start).getResultList();

		int resultCount = em.createQuery(criteria).getResultList().size();
		String total = "\"total\":" + resultCount;

		String vehiclesJson = gson.toJson(vehicles);

		return "{" + total + ", \"data\":" + vehiclesJson + "}";
	}

}
