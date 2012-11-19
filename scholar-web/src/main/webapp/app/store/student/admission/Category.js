Ext.define('scholar.store.student.admission.Category', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.Category',
	data : [ {
		"abbr" : "AL",
		"categoryName" : "General"
	}, {
		"abbr" : "AL",
		"categoryName" : "OBC"
	}, {
		"abbr" : "AL",
		"categoryName" : "SC"
	}, {
		"abbr" : "AL",
		"categoryName" : "ST"
	} ],
	autoLoad : true
});