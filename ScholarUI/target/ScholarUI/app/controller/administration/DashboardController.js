Ext.define('scholar.controller.administration.DashboardController', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized administration.DashboardController!');
	},

	views : [ 'administration.Dashboard' ],

	stores : [ 'administration.dashboard.FeeCollectionStore',
			'administration.dashboard.TodayAttendanceStore',
			'administration.dashboard.FreePeriodStore' ],

	models : [ 'administration.dashboard.FeeCollectionModel',
			'administration.dashboard.TodayAttendanceModel',
			'administration.dashboard.FreePeriodModel' ]

});