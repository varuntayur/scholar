Ext.define('scholar.controller.administration.settings.department.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized settings.department.Controller!');
		this.control({
			'#departmentSearch' : {
				itemdblclick: this.editDepartmentSettings,
				render:this.loadDepartmentSettings
			},
			
			'departmentSearch button[action=addDepartment]' : {
            	click: this.addDepartment
            },
            'departmentSearch button[action=deleteDepartment]' : {
            	click: this.deleteDepartment
            }
		});
	},
	
	loadDepartmentSettings: function()
	{
		this.getAdministrationSettingsDepartmentSearchStoreStore().loadPage(1);
	},
	
	deleteDepartment: function()
	{
		var store = this.getAdministrationSettingsDepartmentSearchStoreStore();
		var selection = Ext.ComponentQuery.query('#departmentSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
        store.loadPage(1);
	},
	
	addDepartment: function()
	{
		var admForm = Ext.widget('departmentDetail',{ store: this.getAdministrationSettingsDepartmentSearchStoreStore() });
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
			items : [admForm]
		}).show();
	},
	
	editDepartmentSettings: function(grid, record)
	{
		  var admForm = Ext.widget('departmentDetail',{ store: this.getAdministrationSettingsDepartmentSearchStoreStore(), isEdit: true  });    
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

	models : [ 'administration.settings.department.DepartmentSearch' ]

});