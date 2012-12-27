package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class MemoSearch extends AbstractEntity {
	String memoName;
	String memoDescription;
	Date memoDate;
}
