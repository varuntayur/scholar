Ext.define('scholar.model.library.lookup.LookupSearch', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'isbn',
		type : 'string'
	}, {
		name : 'bookName',
		type : 'string'
	}, {
		name : 'publisher',
		type : 'string'
	}, {
		name : 'author',
		type : 'string'
	}, {
		name : 'addedDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]
	
});