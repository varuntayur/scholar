Ext.define('scholar.controller.administration.inventory.infra.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.infra.Controller!');
		this.control({
			'#inventoryInfraSearch':{
				itemdblclick: this.editInfraInventory
			},
			'#inventoryInfraSearch button[action=addInfra]':{
				click: this.addInfraInventory
			},
			'#inventoryInfraSearch button[action=deleteInfra]':{
				click: this.deleteInfraInventory
			}
		});
	},
	
	editInfraInventory: function(grid,record)
	{
		var admForm = Ext.widget('newInfraInv');
        admForm.loadRecord(record);
	
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Infrastructure Item',
			layout:'fit',
			minHeight: 250,
			minWidth: 400,
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	addInfraInventory: function(grid,record)
	{
		 var admForm = Ext.widget('newInfraInv');
		
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Infrastructure Item',
			layout:'fit',
			minHeight: 250,
			minWidth: 400,
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	deleteInfraInventory: function(grid,record)
	{
		
	},

	views : [ 'administration.inventory.infra.Search','administration.inventory.infra.NewInfra'  ],

	stores : [ 'administration.inventory.infra.SearchStore' ],
	
	models : [ 'administration.inventory.infra.SearchModel' ]

});