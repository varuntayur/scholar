Ext.define('scholar.view.staff.attendance.Report', {
	extend : 'Ext.grid.Panel',
	alias: 'widget.staffAttendanceReport',
	
	// Component initialization override: adds the top and bottom toolbars and setup headers renderer.
    initComponent: function() {
        var me = this;
        me.tbar = [ 
					{
					    xtype: 'datefield',
					    anchor: '100%',
					    fieldLabel: 'Date',
					    itemId: 'staffAttendanceReportDate',
					    maxValue: new Date(),  // limited to the current date or prior
						width:150,
						labelWidth:50
					},
                    Ext.create('Ext.form.ComboBox', {
			            fieldLabel: 'Choose Course',
			            store: 'administration.settings.course.Store',
			            queryMode: 'local',
			            displayField: 'courseName',
			            valueField: 'abbr',
			            width:150,
						labelWidth:50
                  	}),
                  	Ext.create('Ext.form.ComboBox', {
			            fieldLabel: 'Choose Batch',
			            store: 'administration.settings.batch.Store',
			            queryMode: 'local',
			            displayField: 'name',
			            valueField: 'abbr',
			            width:150,
						labelWidth:50
                  	}),
                  	Ext.create('Ext.form.ComboBox', {
	  		            fieldLabel: 'Report Type',
	  		            store: Ext.create('Ext.data.Store', {
	  		                fields: ['abbr', 'name'],
	  		                data : [
	  		                    {"abbr":"AL", "name":"Overall"},
	  		                    {"abbr":"AK", "name":"Weekly"},
	  		                    {"abbr":"AZ", "name":"Daily"}
	  		                ]
	  		            }),
	  		            queryMode: 'local',
	  		            displayField: 'name',
	  		            valueField: 'abbr',
	  		            width:150,
						labelWidth:50,
	  		            listeners:{
		  		            scope: this,
		  		            'select': function()
		  		            {
		  		            	this.getStore().removeAll();
		  		            	var columns = [ {
				  		      		text : 'Employee ID',
					  		  		flex : 1,
					  		  		sortable : false,
					  		  		dataIndex : 'employeeId'
			  		            },
			  		            {
					  		  		text : 'Name',
					  		  		width : 75,
					  		  		sortable : true,
					  		  		dataIndex : 'staffName'
			  		            },
			  		            {
					  		  		text : 'Department',
					  		  		width : 75,
					  		  		sortable : true,
					  		  		dataIndex : 'department'
			  		            } ];
			  		            
			  		            var daysInMonth = Ext.Date.getDaysInMonth(Ext.ComponentQuery.query('#staffAttendanceReportDate')[0].getValue());
			  		            
			  		            var dayCols = [];
			  		            dayCols.push({
						  		  			name : 'employeeId',
						  		  			type : 'string'
				  		      	}, {
				  					name : 'staffName',
				  					type : 'string'
				  				}, {
				  					name : 'department',
				  					type : 'string'
				  				});
			  		            for(var i = 0 ; i < daysInMonth; i++)
			  		            {
			  		            	dayCols.push({
			  		            		type: 'bool',
			  		            		name: 'day'+i,
			  		            	});
			  		            	columns.push({
			  		            		xtype: 'checkcolumn',
			  		            		text: i+1,
			  		            		dataIndex:'day'+i
			  		            	});
			  		            }
			  		            
			  		            var store =  new Ext.data.ArrayStore({
				  		      		fields :  dayCols ,
				  		      		data : [ [ '001005','Ram', 'Science' ]]
		  		            	});
			  		            this.reconfigure(store,columns);
		  		            }
	  		            }
                   })];

        me.bbar = Ext.create('Ext.ux.StatusBar', {
            defaultText: me.defaultStatusText,
            name: 'searchStatusBar'
        });
        
        var daysInMonth = Ext.Date.getDaysInMonth(new Date());

		var dayCols = [];
		dayCols.push({
	  			name : 'employeeId',
	  			type : 'string'
		}, {
			name : 'staffName',
			type : 'string'
		}, {
			name : 'department',
			type : 'string'
		});
		for ( var i = 0; i < daysInMonth; i++) {
			dayCols.push({
				type : 'bool',
				name : 'day' + i,
			});
			this.columns.push({
				xtype : 'checkcolumn',
				text : i + 1,
				dataIndex : 'day' + i
			});
		}
		
		this.store = new Ext.data.ArrayStore({
			fields : dayCols,
			data : [ [ '001005','Ram', 'Science' ] ]
		});
        
        me.callParent(arguments);
    },
	
    store : 'staff.attendance.SearchStore',
	columnLines : true,
	columns : [  {
		text : 'Name',
		width : 75,
		sortable : true,
		dataIndex : 'staffName'
	},
	{
		text : 'Employee ID',
		flex : 1,
		sortable : false,
		dataIndex : 'employeeId'
	},
	{
		text : 'Department',
		width : 75,
		sortable : true,
		dataIndex : 'department'
	},  {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});

