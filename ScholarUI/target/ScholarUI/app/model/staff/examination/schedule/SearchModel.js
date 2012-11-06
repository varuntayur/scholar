Ext.define('scholar.model.staff.examination.schedule.SearchModel', {
	extend: 'Ext.data.Model',		
	fields : [ {
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