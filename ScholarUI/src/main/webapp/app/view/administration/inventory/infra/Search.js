Ext.define('scholar.view.administration.inventory.infra.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.infraSearch',
	id:'inventoryInfraSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'addInfra',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteInfra',
		} ]
	} ],
	store : 'administration.inventory.infra.SearchStore',
//		new Ext.data.ArrayStore({
//		fields : [ {
//			name : 'itemId',
//			type : 'string'
//		}, {
//			name : 'itemName',
//			type : 'string'
//		},
//		{
//			name : 'quantity',
//			type : 'string'
//		},
//		{
//			name : 'itemAcquisitionDate',
//			type : 'date',
//			dateFormat : 'n/j h:ia'
//		} ],
//		data : [
//				[ 'Chairs', 'Nilkamal','100'	,'9/1 12:00am' ],
//				[ 'Chairs', 'National','150'	,'9/1 12:00am' ],
//				[ 'Table', 'National','250',	'9/1 12:00am' ],
//				[ 'Benches', 'Scholar','1002'	,'9/1 12:00am' ] ]
//	}),
	columnLines : true,
	columns : [ {
		text : 'Item ID',
		flex:1,
		sortable : false,
		dataIndex : 'itemId'
	}, {
		text : 'Item Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'itemName'
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
	} ]	
});

