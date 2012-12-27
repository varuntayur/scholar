Ext.define('scholar.model.administration.user.UserSearch', {
	extend : 'Ext.data.Model',
	fields : [  {
		name : 'userName',
		type : 'string'
	}, {
		name : 'userRole',
		type : 'string'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]

});