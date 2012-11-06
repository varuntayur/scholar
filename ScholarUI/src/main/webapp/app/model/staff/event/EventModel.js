Ext.define('scholar.model.staff.event.EventModel', {
	extend: 'Ext.data.Model',
	fields : [ {
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