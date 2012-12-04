Ext.define('scholar.controller.administration.user.roles.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized user.roles.Controller!');
		this.control({
			'#userRoles' : {
				itemdblclick: this.editRoles
			},
			
			'#userRoles button[action=add]' : {
            	click: this.addRoles
            },
            '#userRoles button[action=delete]' : {
            	click: this.deleteRoles
            }      
		});
	},
	
	deleteRoles: function()
	{
		
	},
	
	addRoles: function()
	{
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Role Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ {
				xtype : 'roleDetail'
			} ]
		}).show();
	},
	
	editRoles: function(grid, record)
	{
		 console.log('Double clicked on ' + record.get('roleName'));
         
	        var admForm = Ext.widget('roleDetail');
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'User Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.user.roles.Manager',
	          'administration.user.roles.Detail' ],

	stores : [ 'administration.user.roles.SearchStore','administration.user.roles.PermissionStore' ],
	
	models : [ 'administration.user.roles.SearchModel','administration.user.roles.PermissionModel' ]

});