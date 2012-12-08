Ext.define('scholar.view.administration.user.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.userSearch',
	id:'userSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'add',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'delete',
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
	
	store : 'administration.user.SearchStore',
//		new Ext.data.ArrayStore({
//		fields : [  {
//			name : 'userName',
//			type : 'string'
//		}, {
//			name : 'userRole',
//			type : 'string'
//		}, {
//			name : 'lastChange',
//			type : 'date',
//			dateFormat : 'n/j h:ia'
//		} ],
//		data : [
//		        [ 'Ram', 'Admin',  '9/1 12:00am' ],
//				[  'Shankar', 'Student',  '9/1 12:00am' ],
//				[  'Purushotham', 'Staff', '9/1 12:00am' ],
//		        [  'Amar', 'Staff', '9/1 12:00am' ],
//		        [  'Shanthi', 'Staff', '9/1 12:00am' ],
//		        [  'Shwetha', 'Staff', '9/1 12:00am' ],
//		        [  'Saavan', 'Staff', '9/1 12:00am' ],
//		        [  'Saathvik', 'Staff', '9/1 12:00am' ],
//		        [  'Uday', 'Staff', '9/1 12:00am' ],
//		        [  'Raju', 'Staff', '9/1 12:00am' ],
//				[ 'Murali', 'Staff',  '9/1 12:00am' ],
//				[ 'Deepak', 'Staff',  '9/1 12:00am' ],
//		        [ 'Krishna', 'Staff', '9/1 12:00am' ],
//		        [ 'Guru', 'Staff',  '9/1 12:00am' ],
//		        [  'Amar', 'Student',  '9/1 12:00am' ],
//				[  'Ishaan', 'Student', '9/1 12:00am' ],
//				[  'Pran', 'Student', '9/1 12:00am' ], 
//				[  'Vishnu', 'Student', '9/1 12:00am' ],
//				[  'Sri Hari', 'Student', '9/1 12:00am' ],
//				[  'Shiva', 'Student', '9/1 12:00am' ],
//				[  'Jyestha', 'Student', '9/1 12:00am' ],
//				[  'Laksha', 'Student', '9/1 12:00am' ],
//				[  'Sangeetha', 'Student', '9/1 12:00am' ],
//				[  'Shwetha', 'Student',  '9/1 12:00am' ],
//				[  'Sushma', 'Student',   '9/1 12:00am' ],
//				[  'Santhosh', 'Student', '9/1 12:00am' ]
//			  ]
//	}),
	columnLines : true,
	columns : [  {
		text : 'User Name',
		width : 75,
		sortable : true,
		dataIndex : 'userName'
	}, {
		text : 'User Role',
		width : 75,
		sortable : true,
		dataIndex : 'userRole'
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
