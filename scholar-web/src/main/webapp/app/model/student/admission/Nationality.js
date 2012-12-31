Ext.define('scholar.model.student.admission.Nationality', {
	extend: 'Ext.data.Model',
    fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'abbr',
		type : 'string'
	}, {
		name : 'nationality',
		type : 'string'
	}
	]
});