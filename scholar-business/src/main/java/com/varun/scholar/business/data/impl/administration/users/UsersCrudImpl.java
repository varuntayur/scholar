package com.varun.scholar.business.data.impl.administration.users;

import java.util.List;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.varun.scholar.business.data.entities.administration.users.UserSearch;
import com.varun.scholar.shared.interfaces.CrudOperations;
import com.varun.scholar.shared.interfaces.administration.users.UsersCrud;

@Stateless
public class UsersCrudImpl implements UsersCrud {

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	private GsonBuilder gsonBuilder = new GsonBuilder();
	private Gson gson = gsonBuilder.create();

	public String find(Long id) {
		return gson.toJson(em.find(UserSearch.class, id));
	}

	@Override
	public String createOrUpdate(String rolesJson) {
		em.merge(gson.fromJson(rolesJson, UserSearch.class));
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String remove(String rolesJson) {

		UserSearch fromJson = gson.fromJson(rolesJson, UserSearch.class);
		UserSearch find = em.find(UserSearch.class, fromJson.getId());
		em.remove(find);
		em.flush();
		return findAll(1, 1, CrudOperations.NUM_RECS);
	}

	@Override
	public String findAll(int page, int start, int limit) {

		CriteriaQuery<UserSearch> criteria = em.getCriteriaBuilder()
				.createQuery(UserSearch.class);

		criteria.select(criteria.from(UserSearch.class));

		List<UserSearch> vehicles = em.createQuery(criteria)
				.setMaxResults(limit).setFirstResult(start).getResultList();

		int resultCount = em.createQuery(criteria).getResultList().size();
		String total = "\"total\":" + resultCount;

		String vehiclesJson = gson.toJson(vehicles);

		return "{" + total + ", \"data\":" + vehiclesJson + "}";
	}

}
