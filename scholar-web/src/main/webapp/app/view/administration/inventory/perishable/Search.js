Ext.define('scholar.view.administration.inventory.perishable.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.perishableSearch',
	id:'perishableSearch',
	requires : [ 'scholar.view.administration.inventory.perishable.NewPerishable'],
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'addPerishable',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deletePerishable',
		} ]
	}, {
        xtype: 'pagingtoolbar',
        store: 'administration.inventory.infra.SearchStore',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }    ],
	store :  'administration.inventory.infra.SearchStore',
//		new Ext.data.ArrayStore({
//		fields : [ {
//			text : 'Id',
//			dataIndex : 'id',
//			hidden: true
//		}, {
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
//				[ 'Bread', '','10 pounds'	,'9/1 12:00am' ],
//				[ 'Biscuit', '','100 packs',	'9/1 12:00am' ],
//				[ 'Bun', '','12 packs'	,'9/1 12:00am' ] 
//			   ]
//	}),
	columnLines : true,
	columns : [ {
		text : 'Item ID',
		sortable : false,
		dataIndex : 'itemId'
	}, {
		text : 'Item Name',
		width : 75,
		sortable : true,
		dataIndex : 'itemName'
	},
	{
		text : 'Quantity',
		width : 75,
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
	listeners : {
		selectionchange : function(model, records) {
			if (records[0]) {
				this.up('form').getForm().loadRecord(
						records[0]);
			}
		}
	}
});

