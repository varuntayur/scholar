Ext.define('scholar.model.staff.examination.schedule.ScheduleSearch', {
	extend: 'Ext.data.Model',		
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
			name : 'courseName',
			type : 'string'
		}, {
			name : 'batchName',
			type : 'string'
		},
		{
			name : 'subjectName',
			type : 'string'
		},
		{
			name : 'examDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ]
});