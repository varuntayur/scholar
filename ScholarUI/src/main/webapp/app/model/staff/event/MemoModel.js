Ext.define('scholar.model.staff.event.MemoModel', {
	extend: 'Ext.data.Model',
	fields : [ {
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