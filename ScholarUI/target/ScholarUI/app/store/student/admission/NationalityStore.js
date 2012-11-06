Ext.define('scholar.store.student.admission.NationalityStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.NationalityModel',
	data : [ {
		"abbr" : "AL",
		"nationality" : "Indian"
	}, {
		"abbr" : "AK",
		"nationality" : "Other"
	} ],
	autoLoad : true
});