Ext.define('scholar.controller.transport.route.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.route.Controller!');
		
		this.control({
			'#routeSearch':{
				itemdblclick: this.editRoute,
				render:this.loadRoute
			},
			'#routeSearch button[action=addRoute]':{
				click: this.addRoute
			},
			'#routeSearch button[action=deleteRoute]':{
				click: this.deleteRoute
			}
		});
	},
	
	loadRoute: function(){		
		this.getTransportRouteSearchStore().loadPage(1);
	},

	addRoute : function(grid, record) {
		var admForm = Ext.widget('routeDetail',{ store: this.getTransportRouteSearchStore() });

		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Route Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,			
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	deleteRoute : function(grid, record) {
		console.log(record);
		var store = this.getTransportVehicleSearchStore();
		var selection = Ext.ComponentQuery.query('#routeSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
	},
	
	editRoute: function(grid,record)
	{
		var admForm = Ext.widget('routeDetail',{ store: this.getTransportRouteSearchStore(), isEdit: true });
	        admForm.loadRecord(record);
		
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Route Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,			
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},

	views : [ 'transport.route.Lookup','transport.route.Detail' ],

	stores : [ 'transport.route.Search','staff.lookup.SearchStore','transport.vehicle.Search','transport.vehicle.Combo' ],
	
	models : [ 'transport.route.RouteSearch' ]

});