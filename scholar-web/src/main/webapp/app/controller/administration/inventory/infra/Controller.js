Ext.define('scholar.controller.administration.inventory.infra.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.infra.Controller!');
		this.control({
			'#infraSearch':{
				itemdblclick: this.editInfraInventory,
				render:this.loadInfraInventorySettings
			},
			'infraSearch button[action=addInfra]':{
				click: this.addInfraInventory
			},
			'infraSearch button[action=deleteInfra]':{
				click: this.deleteInfraInventory
			}
		});
	},
		
	loadInfraInventorySettings:function()
	{
		this.getAdministrationInventoryInfraSearchStoreStore().loadPage(1);
	},
	
	editInfraInventory: function(grid,record)
	{
		var admForm = Ext.widget('newInfraInv',{store:this.getAdministrationInventoryInfraSearchStoreStore(),isEdit: true});
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
		 var admForm = Ext.widget('newInfraInv',{store:this.getAdministrationInventoryInfraSearchStoreStore()});
		
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
	
	models : [ 'administration.inventory.infra.InfraSearch' ]

});