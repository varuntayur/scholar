Ext.define('scholar.controller.administration.settings.batch.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized batch.Controller!');
			
		this.control({
			'#settingsBatchSearch' : {
				itemdblclick: this.editBatchSettings
			},
			
			'batchSearch button[action=add]' : {
            	click: this.addBatch
            },
            'batchSearch button[action=delete]' : {
            	click: this.addCourse
            }
		});
	},
	
	addCourse: function()
	{
		
	},
	
	addBatch: function()
	{
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
			items : [ {
				xtype : 'batchDetail'
			} ]
		}).show();
	},
	
	editBatchSettings: function(grid, record)
	{
		 console.log('Double clicked on ' + record.get('batchName'));
         
	        var admForm = Ext.widget('batchDetail');
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
	           'administration.settings.batch.SearchStore'
	         ],
	
	models : [ 'administration.settings.batch.Model',
	           'administration.settings.batch.SearchModel'
	         ]

});