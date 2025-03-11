function doGet(e) {
    return HtmlService.createHtmlOutput("Form Submitted Successfully!");
  }
  
  function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet1");
    sheet.appendRow([e.parameter.name, e.parameter.email, e.parameter.message, new Date()]);
    return HtmlService.createHtmlOutput("Message Received!");
  }
  