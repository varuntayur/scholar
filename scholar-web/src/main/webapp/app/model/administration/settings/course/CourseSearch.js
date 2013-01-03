Ext.define('scholar.model.administration.settings.course.CourseSearch', {
	extend : 'Ext.data.Model',
	idProperty: 'id',
	fields : [ {
		name : 'id',
		type : 'int'
	},{
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