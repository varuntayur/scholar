Ext.define('scholar.store.administration.user.roles.PermissionStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.user.roles.PermissionSearch',
    data : [
			[ 0, 'Admin',false,true,false  ],
			[ 0, 'Staff',false,true,false  ],
			[ 0, 'Student',false,true,false ],
			[ 0, 'Librarian',false,true,false ],
			[ 0, 'Parent',false,true,false ]
		   ],
	autoLoad: true,
//    autoLoad : true,
//	autoSync: true,
//	proxy: {
//		type: 'rest',
//		url: 'http://localhost:8080/scholar-rest/rest/userPermissions',
//		reader: {
//			type: 'json',
//			root: 'data',
//			totalProperty: 'total'
//		},
//		writer: {
//			type: 'json'
//		},
//		appendId: false
//	},
//	pageSize: 1
});