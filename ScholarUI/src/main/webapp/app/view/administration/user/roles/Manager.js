Ext.define('scholar.view.administration.user.roles.Manager', {
	extend : 'Ext.form.Panel',
	alias: 'widget.roleManager',
	requires:['scholar.view.administration.user.roles.Permissions',
	          'scholar.view.administration.user.roles.Role'],
	layout: {
	      type: 'border'
	},
    autoScroll:true,
    defaults: {
        split: true
    },
    items: [
		    {
		        flex: 1,
            	xtype:'roleGrid',
           		region:'center'
		    }
		   ]	
});
