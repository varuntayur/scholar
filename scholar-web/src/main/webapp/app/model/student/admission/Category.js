Ext.define('scholar.model.student.admission.Category', {
	extend: 'Ext.data.Model',
    fields : [  {
		name : 'id',
		type : 'int'
	},{
		name : 'abbr',
		type : 'string'
	}, {
		name : 'categoryName',
		type : 'string'
	}
	]
});