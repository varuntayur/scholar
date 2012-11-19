Ext.define('scholar.store.student.admission.Nationality', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.Nationality',
	data : [ {
		"abbr" : "AL",
		"nationality" : "Indian"
	}, {
		"abbr" : "AK",
		"nationality" : "Other"
	} ],
	autoLoad : true
});