Ext.define('scholar.view.administration.settings.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 
	             'scholar.view.administration.settings.batch.Manager',		
	             'scholar.view.administration.settings.department.Manager',		
	             'scholar.view.administration.settings.course.Manager',
	             'scholar.view.administration.settings.nationality.Manager',
	             'scholar.view.administration.settings.bloodgroup.Manager',
	             'scholar.view.administration.settings.category.Manager',
	             'scholar.view.administration.settings.general.Manager'
	           ],
	alias : 'widget.settingsManager',
	title : 'Settings',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [
	         {
	        	 xtype : 'generalSettingsManager',
	        	 iconCls:'x-icon-settings'
	         },	        
			 {
				 xtype:'courseManager',
				 iconCls: 'x-icon-course',
			 },
			 {
				 xtype:'departmentManager',
				 iconCls: 'x-icon-admission',
			 },
			 {
				 xtype:'subjectManager',
				 iconCls: 'x-icon-subject',
			 },
			 {
					xtype:'batchManager',
					iconCls: 'x-icon-batch',
			 },
			 {
					xtype:'nationalityManager',
//					iconCls: 'x-icon-batch',
			 },
			 {
					xtype:'bloodgroupManager',
//					iconCls: 'x-icon-batch',
			 },
			 {
					xtype:'categoryManager',
//					iconCls: 'x-icon-batch',
			 }
//			{
//				title : 'Reports',
//				iconCls:'x-icon-report',
//			}
		 ]
	
});
