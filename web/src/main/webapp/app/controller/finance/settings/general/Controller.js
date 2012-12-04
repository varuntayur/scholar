Ext.define('scholar.controller.finance.settings.general.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized finance.settings.general.Controller!');
	},

	views : [ 'finance.settings.Manager' ],

	stores : [ 'finance.settings.general.Store' ],
	
	models : [ 'finance.settings.general.Model' ]

});