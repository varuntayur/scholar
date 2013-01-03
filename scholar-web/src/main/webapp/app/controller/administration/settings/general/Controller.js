Ext.define('scholar.controller.administration.settings.general.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized settings.general.Controller!');

		this.control({
			'#adminInstitutionDetails' : {
				activate : this.onPanelShown
			}
		});
	},

	onPanelShown : function() {
		var store = this.getAdministrationSettingsGeneralStoreStore();
		store.load({
			scope : this,
			callback : function(records, operation, success) {
				if (records[0])
					Ext.getCmp('adminInstitutionDetails').getForm().loadRecord(
							records[0]);
			}
		});
	},

	views : [ 'administration.settings.general.Manager' ],

	stores : [ 'administration.settings.general.Store' ],

	models : [ 'administration.settings.general.SettingsSearch' ]

});