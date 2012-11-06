Ext.define('scholar.controller.staff.attendance.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.attendance.Controller!');
	},

	views : [ 'staff.attendance.Manager' ],

	stores : [ 'staff.attendance.SearchStore','administration.settings.course.Store','administration.settings.batch.Store' ],
	
	models : [ 'staff.attendance.SearchModel' ]

});