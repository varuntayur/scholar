Ext.define('scholar.controller.transport.route.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.route.Controller!');
		
		this.control({
			'#routeSearch':{
				itemdblclick: this.viewRouteDetails
			},
			'#routeSearch button[action=addRoute]':{
				click: this.viewRouteDetails
			}
		});
	},
	
	viewRouteDetails: function(grid,record)
	{
		 var admForm = Ext.widget('routeDetail');
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

	stores : [ 'transport.route.SearchStore','staff.lookup.SearchStore','transport.vehicle.SearchStore' ],
	
	models : [ 'transport.route.SearchModel' ]

});