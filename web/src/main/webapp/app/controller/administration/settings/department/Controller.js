Ext.define('scholar.controller.administration.settings.department.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized settings.department.Controller!');
		this.control({
			'#settingsDepartmentSearch' : {
				itemdblclick: this.editDepartmentSettings
			},
			
			'departmentManager button[action=addDepartment]' : {
            	click: this.addDepartment
            },
            'departmentManager button[action=deleteDepartment]' : {
            	click: this.deleteDepartment
            }
		});
	},
	
	deleteDepartment: function()
	{
		
	},
	
	addDepartment: function()
	{
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Department Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ {
				xtype : 'departmentDetail'
			} ]
		}).show();
	},
	
	editDepartmentSettings: function(grid, record)
	{
		 console.log('Double clicked on ' + record.get('departmentName'));
         
	        var admForm = Ext.widget('departmentDetail');
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Department Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.settings.department.Manager','administration.settings.department.Detail' ],

	stores : [ 'administration.settings.department.SearchStore' ],

	models : [ 'administration.settings.department.SearchModel' ]

});