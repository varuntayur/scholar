package com.varun.scholar.business.data.impl;

import java.util.List;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

import com.google.gson.Gson;
import com.varun.scholar.business.data.entities.InstitutionDetails;
import com.varun.scholar.shared.interfaces.CrudOperations;
import com.varun.scholar.shared.interfaces.adminstration.settings.institution.InstitutionDetailsCrud;

@Stateless
public class InstitutionDetailsCrudImpl implements InstitutionDetailsCrud {

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	private Gson gson = new Gson();

	public String find(Long id) {
		return gson.toJson(em.find(InstitutionDetails.class, id));
	}

	@Override
	public String createOrUpdate(String vehicleJson) {
		em.merge(gson.fromJson(vehicleJson, InstitutionDetails.class));
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String remove(String vehicleJson) {
		InstitutionDetails fromJson = gson.fromJson(vehicleJson,
				InstitutionDetails.class);
		InstitutionDetails find = em.find(InstitutionDetails.class,
				fromJson.getId());
		em.remove(find);
		em.flush();
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String findAll(int page, int start, int limit) {

		CriteriaQuery<InstitutionDetails> criteria = em.getCriteriaBuilder()
				.createQuery(InstitutionDetails.class);

		criteria.select(criteria.from(InstitutionDetails.class));

		List<InstitutionDetails> vehicles = em.createQuery(criteria)
				.setMaxResults(limit).setFirstResult(start).getResultList();

		int resultCount = em.createQuery(criteria).getResultList().size();
		String total = "\"total\":" + resultCount;

		String vehiclesJson = gson.toJson(vehicles);

		return "{" + total + ", \"data\":" + vehiclesJson + "}";
	}

}
