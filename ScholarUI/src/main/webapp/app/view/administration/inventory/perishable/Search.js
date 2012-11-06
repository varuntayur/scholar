Ext.define('scholar.view.administration.inventory.perishable.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.perishableSearch',
	requires : [ 'scholar.view.administration.inventory.perishable.NewPerishable'],
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			listeners : {
				click : function() {
					Ext.create('Ext.Window', {
						xtype : 'window',
						closable : true,
						minimizable : false,
						title : 'New Schedule',
						layout:'fit',
						minHeight: 250,
						minWidth: 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'hide',
						constrain : true,
						items : [ {
							xtype : 'newPerishable'
						} ]
					}).show();
				}
			}
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete'
		} ]
	} ],
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'itemId',
			type : 'string'
		}, {
			name : 'itemName',
			type : 'string'
		},
		{
			name : 'quantity',
			type : 'string'
		},
		{
			name : 'itemAcquisitionDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
				[ 'Bread', '','10 pounds'	,'9/1 12:00am' ],
				[ 'Biscuit', '','100 packs',	'9/1 12:00am' ],
				[ 'Bun', '','12 packs'	,'9/1 12:00am' ] 
			   ]
	}),
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

