Ext.define('scholar.model.administration.user.roles.SearchModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'roleName',
		type : 'string'
	},{
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]

});