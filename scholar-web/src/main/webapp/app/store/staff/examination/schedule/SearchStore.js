Ext.define('scholar.store.staff.examination.schedule.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.examination.schedule.ScheduleSearch',
//    data : [
//			[ 'Standard 1', 'A','Subject 1'	,'9/1 12:00am' ],
//			[ 'Standard 2', 'A','Subject 2',	'9/1 12:00am' ],
//			[ 'Standard 3', 'A','Subject 2',	'9/1 12:00am' ],
//			[ 'Standard 4', 'A','Subject 2',	'9/1 12:00am' ],
//			[ 'Standard 5', 'A','Subject 2',	'9/1 12:00am' ],
//			[ 'Standard 6', 'A','Subject 2',	'9/1 12:00am' ],
//			[ 'Standard 7', 'A','Subject 2',	'9/1 12:00am' ],
//			[ 'Standard 8', 'A','Subject 2',	'9/1 12:00am' ],
//			[ 'Standard 9', 'A','Subject 2',	'9/1 12:00am' ],
//			[ 'Standard 10', 'A','Subject 2',	'9/1 12:00am' ]
//		   ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/examinationSchedule',
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