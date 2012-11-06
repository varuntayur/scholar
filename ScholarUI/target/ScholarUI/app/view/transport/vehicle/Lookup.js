Ext.define('scholar.view.transport.vehicle.Lookup', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.transport.vehicle.Search'],
	alias: 'widget.vehicleLookup',
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    title:'Vehicle',
    items: [
            {
		        region: 'center',	        
		        minHeight: 80,
		        layout:'fit',
       			xtype: 'vehicleSearch',
       			listeners:{
		        				selectionchange : function(model, records) {
		    						if (records[0]) {
		    							this.up('form').getForm().loadRecord(records[0]);
		    						}
		    					}
      			}
    		}
    	    ]	
});

