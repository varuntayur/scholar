Ext.define('scholar.store.administration.dashboard.FeeCollectionStore', {
	extend: 'Ext.data.Store',
	model:'scholar.model.administration.dashboard.FeeCollectionModel',
	data: [
		        { name: 'Jan', data1: 100 },
		        { name: 'Feb', data1: 0 },
		        { name: 'Mar', data1: 0 },
		        { name: 'Apr', data1: 90 },
		        { name: 'May', data1: 100 },
		        { name: 'Jun', data1: 100 },
		        { name: 'Jul', data1: 0 },
		        { name: 'Aug', data1: 70 },
		        { name: 'Sep', data1: 0 },
		        { name: 'Oct', data1: 0 },
		        { name: 'Nov', data1: 87 },
		        { name: 'Dec', data1: 0 }				 
		    ],
	autoLoad: true
	
});