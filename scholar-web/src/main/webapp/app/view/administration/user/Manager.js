	Ext.define('scholar.view.administration.user.Manager', {
	extend : 'Ext.tab.Panel',
	requires:['scholar.view.administration.user.users.Search',
	          'scholar.view.administration.user.roles.Search'],
	alias: 'widget.userRoleManager',
	title:'User/Roles',
	frame : true,
	border: true,
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
				title:'Roles',
				layout:'border',
				defaults: {
				        split: true
				},
				items:[
				    {
				    	region:'center',
				    	xtype:'roleSearch'
	   		        }					
				]
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
