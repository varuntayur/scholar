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
        store: 'administration.inventory.perishable.SearchStore',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }    ],
	store :  'administration.inventory.perishable.SearchStore',
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
	}  ]
//,
//	listeners : {
//		selectionchange : function(model, records) {
//			if (records[0]) {
//				this.up('form').getForm().loadRecord(
//						records[0]);
//			}
//		}
//	}
});

