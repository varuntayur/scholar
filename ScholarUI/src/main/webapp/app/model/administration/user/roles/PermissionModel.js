Ext.define('scholar.model.administration.user.roles.PermissionModel', {
	extend : 'Ext.data.Model',
	fields : [{
				name : 'roleName',
				type : 'string'
	          },
	          {
	        	  type: 'bool',
	              name: 'read',
	          },
	          {
	        	  type: 'bool',
	              name: 'write',
	          },
	          {
	        	  type: 'bool',
	              name: 'delete',
	          },
	          {	
				name : 'lastChange',
				type : 'date',
				dateFormat : 'n/j h:ia'
	          }]
});