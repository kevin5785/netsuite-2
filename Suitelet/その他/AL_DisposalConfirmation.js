/*
 * ********************************************************************************
 * Script: AL_DisposalConfirmation.js
 * Description: ×ªmFæÊ
 * Author: shuji.nasu@globlway.co.jp
 * History:
 * Ver, Date
 * 0.1, 2016/06/03
 * ********************************************************************************
 */
function DisposalConfirmation(request, response){
	
	var MainForm = nlapiCreateForm("×ª\¿mF");

	MainForm.addSubmitButton("\¿mF");
	MainForm.addResetButton("\¿·ß");

	MainForm.addButton("rrbutton", "mFÏÝæÁ");
	MainForm.addButton("resetButton", "Zbg");

 @   MainForm.addField("payment_name_field1", "text", "Xe[^X");
  @  MainForm.addField("payment_date_field", "date", "\¿ú");
   @ MainForm.addField("payment_name_field2", "text", "\¿Ò");
  @  MainForm.addField("bank_name_field", "text", "mFÒ");
    @MainForm.addButton("searchButton", "õ");

	var DisposalList = MainForm.addSubList("payment_sub_list", "staticlist", "×ªÎÛê");
	
	DisposalList.addField("cbox1", "checkbox", "Ið");
	DisposalList.addField("text5", "text", "Xe[^X");
	DisposalList.addField("text1", "text", "Úq¼");
	DisposalList.addField("text2", "text", "_ñÔ");
	DisposalList.addField("date1", "date", "_ñú");
	DisposalList.addField("date2", "date", "ðñú");
	DisposalList.addField("text3", "text", "¨¼");
	DisposalList.addField("text4", "text", "¤i¼");
	DisposalList.addField("text6", "text", "\¿Ò");
	DisposalList.addField("text7", "text", "mFÒ");
	DisposalList.addField("date3", "date", "\¿ú");
	
	DisposalList.setLineItemValue("text1", 1, "1 Úq¾Y");
	DisposalList.setLineItemValue("text5", 1, "\¿");
	DisposalList.setLineItemValue("text2", 1, "_ñÔ001");
	DisposalList.setLineItemValue("date1", 1, "2013N531ú");
	DisposalList.setLineItemValue("date2", 1, "2016N531ú");
	DisposalList.setLineItemValue("text3", 1, "¨A");
	DisposalList.setLineItemValue("text4", 1, "¤iA");
	DisposalList.setLineItemValue("text6", 1, "\¿¾Y");
	DisposalList.setLineItemValue("text7", 1, "mF¾Y");
	DisposalList.setLineItemValue("date3", 1, "2016N731ú");
	
	DisposalList.setLineItemValue("text1", 2, "2 ÚqñY");
	DisposalList.setLineItemValue("text5", 2, "\¿");
	DisposalList.setLineItemValue("text2", 2, "_ñÔ567");
	DisposalList.setLineItemValue("date1", 2, "2010N228ú");
	DisposalList.setLineItemValue("date2", 2, "2012N331ú");
	DisposalList.setLineItemValue("text3", 2, "¨B");
	DisposalList.setLineItemValue("text4", 2, "¤iC");
	DisposalList.setLineItemValue("text6", 2, "\¿ñY");
	DisposalList.setLineItemValue("text7", 2, "mFñY");
	DisposalList.setLineItemValue("date3", 2, "2016N831ú");
	
	DisposalList.setLineItemValue("text1", 3, "3 ÚqOY");
	DisposalList.setLineItemValue("text5", 3, "mFÏÝ");
	DisposalList.setLineItemValue("text2", 3, "_ñÔ234");
	DisposalList.setLineItemValue("date1", 3, "2000N531ú");
	DisposalList.setLineItemValue("date2", 3, "2016N430ú");
	DisposalList.setLineItemValue("text3", 3, "¨C");
	DisposalList.setLineItemValue("text4", 3, "¤iC");
	DisposalList.setLineItemValue("text6", 3, "\¿ñY");
	DisposalList.setLineItemValue("text7", 3, "mFOY");
	DisposalList.setLineItemValue("date3", 3, "2016N1031ú");

	DisposalList.setLineItemValue("text1", 4, "3 ÚqlY");
	DisposalList.setLineItemValue("text5", 4, "mFÏÝæÁ");
	DisposalList.setLineItemValue("text2", 4, "_ñÔ222");
	DisposalList.setLineItemValue("date1", 4, "2010N131ú");
	DisposalList.setLineItemValue("date2", 4, "2015N430ú");
	DisposalList.setLineItemValue("text3", 4, "¨D");
	DisposalList.setLineItemValue("text4", 4, "¤iE");
	DisposalList.setLineItemValue("text6", 4, "\¿lY");
	DisposalList.setLineItemValue("text7", 4, "mFÜY");
	DisposalList.setLineItemValue("date3", 4, "2016N1031ú");
	
	response.writePage(MainForm);
}