Ext.define('scholar.view.staff.lookup.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.staffDetail',
	title : 'Staff Details',
	requires :['scholar.view.staff.lookup.SubjectAllocation'],
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Employee ID',
		name : 'employeeId'
	}, {
		fieldLabel : 'Employee Name',
		name : 'staffName'
	},
	
	{
		xtype : 'textarea',
		fieldLabel : 'Address',
		name : 'address'
	}, {
		xtype : 'datefield',
		fieldLabel : 'End Date',
		name : 'lastChange'
	},
	{
		fieldLabel : 'Department',
		name : 'department',
		xtype:'combo',
		store:'administration.settings.department.SearchStore',
		queryMode: 'local',
		valueField:'departmentName',
		displayField:'departmentName'
	},	
    {
	   	 xtype:'fieldset',
	   	 collapsible: true,
		 border : false,
		 bodyPadding : 10,
		 autoScroll: true,	
		 frame : true,	
	   	 title:'Subject Information',
	   	 width: 500,
	   	 layout:'fit',
	   	 items:[{
	   		 	layout:'fit',	        		 	
	   		 	xtype:'subjectAllocation'
	   	 }]
    }
	]
});
