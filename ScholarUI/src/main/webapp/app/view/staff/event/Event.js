Ext.define('scholar.view.staff.event.Event', {
	extend : 'Ext.grid.Panel',
	alias: 'widget.events',
	id:'staffEvent',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'addEvent',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteEvent',
		} ]
	} ],
	// Component initialization override: adds the top and bottom toolbars and setup headers renderer.
    initComponent: function() {
        var me = this;
        me.tbar = [ Ext.create('Ext.form.ComboBox', {
			            fieldLabel: 'Choose Course',
			            store: 'administration.settings.course.Store',
			            queryMode: 'local',
			            displayField: 'courseName',
			            valueField: 'abbr'
                  	}),
                  	Ext.create('Ext.form.ComboBox', {
			            fieldLabel: 'Choose Batch',
			            store: 'administration.settings.batch.Store',	
			            queryMode: 'local',
			            displayField: 'batchName',
			            valueField: 'abbr'
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
	  		            listeners:{
		  		            scope: this,
		  		            'select': function()
		  		            {
		  		            	this.getStore().removeAll();
			  		            var columns = [ {
			  		          		text : 'Admission Number',
			  		          		flex : 1,
			  		          		sortable : false,
			  		          		dataIndex : 'admissionNumber'
			  		          	} ];
			  		            var store =  new Ext.data.ArrayStore({
					  		      		fields : [ {
						  		  			name : 'admissionNumber',
						  		  			type : 'string'
					  		      			}],
					  		      			data : [ [ '001/005' ]]
			  		            });
			  		            this.reconfigure(store,columns);
		  		            }
	  		            }
                   })];

        me.bbar = Ext.create('Ext.ux.StatusBar', {
            defaultText: me.defaultStatusText,
            name: 'searchStatusBar'
        });
        
        me.callParent(arguments);
    },
	
	store :'staff.event.EventStore',
	columnLines : true,
	columns : [ {
		text : 'Event Name',
		flex : 1,
		sortable : false,
		dataIndex : 'eventName'
	}, {
		text : 'Description',
		width : 75,
		flex : 1,
		sortable : true,
		dataIndex : 'eventDescription'
	},
	{
		xtype : 'datecolumn',
		text : 'Event Start Date',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'eventStartDate'
	},
	{
		xtype : 'datecolumn',
		text : 'Event End Date',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'eventEndDate'
	}],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});

