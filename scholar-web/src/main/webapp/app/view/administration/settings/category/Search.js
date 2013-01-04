Ext.define('scholar.view.administration.settings.category.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.categorySearch',
	frame : true,
	id:'categorySearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'add',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'delete',
		} ]
	} ],
	store : 'administration.settings.category.Store',
	columnLines : true,
	columns : [  {
		text : 'Id',
		dataIndex : 'id',
		hidden: true
	},{
		text : 'Category',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'categoryName'
	} ],
	height : 250,
	width: 500,
	viewConfig : {
		stripeRows : true
	},
});
