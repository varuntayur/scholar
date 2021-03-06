Ext.define('scholar.view.administration.settings.bloodgroup.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.bloodgroupSearch',
	frame : false,
	id:'bloodgroupSearch',
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
	}, {
        xtype: 'pagingtoolbar',
        store: 'administration.settings.bloodgroup.Store',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }   ],
	store : 'administration.settings.bloodgroup.Store',
	columnLines : true,
	columns : [  {
		text : 'Id',
		dataIndex : 'id',
		hidden: true
	},{
		text : 'BloodGroup',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'bloodgroupName'
	} ],
	height : 250,
	width: 500,
	viewConfig : {
		stripeRows : true
	}
});
