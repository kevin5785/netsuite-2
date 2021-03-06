/**
 * Module Description
 *
 * Version    Date            Author           Remarks
 * 1.00       20 July 2016     Principal
 *
 */

function contractUpdateList(request, response)
{
    try{
    if (request.getMethod() == 'GET'){
      var applyListForm = nlapiCreateForm("_ñXVÄàoÍ");
      applyListForm.setScript('customscript_gw_cs_contractupdatelist');
      var param = {};
      var strID = request.getParameter('strID');
      //---add a button and call suitelet on click that button and it will open a new window
      
      var applyButton  = applyListForm.addSubmitButton(" [oÍ");
      var searchButton  = applyListForm.addButton("searchButton", "õ",'btnSearchButton();');
      
      // _ñú
      var dateGroupField = applyListForm.addFieldGroup("date_from_group_field", "_ñú").setShowBorder(false);
      var dateFromField = applyListForm.addField("date_from_field", "date", "_ñúFrom",null,"date_from_group_field");
      var dateGroupField = applyListForm.addFieldGroup("date_to_group_field", "_ñú").setShowBorder(false);
      var dateToField = applyListForm.addField("date_to_field", "date", "_ñúTo",null,"date_to_group_field");
      contractDateFrom =request.getParameter('contract_date_from');
      contractDateTo =request.getParameter('contract_date_to');
      param['contract_date_from']=contractDateFrom;
      param['contract_date_to']=contractDateTo;
      if(contractDateFrom !== null){
      dateFromField.setDefaultValue(contractDateFrom);
      }
      if(contractDateTo !== null){
      dateToField.setDefaultValue(contractDateTo);
      }
      // ÁÎÛ ¿ê
      var billingSubList  = applyListForm.addSubList("billing_sub_list", "list", "_ñê");
      billingSubList.addField("sub_list_check",          "checkbox", "Ið");
      billingSubList.addField("sub_list_id",   "text", "àID");
      billingSubList.addField("sub_list_name",   "text", "¼O");
      billingSubList.addField("sub_list_contract_date",   "date", "_ñú ");
      billingSubList.addField("sub_list_contract_created_so",       "text", "¶ì¬ÏÝ");
      billingSubList.addField("sub_list_contract_contract_status",  "text", "_ñXe[^X");
      billingSubList.addField("sub_list_receptionist",  "text", "_ñSÒ");
      
      var searchResult = getList(param);
      var searchResultFieldGroup = applyListForm.addFieldGroup("search_result_field_group", "õÊ");
//      searchResultFieldGroup.setSingleColumn(true);
//      searchResultFieldGroup.setShowBorder(true);
	  var searchResultCountField = applyListForm.addField("search_result_count_field", "text", "õÊ", null,"search_result_field_group");
	  searchResultCountField.setDisplayType("inline");
	  if(searchResult !== null)
    	  searchResultCountField.setDefaultValue(searchResult.length+"");
      else
    	  searchResultCountField.setDefaultValue("0");
     // var custormerEntity;
      if(searchResult !== null){

	      for (var i = 0; i < searchResult.length; i++) {
	         
	    	 billingSubList.setLineItemValue("sub_list_id",					i+1, searchResult[i].getId());
	    	 billingSubList.setLineItemValue("sub_list_name",       i+1, searchResult[i].getValue('name'));
	    	 billingSubList.setLineItemValue("sub_list_contract_date",     	i+1, searchResult[i].getValue('custrecord_gw_contract_date'));
	    	 if(searchResult[i].getValue('custrecord_gw_contract_created_so')=="T"){
	    	 billingSubList.setLineItemValue("sub_list_contract_created_so",  i+1, "Í¢");
	    	 }
	    	 else{
	    		 billingSubList.setLineItemValue("sub_list_contract_created_so",  i+1, "¢¢¦");
	    		 }
        	 billingSubList.setLineItemValue("sub_list_contract_contract_status",  i+1, searchResult[i].getText('custrecord_gw_contract_status'));
        	 billingSubList.setLineItemValue("sub_list_receptionist", i+1, searchResult[i].getText('custrecord_gw_receptionist'));
	      }

      }
      var printButton = applyListForm.addButton('printButton', 'vr[' ,'btnPrintButton();');
      
      response.writePage(applyListForm);
    }
    else{
    }
  }
  catch(e){
    nlapiLogExecution('ERROR','contractUpdateList',e);
  }
}
function getList(param){
	
	var filters = new Array();
	var i = 0;
	if(param['contract_date_from'] !== '' && param['contract_date_from'] !== null){
	    filters[i] = new nlobjSearchFilter( 'custrecord_gw_contract_date', null, 'onorafter', param['contract_date_from'] );
	    i++;
	  }
	if(param['contract_date_to'] !== '' && param['contract_date_to'] !== null ){
	    filters[i] = new nlobjSearchFilter( 'custrecord_gw_contract_date', null, 'onorbefore', param['contract_date_to'] );
	    i++;
	  }
	  var col = new Array();
	  col[0] = new nlobjSearchColumn('name');
	  col[1] = new nlobjSearchColumn('custrecord_gw_contract_date');
	  col[2] = new nlobjSearchColumn('custrecord_gw_contract_created_so');
	  col[3] = new nlobjSearchColumn('custrecord_gw_contract_status');
	  col[4] = new nlobjSearchColumn('custrecord_gw_receptionist');
	  
	  if (i == 0) return null;

	  var result =   nlapiSearchRecord(null, 'customsearch_gw_contract_update_list', filters, col);

	  if(result == undefined) result = null;
	  return result;
	}


