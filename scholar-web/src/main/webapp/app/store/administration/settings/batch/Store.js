Ext.define('scholar.store.administration.settings.batch.Store', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.batch.Model',
	data : [
                   ["AL", "A"],
                   ["AK", "C"],
                   ["AZ", "CS 1"],
                   ["AZ", "2012"]
           ],
	autoLoad : true
});