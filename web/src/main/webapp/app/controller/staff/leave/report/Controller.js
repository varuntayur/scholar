Ext.define('scholar.controller.staff.leave.report.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.leave.report.Controller!');
	},

	views : [ 'staff.leave.report.Search' ],

	stores : [ 'staff.leave.report.SearchStore' ],
	
	models : [ 'staff.leave.report.SearchModel' ]

});