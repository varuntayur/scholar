Ext.define('scholar.store.administration.settings.batch.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.batch.SearchModel',
	data : [
			[ '2011', 'Standard 1', 'A', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
			[ '2012', 'Standard 1', 'A', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
			[ '2010', 'Standard 2', 'B', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
			[ '2010', 'Standard 3', 'A', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
			[ '2012', 'Standard 4', 'C', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
			[ '2010', 'Standard 5', 'B', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
			[ '2011', 'Standard 6', 'A', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ]
		   ],
	buffered: true,
	autoLoad : true
});