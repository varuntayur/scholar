Ext.define('scholar.view.staff.timetable.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'scholar.view.staff.timetable.Search'],
	alias : 'widget.timetableManager',
	title:'Timetable',
	items : [
	         {
				title : 'Timetable Search',
				layout:'fit',
				iconCls:'x-icon-register',
				xtype : 'timeTableSearch'
	         },
	         {
					title : 'Timetable Factory',
					iconCls:'x-icon-settings-wheel',
					layout:'fit'
		     },
	         {
				title : 'Timetable Settings',
				iconCls:'x-icon-settings',
				layout:'fit'
	         }
	        ]
});

