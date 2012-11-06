Ext.define('scholar.store.student.admission.CategoryStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.CategoryModel',
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