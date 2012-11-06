Ext.define('scholar.controller.staff.leave.settings.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.leave.settings.Controller!');
	},

	views : [ 'staff.leave.Manager' ],

	stores : [ 'staff.leave.settings.Store' ],
	
	models : [ 'staff.leave.settings.Model' ]

});