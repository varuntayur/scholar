package com.varun.scholar.ejb.vehicle;

import java.util.logging.Logger;

import javax.ejb.Singleton;
import javax.inject.Inject;

import com.varun.scholar.data.model.Vehicle;
import com.varun.scholar.shared.VehicleService;

@Singleton
public class VehicleServiceBean implements VehicleService {
	// @Inject
	// private EntityManager em;

	@Inject
	private Logger log;

	public Vehicle createOrUpdate(Vehicle vehicle) {
		// return em.merge(vehicle);
		return null;
	}

	public void remove(Vehicle vehicle) {
		// em.remove(em.merge(vehicle));
	}

	public Vehicle find(Object id) {
		// return em.find(com.varun.scholar.data.model.Vehicle.class, id);
		return null;
	}
}