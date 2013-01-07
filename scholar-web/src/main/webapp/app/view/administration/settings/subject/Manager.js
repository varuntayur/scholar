Ext.define('scholar.view.administration.settings.subject.Manager', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.subjectManager',
	frame : true,
	id:'settingsSubjectSearch',
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
	constructor : function() {
		return this.callParent();
	},
	constructor : function(config) {
		if (config) {
			this.store = config.store;
			this.isEdit = (typeof config.isEdit === "undefined") ? false: true;
		}
		this.callParent();
	},
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
	},
});
