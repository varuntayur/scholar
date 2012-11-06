Ext.define('scholar.store.administration.settings.department.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.department.SearchModel',	
	autoLoad : true,
	data : [
			[ 'Mathematics', '9/1 12:00am' ],
			[ 'Science', '8/1 12:00am' ],
			[ 'Social', '8/1 12:00am' ] 
		]
});