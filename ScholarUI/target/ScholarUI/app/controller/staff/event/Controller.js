Ext.define('scholar.controller.staff.event.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.event.Controller!');
		
		this.control({
			'#staffEvent':{
				itemdblclick:this.editEvent				
			},
			'events button[action=addEvent]':{
				click:this.addEvent				
			},
			'events button[action=deleteEvent]':{
				click:this.deleteEvent				
			},
			
			'#staffMemo':{
				itemdblclick:this.editMemo
			},
			'memos button[action=addMemo]':{
				click:this.addMemo
			},
			'memos button[action=deleteMemo]':{
				click:this.deleteMemo
			}
		});
	},
	
	addMemo: function()
	{
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Memo Detail',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ {
				xtype : 'memoDetail'
			} ]
		}).show();
	},
	
	deleteMemo: function(grid,record)
	{
		
	},
	
	editMemo: function(grid,record)
	{
		 var admForm = Ext.widget('memoDetail');
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Memo Detail',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},
	
	addEvent: function()
	{
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Exam Schedule Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ {
				xtype : 'eventDetail'
			} ]
		}).show();
	},
	
	deleteEvent: function(grid,record)
	{
		
	},
	
	editEvent: function(grid,record)
	{
		 var admForm = Ext.widget('eventDetail');
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Exam Schedule Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'staff.event.Manager' ,'staff.event.MemoDetail','staff.event.EventDetail'],

	stores : [ 'staff.event.MemoStore',
	           'staff.event.EventStore',
	           'administration.settings.course.Store',
	           'administration.settings.batch.Store' ],
	
	models : [ 'staff.event.MemoModel',
	           'staff.event.EventModel'
	         ]

});