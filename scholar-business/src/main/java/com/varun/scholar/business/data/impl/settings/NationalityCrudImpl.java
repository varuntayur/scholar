package com.varun.scholar.business.data.impl.settings;

import java.util.List;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

import com.google.gson.Gson;
import com.varun.scholar.business.data.entities.settings.Nationality;
import com.varun.scholar.shared.interfaces.CrudOperations;
import com.varun.scholar.shared.interfaces.adminstration.settings.NationalityCrud;

@Stateless
public class NationalityCrudImpl implements NationalityCrud {

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	private Gson gson = new Gson();

	public String find(Long id) {
		return gson.toJson(em.find(Nationality.class, id));
	}

	@Override
	public String createOrUpdate(String json) {
		em.merge(gson.fromJson(json, Nationality.class));
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String remove(String json) {
		Nationality fromJson = gson.fromJson(json, Nationality.class);
		Nationality find = em.find(Nationality.class, fromJson.getId());
		em.remove(find);
		em.flush();
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String findAll(int page, int start, int limit) {

		CriteriaQuery<Nationality> criteria = em.getCriteriaBuilder()
				.createQuery(Nationality.class);

		criteria.select(criteria.from(Nationality.class));

		List<Nationality> vehicles = em.createQuery(criteria)
				.setMaxResults(limit).setFirstResult(start).getResultList();

		int resultCount = em.createQuery(criteria).getResultList().size();
		String total = "\"total\":" + resultCount;

		String vehiclesJson = gson.toJson(vehicles);

		return "{" + total + ", \"data\":" + vehiclesJson + "}";
	}

}
