Ext.define('scholar.controller.administration.settings.nationality.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized nationality.Controller!');
		
		this.control({
			'#nationalitySearch' : {
				itemdblclick: this.editNationality,
				render:this.loadNationality
			},
			
			'nationalitySearch button[action=add]' : {
            	click: this.addNationality
            },
            'nationalitySearch button[action=delete]' : {
            	click: this.deleteNationality
            }
		});
	},
	
	loadNationality: function()
	{
		this.getAdministrationSettingsNationalitySearchStoreStore().loadPage(1);
	},
	
	deleteNationality: function()
	{
		var store = this.getAdministrationSettingsNationalityStore();
		var selection = Ext.ComponentQuery.query('#nationalitySearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
	},
	
	addNationality: function()
	{
		var admForm = Ext.widget('nationalityDetail',{ store: this.getAdministrationSettingsNationalitySearchStoreStore() });
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Nationality Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	editNationality: function(grid, record)
	{
	        var admForm = Ext.widget('nationalityDetail',{ store: this.getAdministrationSettingsNationalitySearchStoreStore(), isEdit: true  });
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Nationality Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.settings.nationality.Manager' ],

	stores : [ 'administration.settings.nationality.SearchStore' ],
	
	models : [ 'administration.settings.nationality.Search'  ]

});