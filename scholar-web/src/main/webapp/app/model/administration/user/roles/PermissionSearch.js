Ext.define('scholar.model.administration.user.roles.PermissionSearch', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'roleName',
		type : 'string'
	}, {
		name : 'read',
		type : 'bool'
	}, {
		name : 'write',
		type : 'bool'
	}, {
		name : 'delete',
		type : 'bool'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]
});