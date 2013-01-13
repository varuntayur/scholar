Ext.define('scholar.model.administration.settings.category.CategorySearch', {
	extend : 'Ext.data.Model',
	idProperty: 'id',
	fields : [ {
		name : 'id',
		type : 'int'
	},{
		name : 'categoryName',
		type : 'string'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]

});