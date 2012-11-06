Ext.define('scholar.model.administration.settings.course.SearchModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'courseCode',
		type : 'string'
	}, {
		name : 'courseName',
		type : 'string'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],

});