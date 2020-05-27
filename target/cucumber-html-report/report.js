$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("regression/infoNewsContact.feature");
formatter.feature({
  "line": 1,
  "name": "InfoNewsContact",
  "description": "",
  "id": "infonewscontact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Navigate pages from Info Pages",
  "description": "",
  "id": "infonewscontact;navigate-pages-from-info-pages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User do mouse over on InfoPages link in main menu on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select option from \"\u003cDrop down\u003e\" list",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "navigate to the relevant page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "infonewscontact;navigate-pages-from-info-pages;",
  "rows": [
    {
      "cells": [
        "Drop down"
      ],
      "line": 9,
      "id": "infonewscontact;navigate-pages-from-info-pages;;1"
    },
    {
      "cells": [
        "About Us"
      ],
      "line": 10,
      "id": "infonewscontact;navigate-pages-from-info-pages;;2"
    },
    {
      "cells": [
        "Privacy Policy"
      ],
      "line": 11,
      "id": "infonewscontact;navigate-pages-from-info-pages;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5014633576,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Navigate pages from Info Pages",
  "description": "",
  "id": "infonewscontact;navigate-pages-from-info-pages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User do mouse over on InfoPages link in main menu on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select option from \"About Us\" list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "navigate to the relevant page",
  "keyword": "Then "
});
formatter.match({
  "location": "infoNewsContactStepDef.openUrl()"
});
formatter.result({
  "duration": 268115035,
  "status": "passed"
});
formatter.match({
  "location": "infoNewsContactStepDef.userDoMouseOverOnInfoPagesLinkInMainMenuOnHomepage()"
});
formatter.result({
  "duration": 16831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Us",
      "offset": 20
    }
  ],
  "location": "infoNewsContactStepDef.selectOptionFromList(String)"
});
formatter.result({
  "duration": 3558559,
  "status": "passed"
});
formatter.match({
  "location": "infoNewsContactStepDef.navigateToTheRelevantPage()"
});
formatter.result({
  "duration": 74177,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 530726374,
  "status": "passed"
});
formatter.before({
  "duration": 2012045202,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Navigate pages from Info Pages",
  "description": "",
  "id": "infonewscontact;navigate-pages-from-info-pages;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User do mouse over on InfoPages link in main menu on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select option from \"Privacy Policy\" list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "navigate to the relevant page",
  "keyword": "Then "
});
formatter.match({
  "location": "infoNewsContactStepDef.openUrl()"
});
formatter.result({
  "duration": 210379498,
  "status": "passed"
});
formatter.match({
  "location": "infoNewsContactStepDef.userDoMouseOverOnInfoPagesLinkInMainMenuOnHomepage()"
});
formatter.result({
  "duration": 14676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy Policy",
      "offset": 20
    }
  ],
  "location": "infoNewsContactStepDef.selectOptionFromList(String)"
});
formatter.result({
  "duration": 56504,
  "status": "passed"
});
formatter.match({
  "location": "infoNewsContactStepDef.navigateToTheRelevantPage()"
});
formatter.result({
  "duration": 46085,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 467112354,
  "status": "passed"
});
});