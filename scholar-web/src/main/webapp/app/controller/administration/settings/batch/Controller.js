Ext.define('scholar.controller.administration.settings.batch.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized batch.Controller!');
			
		this.control({
			'#batchSearch' : {
				itemdblclick: this.editBatchSettings,
				render:this.loadBatchSettings
			},
			
			'batchSearch button[action=add]' : {
            	click: this.addBatch
            },
            'batchSearch button[action=delete]' : {
            	click: this.deleteBatch
            }
		});
	},
	
	loadBatchSettings: function()
	{
		this.getAdministrationSettingsBatchSearchStoreStore().loadPage(1);
	},
	
	
	deleteBatch: function()
	{
		var store = this.getAdministrationSettingsBloodgroupStoreStore();
		var selection = Ext.ComponentQuery.query('#batchSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
        store.loadPage(1);
	},
	
	addBatch: function()
	{
		var admForm = Ext.widget('batchDetail',{ store: this.getAdministrationSettingsBatchSearchStoreStore() });
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Batch Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	editBatchSettings: function(grid, record)
	{
         
	        var admForm = Ext.widget('batchDetail',{ store: this.getAdministrationSettingsBatchSearchStoreStore(), isEdit: true  });
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Batch Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.settings.batch.Manager',
	          'administration.settings.batch.Detail'],

	stores : [ 'administration.settings.batch.Store',
	           'administration.settings.batch.SearchStore',
	           'administration.settings.batch.SubjectStore'
	         ],
	
	models : [ 'administration.settings.batch.Combo',
	           'administration.settings.batch.BatchSearch',
	           'administration.settings.batch.SubjectSearch'
	         ]

});