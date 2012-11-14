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
    items: [
            {
		        region: 'center',	        
		        minHeight: 80,
		        layout:'fit',
       			xtype: 'studentSearch',
//       			listeners:
//       			{
//		        	selectionchange : function(model, records) {
//		    						if (records[0]) {
//		    							this.up('form').getForm().loadRecord(records[0]);
//		    						}
//		    		}
//      			}
    		}
//            ,
//    		{
//		        region: 'south',
//		        collapsible: true,
//		        split: true,
//		        height: 200,
//		        minHeight: 120,
//		        header:false,
//		        items:[
//		               {
//		        		 xtype: 'tabpanel',
//		        		 items:[
//		        		        {
//		        		        	title:'Student Information',
//		        		        	xtype:'studentDetailsTab',
//		        		        	iconCls:'x-icon-info-details'
//		        		        }, 
//		        		        {
//		        		        	title:'Grades',
//		        		        	iconCls:'x-icon-grades'
//		        		        }, 
//		        		        {
//		        		        	title:'Attendance',
//		        		        	iconCls:'x-icon-attendance'
//		        		        }
//		        		       ]
//		        	}]
//    	    }
    		]	
});

