package com.varun.scholar.business.data.entities1;

import java.util.Date;

import javax.persistence.Entity;

import com.varun.scholar.business.data.entities.AbstractEntity;

@Entity
public class LookupSearch extends AbstractEntity {
	String isbn;
	String bookName;
	String publisher;
	String author;
	Date addedDate;
}
