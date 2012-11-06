Ext.define('scholar.model.administration.settings.subject.SearchModel', {
	extend : 'Ext.data.Model',
	fields : [  {
		name : 'subjectName',
		type : 'string'
	},
	{
		name : 'subjectCode',
		type : 'string'
	},
	{
		name : 'examinationRequired',
		type : 'boolean'
	},
	{
		name : 'startDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}, {
		name : 'endDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]

});