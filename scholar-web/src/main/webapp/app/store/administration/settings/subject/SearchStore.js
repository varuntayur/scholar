Ext.define('scholar.store.administration.settings.subject.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.subject.SubjectSearch',	
//	autoLoad : true,
//	data : [
//			[ 'Mathematics','MAT-1','Yes', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
//			[ 'Science','GSC-1','Yes', '1/5 12:00am','1/4 12:00am', '8/1 12:00am' ],
//			[ 'Social','SS-1','Yes', '1/9 12:00am','1/8 12:00am', '8/1 12:00am' ] 
//		]
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/subject',
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
	pageSize : 1
});