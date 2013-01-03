Ext.define('scholar.view.administration.settings.course.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.courseSearch',
	id:'settingsCourseSearch',
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
        store: 'administration.settings.course.SearchStore',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    } ],
	store : 'administration.settings.course.SearchStore',
	columnLines : true,
	columns : [ {
		text : 'Course Id',
		sortable : false,
		flex:1,
		dataIndex : 'id',
		hidden: true
	}, {
		text : 'Course Code',
		sortable : false,
		flex:1,
		dataIndex : 'courseCode'
	}, {
		text : 'Course Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'courseName'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		flex : 1,
		width : 85,
		sortable : true,
		dataIndex : 'lastChange'
	} ]
});

