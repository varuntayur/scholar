package com.varun.scholar.business.data.impl.settings;

import java.util.List;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

import com.google.gson.Gson;
import com.varun.scholar.business.data.entities.settings.BatchSearch;
import com.varun.scholar.shared.interfaces.CrudOperations;
import com.varun.scholar.shared.interfaces.adminstration.settings.BatchCrud;

@Stateless
public class BatchCrudImpl implements BatchCrud {

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	private Gson gson = new Gson();

	public String find(Long id) {
		return gson.toJson(em.find(BatchSearch.class, id));
	}

	@Override
	public String createOrUpdate(String vehicleJson) {
		em.merge(gson.fromJson(vehicleJson, BatchSearch.class));
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String remove(String vehicleJson) {
		BatchSearch fromJson = gson.fromJson(vehicleJson, BatchSearch.class);
		BatchSearch find = em.find(BatchSearch.class, fromJson.getId());
		em.remove(find);
		em.flush();
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String findAll(int page, int start, int limit) {

		CriteriaQuery<BatchSearch> criteria = em.getCriteriaBuilder()
				.createQuery(BatchSearch.class);

		criteria.select(criteria.from(BatchSearch.class));

		List<BatchSearch> vehicles = em.createQuery(criteria)
				.setMaxResults(limit).setFirstResult(start).getResultList();

		int resultCount = em.createQuery(criteria).getResultList().size();
		String total = "\"total\":" + resultCount;

		String vehiclesJson = gson.toJson(vehicles);

		return "{" + total + ", \"data\":" + vehiclesJson + "}";
	}

}
