Ext.define('scholar.model.student.admission.SearchModel', {
	extend: 'Ext.data.Model',
    fields : [ {
		name : 'admissionNumber',
		type : 'string'
	},
	{
		name : 'studentName',
		type : 'string'
	},
	{
		name : 'sex',
		type : 'string'
	},
	{
		name : 'courseName',
		type : 'string'
	},
	{
		name : 'section',
		type : 'string'
	},
	{
		name : 'batchName',
		type : 'string'
	},
	{
		name : 'dateOfBirth',
		type : 'date',
		dateFormat : 'Y-m-d'
	},
	{
		name : 'bloodGroupName',
		type : 'string'
	},
	{
		name : 'nationality',
		type : 'string'
	},
	{
		name : 'categoryName',
		type : 'string'
	},
	{
		name : 'admissionDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]
	
});