Ext.define('scholar.view.administration.settings.nationality.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.nationalitySearch',
	frame : true,
	id:'nationalitySearch',
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
	store : 'administration.settings.nationality.SearchStore',
	columnLines : true,
	columns : [  {
		text : 'Id',
		dataIndex : 'id',
		hidden: true
	},{
		text : 'Nationality',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'nationalityName'
	} ],
	height : 250,
	width: 500,
	viewConfig : {
		stripeRows : true
	},
});
