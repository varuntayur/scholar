Ext.define('scholar.model.administration.user.roles.RolesSearch', {
	extend : 'Ext.data.Model',
	idProperty: 'id',
	fields : [{
		name : 'id',
		type : 'int'
	}, {
		name : 'roleName',
		type : 'string'
	},{
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	},
	{
		name : 'lstPermissions',
		type : 'string'
	} ]

});