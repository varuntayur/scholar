Ext.define('scholar.controller.administration.settings.bloodgroup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized bloodgroup.Controller!');
		
		this.control({
			'#bloodgroupSearch' : {
				itemdblclick: this.editBloodgroupSettings,
				render:this.loadBloodgroup
			},
			
			'bloodgroupSearch button[action=add]' : {
            	click: this.addBloodgroup
            },
            'bloodgroupSearch button[action=delete]' : {
            	click: this.deleteBloodgroup
            }
		});
	},
	
	loadBloodgroup: function()
	{
		this.getAdministrationSettingsBloodgroupStoreStore().loadPage(1);
	},
	
	deleteBloodgroup: function()
	{
		var store = this.getAdministrationSettingsBloodgroupStoreStore();
		var selection = Ext.ComponentQuery.query('#bloodgroupSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
	},
	
	addBloodgroup: function()
	{
		var admForm = Ext.widget('bloodgroupDetail',{ store: this.getAdministrationSettingsBloodgroupStoreStore() });
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Bloodgroup Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	editBloodgroupSettings: function(grid, record)
	{
	        var admForm = Ext.widget('bloodgroupDetail',{ store: this.getAdministrationSettingsBloodgroupStoreStore(), isEdit: true  });
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'BloodGroup Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.settings.bloodgroup.Manager' ],

	stores : [ 'administration.settings.bloodgroup.Store'
	         ],
	
	models : [ 'administration.settings.bloodgroup.BloodgroupSearch'
	         ]

});