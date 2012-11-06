Ext.define('scholar.view.student.Dashboard', {
	extend : 'Ext.form.Panel',
	xtype : 'studentDashboard',

	requires : [ 'Ext.chart.*' ],

	autoHeight : true,
	frame:true,
	borders:true,
	bodyPadding : 10,
	title : 'Student Dashboard',
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
	items: [
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
		        /*{
		            title: 'Temperature',
		            type: 'Numeric',
		            position: 'left',
		            fields: ['temperature'],
		            minimum: 0,
		            maximum: 100
		        },
		        {
		            title: 'Time',
		            type: 'Time',
		            position: 'bottom',
		            fields: ['date'],
		            groupBy: 'hour',
		            dateFormat: 'ga'
		        }*/
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
	/*items : [
	         {
		xtype : 'button',
		scale : 'medium',
		text : 'Lookup/Search',
		listeners : {
			click : function() {
				new Ext.Window({
					title : 'Lookup/Search Student(s)',
					closable : true,
					plain : true,
					layout : 'fit',
					autoRender : true,
					items : [ new scholar.view.StudentSearch() ]
				}).show();
			}
		}
	}, {
		xtype : 'button',
		text : 'Attendance'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Examination'
	}]*/
});