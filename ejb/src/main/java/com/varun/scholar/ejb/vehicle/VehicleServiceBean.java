package com.varun.scholar.ejb.vehicle;

import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.varun.scholar.data.model.Vehicle;
import com.varun.scholar.shared.VehicleService;

@Stateless
public class VehicleServiceBean implements VehicleService {
	@PersistenceContext
	private EntityManager em;

	@Inject
	private Logger log;

	public Vehicle createOrUpdate(Vehicle vehicle) {
		return em.merge(vehicle);
	}

	public void remove(Vehicle vehicle) {
		em.remove(em.merge(vehicle));
	}

	public Vehicle find(Object id) {
		return em.find(com.varun.scholar.data.model.Vehicle.class, id);
	}
}