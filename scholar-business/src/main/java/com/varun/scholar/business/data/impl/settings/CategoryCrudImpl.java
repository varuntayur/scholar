package com.varun.scholar.business.data.impl.settings;

import java.util.List;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

import com.google.gson.Gson;
import com.varun.scholar.business.data.entities.settings.Category;
import com.varun.scholar.shared.interfaces.CrudOperations;
import com.varun.scholar.shared.interfaces.adminstration.settings.CategoryCrud;

@Stateless
public class CategoryCrudImpl implements CategoryCrud {

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	private Gson gson = new Gson();

	public String find(Long id) {
		return gson.toJson(em.find(Category.class, id));
	}

	@Override
	public String createOrUpdate(String vehicleJson) {
		em.merge(gson.fromJson(vehicleJson, Category.class));
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String remove(String vehicleJson) {
		Category fromJson = gson.fromJson(vehicleJson, Category.class);
		Category find = em.find(Category.class, fromJson.getId());
		em.remove(find);
		em.flush();
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String findAll(int page, int start, int limit) {

		CriteriaQuery<Category> criteria = em.getCriteriaBuilder().createQuery(
				Category.class);

		criteria.select(criteria.from(Category.class));

		List<Category> vehicles = em.createQuery(criteria).setMaxResults(limit)
				.setFirstResult(start).getResultList();

		int resultCount = em.createQuery(criteria).getResultList().size();
		String total = "\"total\":" + resultCount;

		String vehiclesJson = gson.toJson(vehicles);

		return "{" + total + ", \"data\":" + vehiclesJson + "}";
	}

}
