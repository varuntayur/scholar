Ext.define('scholar.store.finance.fees.FeeStructureStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.finance.fees.FeeStructureModel',
    groupField: 'groupName',
    data: [{
	        lineItem: 'Registration Fee',
	        groupName: 'Registration',
	        value: 2000
	    },
	    {
	        lineItem: 'Admission Fee',
	        groupName: 'Admission',
	        value: 3500
	    },
	    {
	        lineItem: 'Development Fee',
	        groupName: 'Development',
	        value: 5000
	    },
        {
            lineItem: 'Medical Fee',
            groupName: 'Annual',
            value: 1000
        },
        {
            lineItem: 'Magazine & Bulletin Fee',
            groupName: 'Annual',
            value: 2500
        },
        {
            lineItem: 'Audio Visual Fee',
            groupName: 'Annual',
            value: 1800
        },
        {
            lineItem: 'Stationery Fee',
            groupName: 'Annual',
            value: 3000
        },
        {
            lineItem: 'Activity Fee',
            groupName: 'Annual',
            value: 500
        },
        {
            lineItem: 'Maintenance Fee',
            groupName: 'Annual',
            value: 2000
        },
        {
            lineItem: 'Sports Fee',
            groupName: 'Annual',
            value: 1000
        },
        {
            lineItem: 'Laboratory Fee (Grade VIII to X)',
            groupName: 'Annual',
            value: 5000
        },
        {
            lineItem: 'Laboratory Fee (Grade XI to XII)',
            groupName: 'Annual',
            value: 7500
        },
        {
            lineItem: 'Grade Pre-Nursery to II',
            groupName: 'Tution Fee',
            value: 40000
        },
        {
            lineItem: 'Grade III to VIII',
            groupName: 'Tution Fee',
            value: 44000
        },
        {
            lineItem: 'Grade IX & X',
            groupName: 'Tution Fee',
            value: 48000
        },
        {
            lineItem: 'Grade XI & XII',
            groupName: 'Tution Fee',
            value: 50000
        },
        {
            lineItem: 'Grade Pre-Nursery to IV',
            groupName: 'Computer Fee',
            value: 2000
        },
        {
            lineItem: 'Grade V & X',
            groupName: 'Computer Fee',
            value: 2500
        },
        {
            lineItem: 'Grade XI & XII',
            groupName: 'Computer Fee',
            value: 3500
        },
        {
            lineItem: 'Grade Pre-Nursery to V',
            groupName: 'Transport Fee',
            value: 12000
        },
        {
            lineItem: 'Grade VI to XII',
            groupName: 'Transport Fee',
            value: 10000
        }
    ],
	autoLoad: true
});