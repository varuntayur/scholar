Ext.define('scholar.view.staff.timetable.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias:'widget.timeTableSearch',
	store: 'staff.timetable.Store',
    stateful: true,
    collapsible: false,
    multiSelect: true,
    columns: [
		{
		    text     : 'Day/Time',
		    flex     : 1,
		    sortable : false,
		    dataIndex: 'dayTime',
		    renderer : function(val) {
           	 return '<span style="color:red;">' + val + '</span>';
           }
		},
        {
            text     : '0800 - 0900',
            flex     : 1,
            sortable : false,
            dataIndex: 'period1'
        },
        {
            text     : '0900 - 1000',
            flex     : 1,
            sortable : false,
            dataIndex: 'period2'
        },
        {
            text     : '1000 - 1045',
            flex     : 1,
            sortable : false,
            dataIndex: 'period3'
        },
        {
            text     : '1045 - 1100',
            flex     : 1,
            sortable : false,
            dataIndex: 'period4',
            renderer : function(val) {
            	 return '<span style="color:green;">' + val + '</span>';
            }            
        },
        {
            text     : '1100 - 1200',
            flex     : 1,
            sortable : false,
            dataIndex: 'period5'
        },
        {
            text     : '1200 - 1300',
            flex     : 1,
            sortable : false,
            dataIndex: 'period6'
        },
        {
            text     : '1300 - 1345',
            flex     : 1,
            sortable : false,
            dataIndex: 'period7',
            renderer : function(val) {
           	 return '<span style="color:green;">' + val + '</span>';
           }
        },
        {
            text     : '1345 - 1445',
            flex     : 1,
            sortable : false,
            dataIndex: 'period8'
        },
        {
            text     : '1445 - 1545',
            flex     : 1,
            sortable : false,
            dataIndex: 'period9'
        }
    ],
    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    }
});

