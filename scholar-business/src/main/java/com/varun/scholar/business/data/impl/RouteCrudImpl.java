package com.varun.scholar.business.data.impl;

import java.util.List;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

import com.google.gson.Gson;
import com.varun.scholar.business.data.entities.Route;
import com.varun.scholar.shared.interfaces.CrudOperations;
import com.varun.scholar.shared.interfaces.transport.RouteCrud;

@Stateless
public class RouteCrudImpl implements RouteCrud {

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	private Gson gson = new Gson();

	public String find(Long id) {
		return gson.toJson(em.find(Route.class, id));
	}

	@Override
	public String createOrUpdate(String vehicleJson) {
		em.merge(gson.fromJson(vehicleJson, Route.class));
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String remove(String vehicleJson) {
		Route fromJson = gson.fromJson(vehicleJson, Route.class);
		Route find = em.find(Route.class, fromJson.getId());
		em.remove(find);
		em.flush();
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String findAll(int page, int start, int limit) {

		CriteriaQuery<Route> criteria = em.getCriteriaBuilder().createQuery(
				Route.class);

		criteria.select(criteria.from(Route.class));

		List<Route> vehicles = em.createQuery(criteria).setMaxResults(limit)
				.setFirstResult(start).getResultList();

		int resultCount = em.createQuery(criteria).getResultList().size();
		String total = "\"total\":" + resultCount;

		String vehiclesJson = gson.toJson(vehicles);

		return "{" + total + ", \"data\":" + vehiclesJson + "}";
	}

}
