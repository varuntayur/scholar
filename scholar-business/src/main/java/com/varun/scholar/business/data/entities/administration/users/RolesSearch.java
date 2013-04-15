package com.varun.scholar.business.data.entities.administration.users;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class RolesSearch extends AbstractEntity {
	String roleName;
	@Temporal(TemporalType.DATE)
	Date lastChange;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List<Permission> lstPermissions;

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Date getLastChange() {
		return lastChange;
	}

	public void setLastChange(Date lastChange) {
		this.lastChange = lastChange;
	}

	public List<Permission> getLstPermissions() {
		return lstPermissions;
	}

	public void setLstPermissions(List<Permission> lstPermissions) {
		this.lstPermissions = lstPermissions;
	}
	
	@Override
	public String toString() {
		return this.roleName + "," + this.lstPermissions.toString();
	}

}
