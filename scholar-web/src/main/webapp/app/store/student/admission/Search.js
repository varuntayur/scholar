Ext.define('scholar.store.student.admission.Search', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.Search',
//	data : [
//			[ '001/001', 'Amar', 'Male', 'Standard 1', 'A', '2012',
//					'2007-01-01', 'O+', 'Indian', 'GM', '4/5 12:00am',
//					'1/4 12:00am' ],
//			[ '001/002', 'Ishaan', 'Male', 'Standard 2', 'A', '2011',
//					'2006-02-11', 'B+', 'Indian', 'SC', '10/5 12:00am',
//					'1/4 12:00am' ],
//			[ '001/005', 'Pran', 'Male', 'Standard 3', 'A', '2010',
//					'2005-03-01', 'O+', 'Indian', 'ST', '8/5 12:00am',
//					'1/4 12:00am' ],
//			[ '001/010', 'Vishnu', 'Male', 'Standard 1', 'A', '2009',
//					'2007-06-21', 'A+', 'Indian', 'GM', '9/5 12:00am',
//					'1/4 12:00am' ],
//			[ '010/234', 'Sri Hari', 'Male', 'Standard 5', 'A', '2012',
//					'2004-01-01', 'O-', 'Indian', 'GM', '13/5 12:00am',
//					'1/4 12:00am' ],
//			[ '111/286', 'Shiva', 'Male', 'Standard 8', 'A', '2014',
//					'2002-02-9', 'O+', 'Indian', 'SC', '1/5 12:00am',
//					'1/4 12:00am' ],
//			[ '101/234', 'Jyestha', 'Male', 'Standard 9', 'A', '2011',
//					'2001-09-01', 'O+', 'Indian', 'GM', '1/5 12:00am',
//					'1/4 12:00am' ],
//			[ '201/002', 'Laksha', 'Female', 'Standard 10', 'A', '2014',
//					'2000-06-8', 'AB+', 'Indian', 'GM', '4/5 12:00am',
//					'1/4 12:00am' ],
//			[ '501/004', 'Sangeetha', 'Female', 'Standard 4', 'A', '2012',
//					'2005-06-9', 'B+', 'Indian', 'GM', '17/5 12:00am',
//					'1/4 12:00am' ],
//			[ '116/006', 'Shwetha', 'Female', 'Standard 1', 'A', '2011',
//					'2007-02-10', 'O+', 'Indian', 'GM', '18/5 12:00am',
//					'1/4 12:00am' ],
//			[ '145/007', 'Sushma', 'Female', 'Standard 7', 'A', '2010',
//					'2000-08-11', 'O+', 'Indian', 'GM', '19/5 12:00am',
//					'1/4 12:00am' ],
//			[ '723/007', 'Santhosh', 'Male', 'Standard 5', 'A', '2011',
//					'2005-04-01', 'A+', 'Indian', 'ST', '1/9 12:00am',
//					'1/8 12:00am' ] ],
//	autoLoad : true
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/studentAdmission',
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
	pageSize: 1,
	autoSync: true,
	autoLoad: false
});