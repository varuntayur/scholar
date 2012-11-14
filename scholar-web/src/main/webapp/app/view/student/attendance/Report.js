Ext.define('scholar.view.student.attendance.Report', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.studentAttendanceReport',

	// Component initialization override: adds the top and bottom toolbars and
	// setup headers renderer.
	initComponent : function() {
		var me = this;
		me.tbar = [
				{
					xtype : 'datefield',
					anchor : '100%',
					fieldLabel : 'Date',
					itemId : 'reportDate',
					maxValue : new Date(),
					width:150,
					labelWidth:50
				// limited to the current date or prior
				},
				Ext.create('Ext.form.ComboBox', {
					fieldLabel : 'Course',
					store: 'administration.settings.course.Store',
					queryMode : 'local',
					displayField : 'courseName',
					valueField : 'abbr',
					width:150,
					labelWidth:50
				}),
				Ext.create('Ext.form.ComboBox', {
					fieldLabel : 'Batch',
					store: 'administration.settings.batch.Store',
					queryMode : 'local',
					displayField : 'batchName',
					valueField : 'abbr',
					width:150,
					labelWidth:50
				}),
				Ext.create('Ext.form.ComboBox',
						{
							fieldLabel : 'Report Type',
							store : Ext.create('Ext.data.Store', {
								fields : [ 'abbr', 'name' ],
								data : [ {
									"abbr" : "AL",
									"name" : "Overall"
								}, {
									"abbr" : "AK",
									"name" : "Weekly"
								}, {
									"abbr" : "AZ",
									"name" : "Daily"
								} ]
							}),
							queryMode : 'local',
							displayField : 'name',
							valueField : 'abbr',
							width:150,
							labelWidth:50,
							listeners : {
								scope : this,
								'select' : function() {
									this.getStore().removeAll();
									var columns = [ {
										text : 'Admission Number',
										flex : 1,
										sortable : false,
										dataIndex : 'admissionNumber'
									}, {
										text : 'Name',
										width : 75,
										sortable : true,
										dataIndex : 'studentName'
									}, {
										text : 'Class',
										width : 75,
										sortable : true,
										dataIndex : 'standard'
									} ];

									var daysInMonth = Ext.Date
											.getDaysInMonth(Ext.ComponentQuery
													.query('#reportDate')[0]
													.getValue());

									var dayCols = [];
									dayCols.push({
										name : 'admissionNumber',
										type : 'string'
									});

									dayCols.push({
										name : 'studentName',
										type : 'string'
									});
									dayCols.push({
										name : 'standard',
										type : 'string'
									});
									for ( var i = 0; i < daysInMonth; i++) {
										dayCols.push({
											type : 'bool',
											name : 'day' + i,
										});
										columns.push({
											xtype : 'checkcolumn',
											text : i + 1,
											dataIndex : 'day' + i
										});
									}

									var store = new Ext.data.ArrayStore({
										fields : dayCols,
										data : [ [ '001/005', 'Amar',
												'Standard 1', ] ]
									});
									this.reconfigure(store, columns);
								}
							}
						}) ];

		me.bbar = Ext.create('Ext.ux.StatusBar', {
			defaultText : me.defaultStatusText,
			name : 'searchStatusBar'
		});
		
		var daysInMonth = Ext.Date.getDaysInMonth(new Date());

		var dayCols = [];
		dayCols.push({
			name : 'admissionNumber',
			type : 'string'
		});
		
		dayCols.push({
			name : 'studentName',
			type : 'string'
		});
		dayCols.push({
			name : 'standard',
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
			data : [ [ '001/005', 'Amar','Standard 1', ] ]
		});
//		this.reconfigure(store, this.columns);

		me.callParent(arguments);
	},
	store : 'student.attendance.SearchStore',
	columnLines : true,
	columns : [ {
		text : 'Name',
		width : 75,
		sortable : true,
		dataIndex : 'studentName'
	}, {
		text : 'Admission Number',
		sortable : false,
		dataIndex : 'admissionNumber'
	}, {
		text : 'Class',
		width : 75,
		sortable : true,
		dataIndex : 'standard'
	}],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});
