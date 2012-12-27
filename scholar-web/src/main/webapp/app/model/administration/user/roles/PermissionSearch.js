Ext.define('scholar.model.administration.user.roles.PermissionSearch', {
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
	        	  name: 'delete',
	        	  type: 'bool'
	          },
	          {	
				name : 'lastChange',
				type : 'date',
				dateFormat : 'n/j h:ia'
	          }]
});