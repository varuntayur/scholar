Ext.define('scholar.controller.student.attendance.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized student.attendance.Controller!');
	},

	views : [ 'student.attendance.Manager' ],

	stores : [ 'student.attendance.SearchStore',
			'administration.settings.course.Store',
			'administration.settings.batch.Store' ],

	models : [ 'student.attendance.SearchModel' ]

});