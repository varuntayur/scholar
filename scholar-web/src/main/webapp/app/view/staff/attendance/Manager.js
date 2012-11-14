Ext.define('scholar.view.staff.attendance.Manager', {
	extend : 'Ext.form.Panel',
	requires : ['scholar.view.staff.attendance.Report'],
	alias : 'widget.staffAttendanceManager',
	title:'Attendance',
	layout:'fit',
	items : [			
	         			{
//							title : 'Attendance Register',
//							layout:'fit',
//							iconCls:'x-icon-register',
							xtype : 'staffAttendanceReport',
							layout:'fit'
	         			}
//						 },
//						 {
//							title : 'Attendance Report',
//							iconCls:'x-icon-report',
//							layout:'fit',
//							xtype : 'reportGrid'
//						 }
	        ]
});

