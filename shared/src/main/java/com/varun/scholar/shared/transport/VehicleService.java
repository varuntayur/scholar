package com.varun.scholar.shared.transport;

import javax.ejb.Local;


@Local
public interface VehicleService {

	public String createOrUpdate(String vehicleJson);

	public void remove(String vehicleJson);

	public String find(Object vehicleId);
	
	public String findAll(int page, int start, int limit);

}
