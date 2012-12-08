package com.varun.scholar.business;

import java.util.logging.Logger;

import javax.ejb.Singleton;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import com.varun.scholar.business.entities.Vehicle;
import com.varun.scholar.shared.transport.VehicleService;

@Singleton
public class VehicleImpl implements VehicleService {

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	public String find(Object id) {
		return null;
	}

	@Override
	public String createOrUpdate(String vehicleJson) {
		Vehicle vh = new Vehicle();
		em.merge(vh);
		return "Success";
	}

	@Override
	public void remove(String vehicleJson) {
		em.remove(em.merge(vehicleJson));

	}

}
