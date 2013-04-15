Ext.define('scholar.controller.administration.inventory.perishable.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.perishable.Controller!');
		this.control({
			'#perishableSearch':{
				itemdblclick: this.editPerishInventory,
				render:this.loadPerishableInventorySettings
			},
			'perishableSearch button[action=addPerishable]':{
				click: this.addPerishInventory
			},
			'perishableSearch button[action=deletePerishable]':{
				click: this.deletePerishInventory
			}
		});
	},
	loadPerishableInventorySettings: function()
	{
		this.getAdministrationInventoryPerishableSearchStoreStore().loadPage(1);
	},
	
	editPerishInventory: function(grid,record)
	{
		var admForm = Ext.widget('newPerishable',{store:this.getAdministrationInventoryPerishableSearchStoreStore(),isEdit: true});
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
		 var admForm = Ext.widget('newPerishable',{store:this.getAdministrationInventoryPerishableSearchStoreStore()});
		
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
		var store = this.getAdministrationInventoryPerishableSearchStoreStore();
		var selection = Ext.ComponentQuery.query('#perishableSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
        store.loadPage(1);
	},

	views : [ 'administration.inventory.perishable.NewPerishable','administration.inventory.perishable.Search' ],

	stores : [ 'administration.inventory.perishable.SearchStore' ],
	
	models : [ 'administration.inventory.perishable.PerishableSearch'  ]

});