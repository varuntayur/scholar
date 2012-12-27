package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class EventSearch extends AbstractEntity {
	String eventName;
	String eventDescription;
	Date eventStartDate;
	Date eventEndDate;
}
