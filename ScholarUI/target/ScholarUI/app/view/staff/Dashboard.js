Ext.define('scholar.view.staff.Dashboard', {
	extend : 'Ext.form.Panel',
	xtype : 'staffDashboard',
	requires:['Ext.chart.*'],
	title : 'Staff Dashboard',
	collapsible : false,
	frame:true,
	borders:true,
	defaults : {
		layout : {
			type : 'table',
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
	  				        { name: 'Jan', data1: 100 },
	  				        { name: 'Feb', data1: 90 },
	  				        { name: 'Mar', data1: 100 },
	  				        { name: 'Apr', data1: 0 },
	  				        { name: 'May', data1: 0 },
	  				        { name: 'Jun', data1: 70 },
	  				        { name: 'Jul', data1: 90 },
	  				        { name: 'Aug', data1: 91 },
	  				        { name: 'Sep', data1: 99 },
	  				        { name: 'Oct', data1: 80 },
	  				        { name: 'Nov', data1: 90 },
	  				        { name: 'Dec', data1: 80 }				 
	  				    ]
	  			    }),		 			    
	  		  axes: [
	  				{
	  				    type: 'Numeric',
	  				    position: 'left',
	  				    fields: ['data1'],
	  				    title: 'Attendance',
	  				    grid: true,
	  				    minimum: 0,
	  				    maximum: 100
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
	  	            type: 'column',
	  	            xField: 'name',
	  	            yField: 'data1'
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
		  				    title: 'Free Periods Available',
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