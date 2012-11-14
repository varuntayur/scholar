Ext.define('scholar.view.transport.vehicle.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.vehicleSearch',
	store : 'transport.vehicle.SearchStore',
	id:'vehicleSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'addVehicle',
		},
		{
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteVehicle',
		}
		]
	} ],
	columnLines : true,
	columns : [  {
		text : 'Vehicle Number',
		width : 100,
		sortable : true,
		dataIndex : 'vehicleNumber'
	}, {
		text : 'Details',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'vehicleDetails'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated Date',
		width : 100,
		sortable : true,
		dataIndex : 'lastUpdatedDate'
	} ],
	viewConfig : {
		stripeRows : true
	}
});

