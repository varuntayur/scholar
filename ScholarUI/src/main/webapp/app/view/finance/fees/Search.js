Ext.define('scholar.view.finance.fees.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.feeDetailSearch',
	title:'Fee Collection',
	id:'feeDetailSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-fee-structure',
			text : 'Set Fee Structure',
			action:'setFeeStructure',
		},
		{
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'New Fee Collection',
			action:'newFeeCollection',
		},
		{
			xtype : 'button',
			iconCls:'x-icon-print-preview',
			text : 'View/Print Receipt',
			action:'viewReceipt',
		}]
	} ],
	getTbar :function()
    {
    	return [	{
	    		xtype : 'datefield',
	    		fieldLabel : 'Start Date',
	    		name : 'startDate'
    		},
    		{
	    		xtype : 'datefield',
	    		fieldLabel : 'End Date',
	    		name : 'endDate'
    		},
            {
                xtype: 'button',
                name: 'viewCollections',
                text: 'Refresh'
            }
                
       ];
    },
	
	store : 'finance.fees.SearchStore',
	columnLines : true,
	columns : [  {
		text : 'Admission Number',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'admissionNumber'
	}, {
		text : 'Student Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'studentName'
	}, {
		xtype : 'datecolumn',
		text : 'Fee Collection Date',
		width : 85,
		flex:1,
		sortable : true,
		dataIndex : 'feeCollectionDate'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});
