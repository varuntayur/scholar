	Ext.define('scholar.view.administration.user.Manager', {
	extend : 'Ext.tab.Panel',
	requires:['scholar.view.administration.user.Search',
	          'scholar.view.administration.user.roles.Manager'],
	alias: 'widget.userRoleManager',
	title:'User/Roles',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	layout: {
        type: 'border',
        padding: 5
    },
   
	items : [
			{
				title:'Roles/Permissions',
				xtype:'roleManager'
			},
			{
				title:'User',
				layout:'border',
				defaults: {
				        split: true
				},
				items:[
				    {
				    	region:'center',
				    	xtype:'userSearch'
	   		        }					
				]
			}
			
	]
});
