Ext.define('scholar.view.staff.examination.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'scholar.view.staff.examination.schedule.ScheduleTab',
	             'scholar.view.staff.examination.settings.SettingsTab'],
	alias : 'widget.examManager',
	title : 'Examination',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [
	         {
				xtype:'scheduleTab',
				iconCls:'x-icon-timetable'
			 },
			 {
				xtype:'examSettingsTab',
				iconCls: 'x-icon-settings'
			},
			{
				title : 'Reports',
				iconCls:'x-icon-report',
			} ]
	
});
