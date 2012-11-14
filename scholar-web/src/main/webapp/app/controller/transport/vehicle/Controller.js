Ext.define('scholar.controller.transport.vehicle.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.vehicle.Controller!');
		
		this.control({
			'#vehicleSearch': {
				itemdblclick: this.editVehicleDetails
			},
			'#vehicleSearch button[action=addVehicle]':{
				click: this.editVehicleDetails
			}
		});
		
	},
	
	editVehicleDetails: function(grid,record)
	{
		 var admForm = Ext.widget('vehicleDetail');
	        admForm.loadRecord(record);
		
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Vehicle Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,			
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},

	views : [ 'transport.vehicle.Lookup', 'transport.vehicle.Detail' ],

	stores : [ 'transport.vehicle.SearchStore' ],
	
	models : [ 'transport.vehicle.SearchModel' ]

});