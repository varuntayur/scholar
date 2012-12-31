Ext.define('scholar.model.student.admission.BloodGroup', {
	extend: 'Ext.data.Model',
    fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'abbr',
		type : 'string'
	}, {
		name : 'bloodGroupName',
		type : 'string'
	}
	]
});