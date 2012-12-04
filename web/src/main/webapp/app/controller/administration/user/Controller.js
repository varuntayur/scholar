Ext.define('scholar.controller.administration.user.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized user.roles.Controller!');
		this.control({
			'#userSearch' : {
				itemdblclick: this.editUser
			},
			
			'#userSearch button[action=add]' : {
            	click: this.addUser
            },
            '#userSearch button[action=delete]' : {
            	click: this.deleteUser
            }      
		});
	},
	
	deleteUser: function()
	{
		
	},
	
	addUser: function()
	{
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
			items : [ {
				xtype : 'userDetail'
			} ]
		}).show();
	},
	
	editUser: function(grid, record)
	{
		 console.log('Double clicked on ' + record.get('userName'));
         
	        var admForm = Ext.widget('userDetail');
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

	views : [ 'administration.user.Manager',
	          'administration.user.Detail' ],

	stores : [ 'administration.user.SearchStore' ],
	
	models : [ 'administration.user.SearchModel' ]

});