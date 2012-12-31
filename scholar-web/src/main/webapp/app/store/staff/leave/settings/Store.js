Ext.define('scholar.store.staff.leave.settings.Store', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.leave.settings.LeaveSettingsSearch',
//    data : [
//			[ 'Admin','10','1.5','1/5 12:00am' ],
//			[ 'Staff','12','1.5','9/1 12:00am' ],
//			[ 'Student','NA','NA','9/1 12:00am' ],
//			[ 'Librarian','12','1.5','9/1 12:00am' ],
//			[ 'Parent','NA','NA','9/1 12:00am' ]
//		   ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/leaveSettings',
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