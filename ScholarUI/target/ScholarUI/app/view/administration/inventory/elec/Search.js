Ext.define('scholar.view.administration.inventory.elec.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.elecSearch',
	id:'inventoryElecSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'addElec',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteElec',
		} ]
	} ],
	store : 'administration.inventory.elec.SearchStore',
	columnLines : true,
	columns : [ {
		text : 'Item ID',
		sortable : false,
		flex:1,
		dataIndex : 'itemId'
	}, {
		text : 'Item Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'itemName'
	},
	{
		text : 'Item Description',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'itemDescription'
	},
	{
		text : 'Quantity',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'quantity'
	},
	{
		xtype : 'datecolumn',
		text : 'Acquisition Date',
		flex : 1,
		width : 85,
		sortable : true,
		dataIndex : 'itemAcquisitionDate'
	}  ],
});

