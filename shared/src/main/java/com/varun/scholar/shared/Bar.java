package com.varun.scholar.shared;

import javax.ejb.Local;

/**
 * Bar is provided in a shared API jar, that can be referenced by any
 * application wishing to.
 * 
 * @author Pete Muir
 * 
 */
@Local
public interface Bar {

	public String createOrUpdate(String vehicleJson);

	public void remove(String vehicleJson);

	public String find(Object vehicleId);

}
