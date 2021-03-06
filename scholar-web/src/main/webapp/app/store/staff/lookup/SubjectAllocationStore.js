Ext.define('scholar.store.staff.lookup.SubjectAllocationStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.lookup.SubjectAllocation',
//    data : [
//			[ '2011', 'Standard 1', 'A','Maths','true', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
//			[ '2012', 'Standard 2', 'A','Science','false', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ]			
//		   ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/subjectAllocation',
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