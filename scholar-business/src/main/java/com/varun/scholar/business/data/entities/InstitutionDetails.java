package com.varun.scholar.business.data.entities;

import javax.persistence.Entity;

@Entity
public class InstitutionDetails extends AbstractEntity {

	private String name;
	private String address;
	private String phone;
	private String fax;

	public InstitutionDetails() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

}
