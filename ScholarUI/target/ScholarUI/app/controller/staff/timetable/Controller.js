Ext.define('scholar.controller.staff.timetable.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.timetable.Controller!');
	},

	views : [ 'staff.timetable.Manager' ],

	stores : [ 'staff.timetable.Store' ],
	
	models : [ 'staff.timetable.Model' ]

});