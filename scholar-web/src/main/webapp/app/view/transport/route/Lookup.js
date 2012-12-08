Ext.define('scholar.view.transport.route.Lookup', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.transport.route.Search'],
	alias: 'widget.routeLookup',
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    title:'Route',
    items: [
            {
		        region: 'center',	        
		        minHeight: 80,
		        layout:'fit',
       			xtype: 'routeSearch'       			
    		}
    	    ]	
});

