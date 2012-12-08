Ext.define('scholar.view.student.lookup.Lookup', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.student.lookup.Detail'],
	alias: 'widget.studentLookup',
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    title:'Lookup',
    items: [{
		        region: 'center',	        
		        minHeight: 80,
		        layout:'fit',
       			xtype: 'studentSearch',
    		}]	
});

