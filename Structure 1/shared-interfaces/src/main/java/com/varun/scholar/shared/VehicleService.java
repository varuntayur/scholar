package com.varun.scholar.shared;

import javax.ejb.Local;

import com.varun.scholar.data.model.Vehicle;

@Local
public interface VehicleService {
	Vehicle createOrUpdate(Vehicle vehicle);

	void remove(Vehicle book);

	Vehicle find(Object id);
}
