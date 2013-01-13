Ext.define('scholar.view.administration.settings.subject.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.subjectSearch',
	frame : false,
	id:'subjectSearch',
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
        store: 'administration.settings.subject.SearchStore',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }  ],
	store : 'administration.settings.subject.SearchStore',
	columnLines : true,
	columns : [  {
		text : 'Id',
		dataIndex : 'id',
		hidden: true
	},{
		text : 'Subject Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'subjectName'
	},
	{
		text : 'Subject Code',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'subjectCode'
	},
	{
		text : 'Examination Required',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'examinationRequired'
	},
	{
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
	}  ],
	height : 250,
	width: 500,
	viewConfig : {
		stripeRows : true
	}
});

