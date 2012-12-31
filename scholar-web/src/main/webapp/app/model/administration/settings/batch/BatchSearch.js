Ext.define('scholar.model.administration.settings.batch.BatchSearch', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	},{
		name : 'batchName',
		type : 'string'
	}, {
		name : 'courseName',
		type : 'string'
	}, {
		name : 'section',
		type : 'string'
	}, {
		name : 'startDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}, {
		name : 'endDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]

});