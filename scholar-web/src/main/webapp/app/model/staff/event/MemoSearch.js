Ext.define('scholar.model.staff.event.MemoSearch', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'memoName',
		type : 'string'
	}, {
		name : 'memoDescription',
		type : 'string'
	}, {
		name : 'memoDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],
	
});