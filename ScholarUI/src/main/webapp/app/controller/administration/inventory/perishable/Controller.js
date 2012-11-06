Ext.define('scholar.controller.administration.inventory.perishable.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.perishable.Controller!');
		this.control({
			'#inventoryPerishSearch':{
				itemdblclick: this.editInventory
			},
			'#inventoryPerishSearch button[action=addPerish]':{
				itemdblclick: this.addPerishInventory
			},
			'#inventoryPerishSearch button[action=deletePerish]':{
				itemdblclick: this.deletePerishInventory
			}
		});
	},
	
	editPerishInventory: function(grid,record)
	{
		var admForm = Ext.widget('newPerishInv');
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
		 var admForm = Ext.widget('newPerishInv');
		
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

//	views : [ 'administration.inventory.infra.Search','administration.inventory.infra.NewInfra' ],
//
//	stores : [ 'administration.inventory.infra.SearchStore' ],
//	
//	models : [ 'administration.inventory.infra.SearchModel'  ]

});