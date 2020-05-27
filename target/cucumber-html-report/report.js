$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("regression/infoNewsContact.feature");
formatter.feature({
  "line": 1,
  "name": "InfoNewsContact",
  "description": "",
  "id": "infonewscontact",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Infopage",
  "description": "",
  "id": "infonewscontact;infopage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open url",
  "keyword": "Given "
});
formatter.match({
  "location": "infoNewsContact.openUrl()"
});
formatter.result({
  "duration": 137447926,
  "status": "passed"
});
});