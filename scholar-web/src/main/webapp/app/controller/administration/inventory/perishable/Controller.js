Ext.define('scholar.controller.administration.inventory.perishable.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.perishable.Controller!');
		this.control({
			'#perishableSearch':{
				itemdblclick: this.editInventory,
				render:this.loadPerishableInventorySettings
			},
			'perishableSearch button[action=addPerishable]':{
				itemdblclick: this.addPerishInventory
			},
			'perishableSearch button[action=deletePerishable]':{
				itemdblclick: this.deletePerishInventory
			}
		});
	},
	loadPerishableInventorySettings: function()
	{
		this.getAdministrationInventoryInfraSearchStoreStore().loadPage(1);
	},
	
	editPerishInventory: function(grid,record)
	{
		var admForm = Ext.widget('newPerishInv',{store:this.getAdministrationInventoryInfraSearchStoreStore(),isEdit: true});
        admForm.loadRecord(record);
	
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Perishable Item',
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
	
	addPerishInventory: function(grid,record)
	{
		 var admForm = Ext.widget('newPerishInv',{store:this.getAdministrationInventoryInfraSearchStoreStore()});
		
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Perishable Item',
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
	
	deletePerishInventory: function(grid,record)
	{
		
	},

	views : [ 'administration.inventory.infra.Search','administration.inventory.infra.NewInfra' ],

	stores : [ 'administration.inventory.infra.SearchStore' ],
	
	models : [ 'administration.inventory.infra.InfraSearch'  ]

});