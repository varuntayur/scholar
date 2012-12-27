package com.varun.scholar.business.data.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public abstract class AbstractEntity {
	@Id
	@GeneratedValue
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
