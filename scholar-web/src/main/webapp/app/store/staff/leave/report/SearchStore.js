Ext.define('scholar.store.staff.leave.report.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.leave.report.LeaveReportSearch',
//    data : [ 
//             [ '001005', 'Rama', 'CS', 'Blore', '9/1 12:00am' ],
//			 [ '001006', 'Krishna', 'Science', 'Blore', '9/1 12:00am' ],
//			 [ '001007', 'Govinda', 'Maths', 'Blore', '9/1 12:00am' ] 
//    	   ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/reportSearch',
		reader: {
			type: 'json',
			root: 'data',
			totalProperty: 'total'
		},
		writer: {
			type: 'json'
		},
		appendId: false
	},
	pageSize: 1
});