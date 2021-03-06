Ext.define('scholar.view.administration.settings.batch.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.batchSearch',
	id: 'batchSearch',
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
        store: 'administration.settings.batch.SearchStore',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }  ],
	store : 'administration.settings.batch.SearchStore',
	columnLines : true,
	columns : [ {
		text : 'Id',
		dataIndex : 'id',
		hidden: true
	},{
		text : 'Batch Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'batchName'
	}, {
		text : 'Course Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'courseName'
	}, {
		text : 'Section',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'section'
	}, {
		xtype : 'datecolumn',
		text : 'Start Date',
		width : 85,
		flex:1,
		sortable : true,
		dataIndex : 'startDate'
	}, {
		xtype : 'datecolumn',
		text : 'End Date',
		width : 85,
		flex:1,
		sortable : true,
		dataIndex : 'endDate'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	} ]	
});

