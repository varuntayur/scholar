Ext.define('scholar.view.library.Dashboard', {
	extend : 'Ext.form.Panel',
	xtype : 'libraryDashboard',
	requires:['Ext.chart.*'],
	title : 'Library Dashboard',
	frame:true,
	borders:true,
	collapsible : false,
	defaults : {
		labelWidth : 89,
		anchor : '100%',
		layout : {
			type : 'hbox',
			defaultMargins : {
				top : 0,
				right : 5,
				bottom : 0,
				left : 0
			}
		},
		margins : '10 10 10 10'
	},
	autoScroll: true,
	items : [
	         Ext.create('Ext.chart.Chart', {		
	  		   width: 400,
	  		   height: 300,
	  		   animate: true,
	  		   store: Ext.create('Ext.data.JsonStore', {
	  			        fields: ['name', 'data1'],
	  			    	data: [
	  				        { name: 'Jan', data1: 10},
	  				        { name: 'Feb', data1: 90 },
	  				        { name: 'Mar', data1: 50 },
	  				        { name: 'Apr', data1: 0 },
	  				        { name: 'May', data1: 0 },
	  				        { name: 'Jun', data1: 7 },
	  				        { name: 'Jul', data1: 8 },
	  				        { name: 'Aug', data1: 5 },
	  				        { name: 'Sep', data1: 9 },
	  				        { name: 'Oct', data1: 45 },
	  				        { name: 'Nov', data1: 78 },
	  				        { name: 'Dec', data1: 8 }				 
	  				    ]
	  			    }),		 			    
	  		  axes: [
	  				{
	  				    type: 'Numeric',
	  				    position: 'left',
	  				    fields: ['data1'],
	  				    title: 'Books Added',
	  				    grid: true,
	  				    minimum: 0
	  				}, {
	  				    type: 'Category',
	  				    position: 'bottom',
	  				    fields: ['name'],
	  				    title: 'Months',
	  				    label: {
	  				        rotate: {
	  				            degrees: 270
	  				        }
	  				    }
	  				}	  		 
	  		    ],
	  		  series: [
	  	        {
	  	            xField: 'name',
	  	            yField: 'data1',
	  	        	type: 'column',
	  	        	axis:'left'
	  	        }]
	         }),
	  	      Ext.create('Ext.chart.Chart', {		
		  		   width: 400,
		  		   height: 300,
		  		   animate: true,
		  		   store: Ext.create('Ext.data.JsonStore', {
		  			        fields: ['name', 'data1'],
		  			    	data: [
		  				        { name: '8am', data1: 1 },
		  				        { name: '9am', data1: 2 },
		  				        { name: '10am', data1: 0 },
		  				        { name: '11am', data1: 0 },
		  				        { name: '12pm', data1: 0 },
		  				        { name: '1pm', data1: 7 },
		  				        { name: '2pm', data1: 4 },
		  				        { name: '3pm', data1: 1 },
		  				        { name: '4pm', data1: 0 }		  				        			 
		  				    ]
		  			    }),		 			    
		  		  axes: [
		  				{
		  				    type: 'Numeric',
		  				    position: 'left',
		  				    fields: ['data1'],
		  				    title: 'Library Usage',
		  				    grid: true,
		  				    minimum: 0,
		  				    maximum: 10
		  				}, {
		  				    type: 'Category',
		  				    position: 'bottom',
		  				    fields: ['name'],
		  				    title: 'Time of Day',
		  				    label: {
		  				        rotate: {
		  				            degrees: 270
		  				        }
		  				    }
		  				}		  		        
		  		    ],
		  		  series: [
		  	        {
		  	            type: 'line',
		  	            xField: 'name',
		  	            yField: 'data1'
		  	        }
	  	    ]
	  	   })	         
	]
});