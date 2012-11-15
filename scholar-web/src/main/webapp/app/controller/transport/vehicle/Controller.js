Ext.define('scholar.controller.transport.vehicle.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.vehicle.Controller!');

		this.control({
			'#vehicleSearch' : {
				itemdblclick : this.editVehicle
			},
			'#vehicleSearch button[action=deleteVehicle]' : {
				click : this.deleteVehicle
			},
			'#vehicleSearch button[action=addVehicle]' : {
				click : this.addVehicle
			}
		});

	},

	addVehicle : function(grid, record) {
		var admForm = Ext.widget('vehicleDetail',{ store: this.getTransportVehicleSearchStore() });

		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Vehicle Details',
			layout : 'fit',
			autoScroll : true,
			autoRender : true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},

	editVehicle : function(grid, record) {
		var admForm = Ext.widget('vehicleDetail', { store: this.getTransportVehicleSearchStore(), isEdit: true });
		admForm.loadRecord(record);

		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Vehicle Details',
			layout : 'fit',
			autoScroll : true,
			autoRender : true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},

	deleteVehicle : function(grid, record) {
		console.log(record);
	},

	views : [ 'transport.vehicle.Lookup', 'transport.vehicle.Detail' ],

	stores : [ 'transport.vehicle.Search' ],

	models : [ 'transport.vehicle.Search' ]

});