Ext.define('scholar.view.MainMenu', {
	extend : 'Ext.ux.GroupTabPanel',
	xtype : 'mainMenu',
	activeGroup: 0,
	
	 requires:[
		'Ext.chart.*', 
		 'Ext.form.*',
		 'Ext.data.*', 
		 'Ext.grid.Panel',
		 'Ext.layout.container.Column', 
		 'Ext.window.Window',
		 'Ext.ux.LiveSearchGridPanel',
		
		'scholar.view.other.Dashboard',
		
		'scholar.view.transport.Dashboard',
		'scholar.view.transport.route.Lookup',
		'scholar.view.transport.vehicle.Lookup',
		
		'scholar.view.library.Dashboard',
		'scholar.view.library.lookup.Lookup' ,
		'scholar.view.library.OPAC' ,
		
		'scholar.view.administration.Dashboard',
		'scholar.view.administration.settings.Manager',			     
        'scholar.view.administration.inventory.Manager',        
        'scholar.view.administration.user.Manager',
        
        'scholar.view.finance.payroll.Manager',
        'scholar.view.finance.settings.Manager',
        'scholar.view.finance.Dashboard',
        'scholar.view.finance.fees.Manager',
		
        'scholar.view.staff.examination.Manager',
		'scholar.view.staff.Dashboard',
		'scholar.view.staff.lookup.Lookup',
		'scholar.view.staff.event.Manager',
		'scholar.view.staff.leave.Manager',
		'scholar.view.staff.timetable.Manager',
		'scholar.view.staff.attendance.Manager',
		
		'scholar.view.parent.Dashboard',
		
		'scholar.view.student.admission.Manager',		
		'scholar.view.student.Dashboard',
		'scholar.view.student.lookup.Search',
		'scholar.view.student.lookup.Lookup',
		'scholar.view.student.performance.Report',
		'scholar.view.student.attendance.Manager'],

	items : [
			
	        {
				mainItem : 0,
				items : [
					{
						iconCls: 'x-icon-student',
						title : 'Student',
						tabTip : 'Wear the Student hat',
						border : false,
						xtype : 'studentDashboard'
					},
					{
						title : 'Admissions',
						tabTip : 'Admissions',
						iconCls: 'x-icon-admission',
						layout: 'fit',
						items: { 
									xtype : 'admissionManager'  
								},
						margin : '1',
						height : null
					},	
					
					{
						title : 'Attendance',
						tabTip : 'Attendance',
						iconCls: 'x-icon-attendance',
						layout: 'fit',
						items: { 
							xtype : 'attendanceManager'  
						},
						margin : '1',
						height : null
					},
					{
						title : 'Lookup',
						tabTip : 'Lookup student detail',
						iconCls: 'x-icon-search',
						layout: 'fit',
						items: { 
							xtype : 'studentLookup'  
						},
						margin : '1',
						height : null
					}

				]
	         },
	         {
				mainItem : 0,
				items : [
					{
						title : 'Staff',
						iconCls: 'x-icon-staff',
						tabTip : 'Wear the Staff hat',
						border : false,
						xtype : 'staffDashboard'
					},
					{
						title : 'Attendance',
						tabTip : 'Attendance',
						iconCls: 'x-icon-attendance',						
						margin : '1',
						height : null,
						layout: 'fit',
				        items: {
				        	  		xtype : 'staffAttendanceManager'  
						}
					},
					{
						title : 'Events/Memo',
						tabTip : 'Issue Memos and publish Event Calendars',
						iconCls:'x-icon-events',
						layout: 'fit',
						items: { 
							xtype : 'eventManager'   
						},
						margin : '1',
						height : null
					},
					{
						title : 'Examination',
						tabTip : 'Examination Management',
						iconCls: 'x-icon-exam',
						layout: 'fit',
						items: { 
							xtype : 'examManager'  
						},
						margin : '1',
						height : null
					},
					{
						title : 'Leave Absence',
						tabTip : 'Manage/Apply Leaves',
						iconCls:'x-icon-leave',
						layout: 'fit',
						items: { 
							xtype : 'leaveManager'   
						},
						margin : '1',
						height : null
					},
					{
						title : 'Lookup',
						tabTip : 'Lookup staff information',
						iconCls: 'x-icon-search',
						layout: 'fit',
						items: { 
							xtype : 'staffLookup' 
						},
						margin : '1',
						height : null
					},
					{
						title : 'TimeTable',
						tabTip : 'Manage Timetable',
						iconCls:'x-icon-timetable',
						layout: 'fit',
						items: { 
							xtype : 'timetableManager'   
						},
						margin : '1',
						height : null
					}
				]
	         },	
	         {
					mainItem : 0,
					items : [ 
					          {
								title : 'Parent',
								tabTip : 'Parental View',
								iconCls: 'x-icon-userrole',
								border : false,
								xtype : 'parentDashboard'
							  }				  
					 ]
		     },
		     {
					mainItem : 0,
					items : [ 
						{
							title : 'Library',
							iconCls: 'x-icon-library',			
							tabTip : 'Wear the Librarian hat',
							border : false,
							layout: 'fit',
							items: {	xtype : 'libraryDashboard' }
						},
//						{
//							title : 'Lookup',
//							tabTip : 'Book search',
//							layout: 'fit',
//							items: { 
//								xtype : 'libraryLookup'   
//							},
//							iconCls: 'x-icon-search',
//							margin : '1',
//							height : null
//						},
						{
							title : 'OPAC',
							tabTip : 'OPAC search',
							layout: 'fit',
							items: { 
								xtype : 'opacLookup'   
							},
							iconCls: 'x-icon-search',
							margin : '1',
							height : null
						}
					]
		     },
	         {
				mainItem : 0,
				items : [
				           {
								title : 'Finance',
								tabTip : 'Manage Finances',
								border : false,
								xtype : 'financeDashboard'
							},
							{
								title : 'Fee Collection',
								tabTip : 'Fee Collection',
								iconCls: 'x-icon-fees',
								layout: 'fit',
								items: { 
									xtype : 'feesManager'  
								},
								margin : '1',
								height : null
							},
							{
								title : 'Payroll',
								tabTip : 'Payroll',
								iconCls: 'x-icon-payroll',
								layout: 'fit',
								items: { 
									xtype : 'payrollManager'  
								},
								margin : '1',
								height : null
							},
							{
								title : 'Settings',
								tabTip : 'Settings related to finances',
								iconCls: 'x-icon-settings',
								layout: 'fit',
								items: { 
									xtype : 'financeSettingsManager'  
								},
								margin : '1',
								height : null
							}
			     ]
	         },
	         {
					mainItem : 0,
					items : [
						{
							title : 'Administrator',
							tabTip : 'Be the administrator',
							iconCls: 'x-icon-administrator',
							border : false,
							xtype : 'administrationDashboard'
						},
										
						{
							title : 'Inventory',
							tabTip : 'Inventory',
							iconCls: 'x-icon-inventory',
							layout: 'fit',
							items: { 
								xtype : 'inventoryManager'  
							},
							margin : '1',
							height : null
						},
						{
							title : 'Settings',
							tabTip : 'Settings Management',
							iconCls: 'x-icon-settings',
							layout: 'fit',
							items: { 
								xtype : 'settingsManager'  
							},
							margin : '1',
							height : null
						},
						{
							title : 'User/Role',
							tabTip : 'Manager User Roles',
							iconCls:'x-icon-userrole',
							layout: 'fit',
							items: { 
								xtype : 'userRoleManager'  
							},
							margin : '1',
							height : null
						}
					]
				},
	         
	         {
				mainItem : 0,
				items : [
				         {
							title : 'Transport',
							tabTip : 'Manage Transport',
							iconCls: 'x-icon-transport',
							border : false,
							xtype : 'transportDashboard'
						  },
						  {
								title : 'Vehicle',
								tabTip : 'Manage Vehicle fleet',
								iconCls: 'x-icon-vehicle',
								layout: 'fit',
								border : false,
								items: { 
									xtype : 'vehicleLookup' , 
								},
						  },
						  {
								title : 'Route',
								tabTip : 'Manage Vehicle routes',
								iconCls: 'x-icon-route',
								layout: 'fit',
								border : false,
								items: { 
									xtype : 'routeLookup'   
								},
						  }			  
				 ]
	         }
	         
	]
	
});
