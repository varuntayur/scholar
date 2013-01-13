Ext.define('scholar.model.administration.settings.bloodgroup.BloodgroupSearch', {
	extend : 'Ext.data.Model',
	idProperty: 'id',
	fields : [ {
		name : 'id',
		type : 'int'
	},{
		name : 'bloodgroupName',
		type : 'string'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]

});