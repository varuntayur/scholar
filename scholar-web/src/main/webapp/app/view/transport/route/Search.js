Ext.define('scholar.view.transport.route.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.routeSearch',
	store : 'transport.route.Search',
	id:'routeSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'addRoute',
		},
		{
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteRoute',
		}
		]
	}, {
        xtype: 'pagingtoolbar',
        store: 'transport.route.Search',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    } ],
	columnLines : true,
	columns : [
				{
					text : 'Route Id',
					width : 10,
					hidden: true,
					sortable : true,
					dataIndex : 'id'
				},
	           {
					text : 'Route Number',
					width : 95,
					flex : 1,
					sortable : true,
					dataIndex : 'routeNumber'
			   }, 
	           {
					text : 'Vehicle Number',
					width : 105,
					flex : 1,
					sortable : true,
					dataIndex : 'vehicleNumber'
				},
				{
					text : 'Route Details',
					width : 75,
					sortable : true,
					flex:1,
					dataIndex : 'routeDetails'
				},
				{
					text : 'Driver Name',
					width : 75,
					flex : 1,
					sortable : true,
					dataIndex : 'driverName'
				},
				{
					xtype : 'datecolumn',
					text : 'Last Updated Date',
					width : 85,
					flex:1,
					sortable : true,
					dataIndex : 'lastUpdatedDate'
				}
			],
	viewConfig : {
		stripeRows : true
	}
});

