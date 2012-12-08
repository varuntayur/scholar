package com.varun.scholar.business;

import java.util.logging.Logger;

import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.InjectionPoint;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * The Imports class is used to alias EJBs imported from other applications as
 * local CDI beans, thus allowing consumers to ignore the details of
 * inter-application communication.
 * 
 * @author Pete Muir
 * 
 */
public class Imports {

	// @SuppressWarnings("unused")
	// @Produces
	// @EJB(lookup =
	// "java:global/jboss-as-inter-app-A/FooImpl!org.jboss.as.quickstarts.interapp.shared.Foo")
	// private Foo foo;

	@Produces
	@PersistenceContext
	private EntityManager em;

	@Produces
	public Logger produceLog(InjectionPoint injectionPoint) {
		return Logger.getLogger(injectionPoint.getMember().getDeclaringClass()
				.getName());
	}

	private Imports() {
		// Disable instantiation of this class
	}

}
