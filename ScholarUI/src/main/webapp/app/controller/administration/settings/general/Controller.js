Ext.define('scholar.controller.administration.settings.general.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized settings.general.Controller!');
	},

	views : [ 'administration.settings.general.Manager' ],

	stores : [ 'administration.settings.general.Store' ],

	models : [ 'administration.settings.general.Model' ]

});