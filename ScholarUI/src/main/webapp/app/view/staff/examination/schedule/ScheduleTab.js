Ext.define('scholar.view.staff.examination.schedule.ScheduleTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.scheduleTab',
	title : 'Schedule',
	requires : [ 'scholar.view.staff.examination.schedule.Detail',	             	             
	             'scholar.view.staff.examination.schedule.Search'],
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	layout : {
		 type : 'border',
		 padding : 5
	 },
	 defaults : {
		 split : true
	 },

	items : [{		
	        	 	xtype:'scheduleSearch',
	        	 	region:'center'
			 }]
});
