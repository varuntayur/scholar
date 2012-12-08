Ext.define('scholar.view.library.OPAC', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.library.lookup.Search'],
	alias: 'widget.opacLookup',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [{
						xtype : 'button',
						iconCls:'x-icon-new',
						text : 'Add',
						action:'addBook',
				 },
				 {
						xtype : 'button',
						iconCls:'x-icon-delete',
						text : 'Delete',
						action:'deleteBook',
				 },
		         {
						xtype : 'button',
						iconCls:'x-icon-apply-issue',
						text : 'Issue',
						action:'return'
   				  },
				  {
						xtype : 'button',
						iconCls:'x-icon-apply-return',
						text : 'Return',
						action:'return'
				   },
				   {
						xtype : 'button',
						iconCls:'x-icon-apply-reserve',
						text : 'Reserve',
						action:'reserve'
				   },
				   {
						xtype : 'button',
						iconCls:'x-icon-apply-request',
						text : 'Request',
						action:'request',
				   }
				  ]
	} ],
    title:'OPAC',
    layout:'fit',
    items: [{
       			xtype: 'librarySearch'
    		}]	
});

