Ext.define('scholar.model.staff.lookup.Search', {
	extend: 'Ext.data.Model',
	fields : [  {
		name : 'id',
		type : 'int'
	},{
		name : 'employeeId',
		type : 'string'
	}, {
		name : 'staffName',
		type : 'string'
	}, {
		name : 'department',
		type : 'string'
	}, {
		name : 'address',
		type : 'string'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],
	
});