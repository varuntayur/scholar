Ext.define('scholar.model.administration.settings.nationality.Search', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	},{
		name : 'nationalityName',
		type : 'string'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]

});