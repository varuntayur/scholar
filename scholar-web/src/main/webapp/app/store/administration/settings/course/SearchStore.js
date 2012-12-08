Ext.define('scholar.store.administration.settings.course.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.course.SearchModel',
	data : [
	        [ '001/001', 'Standard 1', '9/1 12:00am' ],
			[ '002/002', 'Standard 2',  '9/1 12:00am' ],
			[ '003/003', 'Standard 3',  '9/1 12:00am' ],
			[ '004/004', 'Standard 4',  '9/1 12:00am' ],
			[ '005/005', 'Standard 5',  '9/1 12:00am' ],
			[ '006/006', 'Standard 6',  '9/1 12:00am' ],
			[ '007/007', 'Standard 7',  '9/1 12:00am' ],
			[ '008/008', 'Standard 8',  '9/1 12:00am' ],
			[ '009/009', 'Standard 9',  '9/1 12:00am' ],
			[ '010/010', 'Standard 10', '9/1 12:00am' ]
		],
	buffered: true,
	autoLoad : true
});