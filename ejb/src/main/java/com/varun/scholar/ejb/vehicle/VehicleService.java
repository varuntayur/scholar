package com.varun.scholar.ejb.vehicle;

import com.varun.scholar.data.model.Vehicle;

public interface VehicleService {
	Vehicle createOrUpdate(Vehicle vehicle);

	void remove(Vehicle book);

	Vehicle find(Object id);
}
