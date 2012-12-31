Ext.define('scholar.model.administration.settings.department.DepartmentSearch',
		{
			extend : 'Ext.data.Model',
			fields : [ {
				name : 'id',
				type : 'int'
			}, {
				name : 'departmentName',
				type : 'string'
			}, {
				name : 'lastChange',
				type : 'date',
				dateFormat : 'n/j h:ia'
			} ]

		});