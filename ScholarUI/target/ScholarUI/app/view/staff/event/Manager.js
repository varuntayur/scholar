Ext.define('scholar.view.staff.event.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'scholar.view.staff.event.Event','scholar.view.staff.event.Memo' ],
	alias : 'widget.eventManager',
	title:'Events/Memos',
	items : [{
	        	 title : 'Event Register',
	        	 layout:'fit',
	        	 xtype : 'events',
	        	 iconCls:'x-icon-events'
	         },
	         {
	        	 title : 'Memos',
	        	 layout:'fit',
	        	 xtype : 'memos',
	        	 iconCls:'x-icon-memo'
	         }
	        ]
});

