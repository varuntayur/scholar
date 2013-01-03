Ext.define('scholar.controller.transport.vehicle.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.vehicle.Controller!');

		this.control({
			'#vehicleSearch' : {
				itemdblclick : this.editVehicle,
				render:this.loadVehicle
			},			
			'#vehicleSearch button[action=deleteVehicle]' : {
				click : this.deleteVehicle
			},
			'#vehicleSearch button[action=addVehicle]' : {
				click : this.addVehicle
			}
		});

	},
	
	loadVehicle: function(){
		this.getTransportVehicleSearchStore().loadPage(1);
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
		var store = this.getTransportVehicleSearchStore();
		var selection = Ext.ComponentQuery.query('#vehicleSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
        store.load();
	},

	views : [ 'transport.vehicle.Lookup', 'transport.vehicle.Detail' ],

	stores : [ 'transport.vehicle.Search' ],

	models : [ 'transport.vehicle.VehicleSearch' ]

});