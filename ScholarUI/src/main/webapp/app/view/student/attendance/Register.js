Ext.define('scholar.view.student.attendance.Register',{
		extend : 'Ext.grid.Panel',
		alias : 'widget.studentAttendanceRegister',
		
		// Component initialization override: adds the top and
		// bottom toolbars and setup headers renderer.
		initComponent : function() {
			var me = this;
			me.tbar = [
						{
							xtype : 'datefield',
							anchor : '100%',
							fieldLabel : 'Date',
							itemId : 'studentAttendanceReportDate',
							maxValue : new Date()
							// limited to the current date or prior
						},
						Ext.create('Ext.form.ComboBox', {
							fieldLabel : 'Choose Course',
							store: 'administration.settings.course.Store',
							queryMode : 'local',
							displayField : 'courseName',
							valueField : 'abbr'
						}),
						Ext.create('Ext.form.ComboBox',{
									fieldLabel : 'Choose Batch',
									store: 'administration.settings.batch.Store',
									queryMode : 'local',
									displayField : 'batchName',
									valueField : 'abbr',
									listeners : {
										scope : this,
										'select' : function() {
											this
													.getStore()
													.removeAll();
											var columns = [
													{
														text : 'Admission Number',
														flex : 1,
														sortable : false,
														dataIndex : 'admissionNumber'
													},
													{
														text : 'Name',
														width : 75,
														sortable : true,
														dataIndex : 'studentName'
													},
													{
														text : 'Class',
														width : 75,
														sortable : true,
														dataIndex : 'standard'
													} ];
		
											var daysInMonth = Ext.Date
													.getDaysInMonth(Ext.ComponentQuery
															.query('#studentAttendanceReportDate')[0]
															.getValue());
		
											var dayCols = [];
											dayCols
													.push({
														name : 'admissionNumber',
														type : 'string'
													});
											dayCols
													.push({
														name : 'studentName',
														type : 'string'
													});
											dayCols
													.push({
														name : 'standard',
														type : 'string'
													});
											for ( var i = 0; i < daysInMonth; i++) {
												dayCols
														.push({
															type : 'bool',
															name : 'day'
																	+ i,
														});
												columns
														.push({
															xtype : 'checkcolumn',
															text : i + 1,
															dataIndex : 'day'
																	+ i
														});
											}
		
											var store = new Ext.data.ArrayStore(
													{
														fields : dayCols,
														data : [ [
																'001/005',
																'Amar',
																'Standard 1' ] ]
													});
											this.reconfigure(
													store,
													columns);
										}
									}
								})];
		
			me.bbar = Ext.create('Ext.ux.StatusBar', {
				defaultText : me.defaultStatusText,
				name : 'searchStatusBar'
				});
		
			me.callParent(arguments);
		},
		 store : 'student.attendance.SearchStore',
//		store : new Ext.data.ArrayStore({
//			fields : [ {
//				name : 'admissionNumber',
//			type : 'string'
//		}, {
//			name : 'studentName',
//			type : 'string'
//		}, {
//			name : 'standard',
//			type : 'string'
//		}, {
//			name : 'address',
//			type : 'string'
//		}, {
//			name : 'lastChange',
//			type : 'date',
//			dateFormat : 'n/j h:ia'
//		} ],
//		data : [
//				[ '001/001', 'Amar', 'Standard 1', 'Blore',
//						'9/1 12:00am' ],
//				[ '001/002', 'Ishaan', 'Standard 2', 'Blore',
//						'9/1 12:00am' ],
//				[ '001/005', 'Pran', 'Standard 3', 'Blore',
//						'9/1 12:00am' ],
//				[ '001/010', 'Vishnu', 'Standard 1', 'Blore',
//						'9/1 12:00am' ],
//				[ '010/234', 'Sri Hari', 'Standard 5', 'Blore',
//						'9/1 12:00am' ],
//				[ '111/286', 'Shiva', 'Standard 8', 'Blore',
//						'9/1 12:00am' ],
//				[ '101/234', 'Jyestha', 'Standard 9', 'Blore',
//						'9/1 12:00am' ],
//				[ '201/002', 'Laksha', 'Standard 10', 'Blore',
//						'9/1 12:00am' ],
//				[ '501/004', 'Sangeetha', 'Standard 4',
//						'Blore', '9/1 12:00am' ],
//				[ '116/006', 'Shwetha', 'Standard 1', 'Blore',
//						'9/1 12:00am' ],
//				[ '145/007', 'Sushma', 'Standard 7', 'Blore',
//						'9/1 12:00am' ],
//				[ '723/007', 'Santhosh', 'Standard 5', 'Blore',
//						'9/1 12:00am' ] ]
//		}),
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
		}, {
			text : 'Address',
		width : 75,
		flex : 1,
		sortable : true,
		dataIndex : 'address'
		}, {
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
