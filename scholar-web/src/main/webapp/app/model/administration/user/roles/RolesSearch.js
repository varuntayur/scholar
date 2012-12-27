Ext.define('scholar.model.administration.user.roles.RolesSearch', {
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