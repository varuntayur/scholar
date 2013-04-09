Ext.define('scholar.store.administration.user.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.user.UserSearch',
//    data : [
//	        [ 'Ram', 'Admin',  '9/1 12:00am' ],
//			[  'Shankar', 'Student',  '9/1 12:00am' ],
//			[  'Purushotham', 'Staff', '9/1 12:00am' ],
//	        [  'Amar', 'Staff', '9/1 12:00am' ],
//	        [  'Shanthi', 'Staff', '9/1 12:00am' ],
//	        [  'Shwetha', 'Staff', '9/1 12:00am' ],
//	        [  'Saavan', 'Staff', '9/1 12:00am' ],
//	        [  'Saathvik', 'Staff', '9/1 12:00am' ],
//	        [  'Uday', 'Staff', '9/1 12:00am' ],
//	        [  'Raju', 'Staff', '9/1 12:00am' ],
//			[ 'Murali', 'Staff',  '9/1 12:00am' ],
//			[ 'Deepak', 'Staff',  '9/1 12:00am' ],
//	        [ 'Krishna', 'Staff', '9/1 12:00am' ],
//	        [ 'Guru', 'Staff',  '9/1 12:00am' ],
//	        [  'Amar', 'Student',  '9/1 12:00am' ],
//			[  'Ishaan', 'Student', '9/1 12:00am' ],
//			[  'Pran', 'Student', '9/1 12:00am' ], 
//			[  'Vishnu', 'Student', '9/1 12:00am' ],
//			[  'Sri Hari', 'Student', '9/1 12:00am' ],
//			[  'Shiva', 'Student', '9/1 12:00am' ],
//			[  'Jyestha', 'Student', '9/1 12:00am' ],
//			[  'Laksha', 'Student', '9/1 12:00am' ],
//			[  'Sangeetha', 'Student', '9/1 12:00am' ],
//			[  'Shwetha', 'Student',  '9/1 12:00am' ],
//			[  'Sushma', 'Student',   '9/1 12:00am' ],
//			[  'Santhosh', 'Student', '9/1 12:00am' ]
//		  ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/users',
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