Ext.define('scholar.view.finance.fees.Manager', {
	extend : 'Ext.form.Panel',
	alias: 'widget.feesManager',
	requires:['scholar.view.finance.fees.Search'],
    autoScroll:true,
    layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    items: [
            	{
            		region:'center',
            		xtype:'feeDetailSearch',
            		layout:'fit'
            	}
		   ]	
});
