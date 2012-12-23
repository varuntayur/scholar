package com.varun.scholar.shared.interfaces;

public interface CrudOperations {
	int NUM_RECS = 25;

	public String createOrUpdate(String json);

	public String remove(String json);

	public String find(Long id);

	public String findAll(int page, int start, int limit);
}
