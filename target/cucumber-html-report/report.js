$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("regression/info_Page.feature");
formatter.feature({
  "line": 1,
  "name": "InfoNewsContact",
  "description": "",
  "id": "infonewscontact",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5060885891,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate pages from Info Pages",
  "description": "",
  "id": "infonewscontact;navigate-pages-from-info-pages",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Info Pages link display in main menu",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User do mouse hover on InfoPages link in main menu on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select About Us link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "navigate to the About Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "select Privacy policy link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "navigate to the Privacy Page",
  "keyword": "Then "
});
formatter.match({
  "location": "infoPage_StepDef.infoPagesLinkDisplayInMainMenu()"
});
formatter.result({
  "duration": 177966466,
  "status": "passed"
});
formatter.match({
  "location": "infoPage_StepDef.userDoMouseOverOnInfoPagesLinkInMainMenuOnHomepage()"
});
formatter.result({
  "duration": 7347499,
  "status": "passed"
});
formatter.match({
  "location": "infoPage_StepDef.selectLinkAboutUs()"
});
formatter.result({
  "duration": 4293984446,
  "status": "passed"
});
formatter.match({
  "location": "infoPage_StepDef.navigateToTheAboutUsPage()"
});
formatter.result({
  "duration": 32849224,
  "status": "passed"
});
formatter.match({
  "location": "infoPage_StepDef.selectPrivacyPolicyLink()"
});
formatter.result({
  "duration": 1230008910,
  "status": "passed"
});
formatter.match({
  "location": "infoPage_StepDef.navigateToThePrivacyPage()"
});
formatter.result({
  "duration": 31032178,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 376755607,
  "status": "passed"
});
});