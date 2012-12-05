package com.varun.scholar.business;

import java.util.logging.Logger;

import javax.ejb.Singleton;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import com.varun.scholar.shared.Bar;

/**
 * The Bar bean is registered as an EJB singleton, allowing it to be used in
 * other applications.
 * 
 * @author Pete Muir
 * 
 */
@Singleton
public class BarImpl implements Bar {

	// @Inject
	// private Foo foo;

	@Inject
	private Logger log;

	@Inject
	private EntityManager em;

	private String name;

	@Override
	public String getName() {

		System.out.println(em.toString());

		return name;
	}

	@Override
	public void setName(String name) {
		this.name = name;
	}

}
