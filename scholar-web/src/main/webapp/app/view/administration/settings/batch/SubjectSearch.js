Ext.define('scholar.view.administration.settings.batch.SubjectSearch', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.batchSubjectSearch',
	frame : false,
	id:'batchSubjectSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'add',
			handler : function(){
	                             // Create a model instance
	                             var r = Ext.create('scholar.store.administration.settings.batch.SubjectStore', {	                                
	                             });
	                             this.ownerCt.ownerCt.store.insert(0, r);
	                             //cellEditing.startEditByPosition({row: 0, column: 0});
	                         }
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'delete'
		} ]
	}, {
        xtype: 'pagingtoolbar',
        store: 'administration.settings.batch.SubjectStore',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }  ],
    selModel: {
	                         selType: 'cellmodel'
	          },
    plugins: Ext.create('Ext.grid.plugin.CellEditing', {
	                     clicksToEdit: 1
	                 }),
	store : 'administration.settings.batch.SubjectStore',
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
		dataIndex : 'subjectName',
		 editor: new Ext.form.field.ComboBox({
	                             typeAhead: true,
	                             triggerAction: 'all',
	                             selectOnTab: true,
	                             store: [
	                                 ['Shade','Shade'],
	                                 ['Mostly Shady','Mostly Shady'],
	                                 ['Sun or Shade','Sun or Shade'],
	                                 ['Mostly Sunny','Mostly Sunny'],
	                                 ['Sunny','Sunny']
	                             ],
	                             lazyRender: true,
	                             listClass: 'x-combo-list-small'
	                         })
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
	} ],
	height : 250,
	width: 500,
	viewConfig : {
		stripeRows : true
	}
});

