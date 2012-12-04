Ext.define('scholar.controller.finance.fees.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized finance.fees.Controller!');
		this.control({
			'#feeDetailSearch' : {
				itemdblclick: this.viewReceipt
			},
			'#feeDetailSearch button[action=setFeeStructure]' : {
				click: this.viewFeeStructure
			},
			'#feeDetailSearch button[action=newFeeCollection]' : {
				click: this.viewReceipt
			},
			'#feeDetailSearch button[action=viewReceipt]' : {
				click: this.viewReceipt
			}
		});
	},
	
	viewFeeStructure: function()
	{
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Fee Structure',
			layout:'fit',
			autoScroll : true,
			autoRender: true,			
			closeAction : 'hide',
			constrain : true,
			items : [ {
				xtype : 'feeStructure',
				layout:'fit',
				width:450,
				height: 400
			} ]
		}).show();
	},
	
	viewReceipt:function(grid,rec)
	{
		console.log('Button clicked.To be implemented.');
	},

	views : [ 'finance.fees.Manager' ,'scholar.view.finance.fees.FeeStructure'],

	stores : [ 'finance.fees.SearchStore','finance.fees.FeeStructureStore' ],
	
	models : [ 'finance.fees.SearchModel' ]

});