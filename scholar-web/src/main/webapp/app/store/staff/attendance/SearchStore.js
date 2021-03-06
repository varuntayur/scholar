Ext.define('scholar.store.staff.attendance.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.attendance.AttendanceSearch',
//    data : [
//	        [ '001005', 'Ram', 'CS',  '9/1 12:00am' ],
//			[ '001006', 'Murali', 'Science',  '9/1 12:00am' ],
//			[ '001007', 'Deepak', 'Mathematics',  '9/1 12:00am' ],
//	        [ '001007', 'Krishna', 'Mathematics',  '9/1 12:00am' ],
//	        [ '001007', 'Guru', 'Science',  '9/1 12:00am' ],
//	        [ '001007', 'Uday', 'Civics', '9/1 12:00am' ]
//	      ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/staffAttendance',
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