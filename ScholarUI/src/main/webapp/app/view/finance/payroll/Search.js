Ext.define('scholar.view.finance.payroll.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.payrollSearch',
	title:'Payroll Management',
	id:'payrollSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Set Salary Components',
			action:'setSalaryComponents',
		}, {
			xtype : 'button',
			iconCls:'x-icon-print-preview',
			text : 'View Payslip',
			action:'viewPayslip',
		} ]
	} ],
	getTbar :function()
    {
    	return ['Search',{
	            xtype: 'textfield',
	            name: 'searchField',
	            hideLabel: true,
	            width: 200,
	            listeners: {
	                change: {
	                    fn: this.onTextFieldChange,
	                    scope: this,
	                    buffer: 100
	                }
	            }
    		}];
    },
	
	store : 'finance.payroll.SearchStore',
	columnLines : true,
	columns : [  {
		text : 'User Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'userName'
	},
	{
		text : 'User Role',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'userRole'
	},
	{
		text : 'Date of Joining',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'dateOfJoining'
	},
	{
		text : 'Grade',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'grade'
	},
	{
		text : 'Relevant experience',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'experience'
	},
	{
		xtype : 'datecolumn',
		text : 'Last Updated',
		flex:1,
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
