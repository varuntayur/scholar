Ext.define('scholar.store.student.admission.BloodGroupStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.BloodGroupModel',
	data : [ {
		"abbr" : "AL",
		"bloodGroupName" : "Unknown"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "A+"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "A-"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "B+"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "B-"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "O+"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "O-"
	}, {
		"abbr" : "AK",
		"bloodGroupName" : "AB+"
	}, {
		"abbr" : "AZ",
		"bloodGroupName" : "AB-"
	} ],
	autoLoad : true
});