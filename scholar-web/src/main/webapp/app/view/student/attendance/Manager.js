Ext.define('scholar.view.student.attendance.Manager', {
	extend : 'Ext.form.Panel',
	requires : ['scholar.view.student.attendance.Report'],
	alias : 'widget.attendanceManager',
	title:'Attendance',
	layout:'fit',
	items : [
//	         {
//				title : 'Attendance Report',
//				layout:'fit',
//				iconCls:'x-icon-report',
//				items : [
				{
					xtype : 'studentAttendanceReport',
					layout:'fit'
				}
//				         ]
//	         }
//	         ,
//	         {
//				title : 'Attendance Register',
//				layout:'fit',
//				iconCls:'x-icon-register',
//				items : [ {
//					xtype : 'studentAttendanceRegister'
//				} ]
//		      }
	        ]
});

