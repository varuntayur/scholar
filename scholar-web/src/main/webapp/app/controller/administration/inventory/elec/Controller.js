Ext.define('scholar.controller.administration.inventory.elec.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.elec.Controller!');
		
		this.control({
			'#inventoryElecSearch':{
				itemdblclick: this.editElecInventory,
				render:this.loadElecInventorySettings
			},
			'inventoryElecSearch button[action=addElec]':{
				click: this.addElecInventory
			},
			'inventoryElecSearch button[action=deleteElec]':{
				click: this.deleteElecInventory
			}
		});
	},
	
	loadElecInventorySettings : function(){
		this.getAdministrationInventoryElecSearchStoreStore().loadPage(1);
	},
	
	editElecInventory: function(grid,record)
	{
		var admForm = Ext.widget('newElectricInv',{store:this.getAdministrationInventoryElecSearchStoreStore(),isEdit: true});
        admForm.loadRecord(record);
	
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Electronic Item',
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
	
	addElecInventory: function(grid,record)
	{
		 var admForm = Ext.widget('newElectricInv',{store:this.getAdministrationInventoryElecSearchStoreStore()});
		
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Electronic Item',
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
	
	deleteElecInventory: function(grid,record)
	{
		var store = this.getAdministrationInventoryElecSearchStoreStore();
		var selection = Ext.ComponentQuery.query('#inventoryElecSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
        store.loadPage(1);
	},

	views : [ 'administration.inventory.elec.Search','administration.inventory.elec.NewElectricInv' ],

	stores : [ 'administration.inventory.elec.SearchStore' ],
	
	models : [ 'administration.inventory.elec.ElectronicsSearch' ]

});