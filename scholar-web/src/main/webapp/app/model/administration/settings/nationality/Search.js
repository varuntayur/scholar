Ext.define('scholar.model.administration.settings.nationality.Search', {
	extend : 'Ext.data.Model',
	idProperty: 'id',
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