Ext.define('scholar.store.administration.user.roles.PermissionStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.user.roles.PermissionSearch',
//    data : [
//			[ 'Admin',false,true,false, '1/5 12:00am' ],
//			[ 'Staff',false,true,false, '9/1 12:00am' ],
//			[ 'Student',false,true,false,'9/1 12:00am' ],
//			[ 'Librarian',false,true,false,'9/1 12:00am' ],
//			[ 'Parent',false,true,false,'9/1 12:00am' ]
//		   ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/userPermissions',
		reader: {
			type: 'json',
			root: 'data',
			totalProperty: 'total'
		},
		writer: {
			type: 'json'
		},
		appendId: false
	},
	pageSize: 1
});