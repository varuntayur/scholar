Ext.define('scholar.controller.administration.settings.category.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized Category.Controller!');
		
		this.control({
			'#categorySearch' : {
				itemdblclick: this.editCategorySettings,
				render:this.loadCategory
			},
			
			'categorySearch button[action=add]' : {
            	click: this.addCategory
            },
            'categorySearch button[action=delete]' : {
            	click: this.deleteCategory
            }
		});
	},
	
	loadCategory: function()
	{
		this.getAdministrationSettingsCategoryStoreStore().loadPage(1);
	},
	
	deleteCategory: function()
	{
		var store = this.getAdministrationSettingsCategoryStoreStore();
		var selection = Ext.ComponentQuery.query('#categorySearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
        store.loadPage(1);
	},
	
	addCategory: function()
	{
		var admForm = Ext.widget('categoryDetail',{ store: this.getAdministrationSettingsCategoryStoreStore() });
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Category Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	editCategorySettings: function(grid, record)
	{
	        var admForm = Ext.widget('categoryDetail',{ store: this.getAdministrationSettingsCategoryStoreStore(), isEdit: true  });
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Category Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.settings.category.Manager' ],

	stores : [ 'administration.settings.category.Store'
	         ],
	
	models : [ 'administration.settings.category.CategorySearch'
	         ]

});