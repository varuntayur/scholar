Ext.define('scholar.store.administration.settings.course.Store', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.course.Model',
	data : [ [ "AL", "Standard 1" ], [ "AL", "Standard 2" ],
			[ "AL", "Standard 3" ], [ "AL", "Standard 4" ],
			[ "AL", "Standard 5" ], [ "AL", "Standard 6" ],
			[ "AL", "Standard 7" ], [ "AL", "Standard 8" ],
			[ "AL", "Standard 9" ], [ "AL", "Standard 10" ] ],
	autoLoad : true
});