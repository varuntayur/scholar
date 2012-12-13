package com.varun.scholar.shared.transport;

import javax.ejb.Local;


@Local
public interface VehicleService {
	
	int NUM_RECS = 25;

	public String createOrUpdate(String vehicleJson);

	public String remove(String vehicleJson);

	public String find(Object vehicleId);
	
	public String findAll(int page, int start, int limit);

}
