Ext.define('scholar.model.staff.event.EventSearch', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'eventName',
		type : 'string'
	}, {
		name : 'eventDescription',
		type : 'string'
	},
	{
		name : 'eventStartDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	},
	{
		name : 'eventEndDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}],
	
});