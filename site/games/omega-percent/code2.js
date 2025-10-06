gdjs.gameoverCode = {};
gdjs.gameoverCode.GDcursorObjects2_1final = [];

gdjs.gameoverCode.GDoptionsObjects1_1final = [];

gdjs.gameoverCode.GDoptionsObjects2_1final = [];

gdjs.gameoverCode.GDretryObjects1_1final = [];

gdjs.gameoverCode.GDretryObjects2_1final = [];

gdjs.gameoverCode.GDtitleObjects1_1final = [];

gdjs.gameoverCode.GDtitleObjects2_1final = [];

gdjs.gameoverCode.GDoptionsObjects1= [];
gdjs.gameoverCode.GDoptionsObjects2= [];
gdjs.gameoverCode.GDoptionsObjects3= [];
gdjs.gameoverCode.GDcursorObjects1= [];
gdjs.gameoverCode.GDcursorObjects2= [];
gdjs.gameoverCode.GDcursorObjects3= [];
gdjs.gameoverCode.GDgameoverObjects1= [];
gdjs.gameoverCode.GDgameoverObjects2= [];
gdjs.gameoverCode.GDgameoverObjects3= [];
gdjs.gameoverCode.GDscoreObjects1= [];
gdjs.gameoverCode.GDscoreObjects2= [];
gdjs.gameoverCode.GDscoreObjects3= [];
gdjs.gameoverCode.GDscore2Objects1= [];
gdjs.gameoverCode.GDscore2Objects2= [];
gdjs.gameoverCode.GDscore2Objects3= [];
gdjs.gameoverCode.GDtimeObjects1= [];
gdjs.gameoverCode.GDtimeObjects2= [];
gdjs.gameoverCode.GDtimeObjects3= [];
gdjs.gameoverCode.GDtime2Objects1= [];
gdjs.gameoverCode.GDtime2Objects2= [];
gdjs.gameoverCode.GDtime2Objects3= [];
gdjs.gameoverCode.GDcomboObjects1= [];
gdjs.gameoverCode.GDcomboObjects2= [];
gdjs.gameoverCode.GDcomboObjects3= [];
gdjs.gameoverCode.GDcombo2Objects1= [];
gdjs.gameoverCode.GDcombo2Objects2= [];
gdjs.gameoverCode.GDcombo2Objects3= [];
gdjs.gameoverCode.GDkillsObjects1= [];
gdjs.gameoverCode.GDkillsObjects2= [];
gdjs.gameoverCode.GDkillsObjects3= [];
gdjs.gameoverCode.GDkills2Objects1= [];
gdjs.gameoverCode.GDkills2Objects2= [];
gdjs.gameoverCode.GDkills2Objects3= [];
gdjs.gameoverCode.GDretryObjects1= [];
gdjs.gameoverCode.GDretryObjects2= [];
gdjs.gameoverCode.GDretryObjects3= [];
gdjs.gameoverCode.GDtitleObjects1= [];
gdjs.gameoverCode.GDtitleObjects2= [];
gdjs.gameoverCode.GDtitleObjects3= [];
gdjs.gameoverCode.GDheckedObjects1= [];
gdjs.gameoverCode.GDheckedObjects2= [];
gdjs.gameoverCode.GDheckedObjects3= [];

gdjs.gameoverCode.conditionTrue_0 = {val:false};
gdjs.gameoverCode.condition0IsTrue_0 = {val:false};
gdjs.gameoverCode.condition1IsTrue_0 = {val:false};
gdjs.gameoverCode.condition2IsTrue_0 = {val:false};
gdjs.gameoverCode.condition3IsTrue_0 = {val:false};
gdjs.gameoverCode.conditionTrue_1 = {val:false};
gdjs.gameoverCode.condition0IsTrue_1 = {val:false};
gdjs.gameoverCode.condition1IsTrue_1 = {val:false};
gdjs.gameoverCode.condition2IsTrue_1 = {val:false};
gdjs.gameoverCode.condition3IsTrue_1 = {val:false};
gdjs.gameoverCode.conditionTrue_2 = {val:false};
gdjs.gameoverCode.condition0IsTrue_2 = {val:false};
gdjs.gameoverCode.condition1IsTrue_2 = {val:false};
gdjs.gameoverCode.condition2IsTrue_2 = {val:false};
gdjs.gameoverCode.condition3IsTrue_2 = {val:false};


gdjs.gameoverCode.eventsList0x845ad4 = function(runtimeScene) {

{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition0IsTrue_0;
gdjs.gameoverCode.conditionTrue_1.val = ((Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)))) - ((Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) / 60)) * 60) <= 9);
}
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
gdjs.gameoverCode.GDtime2Objects2.createFrom(gdjs.gameoverCode.GDtime2Objects1);

{for(var i = 0, len = gdjs.gameoverCode.GDtime2Objects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDtime2Objects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) / 60)) + ":" + "0" + gdjs.evtTools.common.toString((Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)))) - ((Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) / 60)) * 60)));
}
}}

}


{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) == -(1);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameoverCode.GDheckedObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDheckedObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDheckedObjects1[i].hide();
}
}}

}


}; //End of gdjs.gameoverCode.eventsList0x845ad4
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDcursorObjects3Objects = Hashtable.newFrom({"cursor": gdjs.gameoverCode.GDcursorObjects3});gdjs.gameoverCode.eventsList0xa27244 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1);
}}

}


{

gdjs.gameoverCode.GDcursorObjects2.length = 0;


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition0IsTrue_0;
gdjs.gameoverCode.GDcursorObjects2_1final.length = 0;gdjs.gameoverCode.condition0IsTrue_1.val = false;
gdjs.gameoverCode.condition1IsTrue_1.val = false;
{
gdjs.gameoverCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.gameoverCode.condition0IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
}
}
{
gdjs.gameoverCode.GDcursorObjects3.createFrom(runtimeScene.getObjects("cursor"));
gdjs.gameoverCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDcursorObjects3Objects, runtimeScene, true, true);
if( gdjs.gameoverCode.condition1IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.gameoverCode.GDcursorObjects3.length;j<jLen;++j) {
        if ( gdjs.gameoverCode.GDcursorObjects2_1final.indexOf(gdjs.gameoverCode.GDcursorObjects3[j]) === -1 )
            gdjs.gameoverCode.GDcursorObjects2_1final.push(gdjs.gameoverCode.GDcursorObjects3[j]);
    }
}
}
{
gdjs.gameoverCode.GDcursorObjects2.createFrom(gdjs.gameoverCode.GDcursorObjects2_1final);
}
}
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(200);
}}

}


{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
gdjs.gameoverCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.gameoverCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDcursorObjects2[i].setX(Math.floor(gdjs.evtTools.input.getMouseX(runtimeScene, "switchs", 0)));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDcursorObjects2[i].setY(Math.floor(gdjs.evtTools.input.getMouseY(runtimeScene, "switchs", 0)));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.gameoverCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDcursorObjects2[i].hide(false);
}
}}

}


{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == -(1);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
gdjs.gameoverCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.gameoverCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDcursorObjects2[i].setX(Math.floor(gdjs.evtTools.input.getMouseX(runtimeScene, "switchs", 0)));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDcursorObjects2[i].setY(Math.floor(gdjs.evtTools.input.getMouseY(runtimeScene, "switchs", 0)));
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.gameoverCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDcursorObjects2[i].hide();
}
}}

}


{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) <= 0;
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
gdjs.gameoverCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.gameoverCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDcursorObjects1[i].hide();
}
}}

}


}; //End of gdjs.gameoverCode.eventsList0xa27244
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDoptionsObjects3Objects = Hashtable.newFrom({"options": gdjs.gameoverCode.GDoptionsObjects3});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDoptionsObjects1Objects = Hashtable.newFrom({"options": gdjs.gameoverCode.GDoptionsObjects1});gdjs.gameoverCode.eventsList0x7cc58c = function(runtimeScene) {

{

gdjs.gameoverCode.GDoptionsObjects2.length = 0;


gdjs.gameoverCode.condition0IsTrue_0.val = false;
gdjs.gameoverCode.condition1IsTrue_0.val = false;
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition0IsTrue_0;
gdjs.gameoverCode.GDoptionsObjects2_1final.length = 0;gdjs.gameoverCode.condition0IsTrue_1.val = false;
gdjs.gameoverCode.condition1IsTrue_1.val = false;
{
gdjs.gameoverCode.GDoptionsObjects3.createFrom(runtimeScene.getObjects("options"));
{gdjs.gameoverCode.conditionTrue_2 = gdjs.gameoverCode.condition0IsTrue_1;
gdjs.gameoverCode.condition0IsTrue_2.val = false;
gdjs.gameoverCode.condition1IsTrue_2.val = false;
{
gdjs.gameoverCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDoptionsObjects3Objects, runtimeScene, true, false);
}if ( gdjs.gameoverCode.condition0IsTrue_2.val ) {
{
gdjs.gameoverCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.gameoverCode.conditionTrue_2.val = true && gdjs.gameoverCode.condition0IsTrue_2.val && gdjs.gameoverCode.condition1IsTrue_2.val;
}
if( gdjs.gameoverCode.condition0IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.gameoverCode.GDoptionsObjects3.length;j<jLen;++j) {
        if ( gdjs.gameoverCode.GDoptionsObjects2_1final.indexOf(gdjs.gameoverCode.GDoptionsObjects3[j]) === -1 )
            gdjs.gameoverCode.GDoptionsObjects2_1final.push(gdjs.gameoverCode.GDoptionsObjects3[j]);
    }
}
}
{
gdjs.gameoverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
if( gdjs.gameoverCode.condition1IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
}
}
{
gdjs.gameoverCode.GDoptionsObjects2.createFrom(gdjs.gameoverCode.GDoptionsObjects2_1final);
}
}
}if ( gdjs.gameoverCode.condition0IsTrue_0.val ) {
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition1IsTrue_0;
gdjs.gameoverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8177852);
}
}}
if (gdjs.gameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "options");
}}

}


{


{
gdjs.gameoverCode.GDoptionsObjects2.createFrom(runtimeScene.getObjects("options"));
{for(var i = 0, len = gdjs.gameoverCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDoptionsObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.gameoverCode.GDoptionsObjects1.createFrom(runtimeScene.getObjects("options"));

gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDoptionsObjects1Objects, runtimeScene, true, false);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameoverCode.GDoptionsObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDoptionsObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDoptionsObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.gameoverCode.eventsList0x7cc58c
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects3Objects = Hashtable.newFrom({"retry": gdjs.gameoverCode.GDretryObjects3});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects1Objects = Hashtable.newFrom({"retry": gdjs.gameoverCode.GDretryObjects1});gdjs.gameoverCode.eventsList0x798434 = function(runtimeScene) {

{

/* Reuse gdjs.gameoverCode.GDretryObjects1 */

gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects1Objects, runtimeScene, true, false);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameoverCode.GDretryObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDretryObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDretryObjects1[i].setLayer("orange");
}
}}

}


}; //End of gdjs.gameoverCode.eventsList0x798434
gdjs.gameoverCode.eventsList0x7716bc = function(runtimeScene) {

{

gdjs.gameoverCode.GDretryObjects2.length = 0;


gdjs.gameoverCode.condition0IsTrue_0.val = false;
gdjs.gameoverCode.condition1IsTrue_0.val = false;
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition0IsTrue_0;
gdjs.gameoverCode.GDretryObjects2_1final.length = 0;gdjs.gameoverCode.condition0IsTrue_1.val = false;
gdjs.gameoverCode.condition1IsTrue_1.val = false;
{
gdjs.gameoverCode.GDretryObjects3.createFrom(runtimeScene.getObjects("retry"));
{gdjs.gameoverCode.conditionTrue_2 = gdjs.gameoverCode.condition0IsTrue_1;
gdjs.gameoverCode.condition0IsTrue_2.val = false;
gdjs.gameoverCode.condition1IsTrue_2.val = false;
{
gdjs.gameoverCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects3Objects, runtimeScene, true, false);
}if ( gdjs.gameoverCode.condition0IsTrue_2.val ) {
{
gdjs.gameoverCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.gameoverCode.conditionTrue_2.val = true && gdjs.gameoverCode.condition0IsTrue_2.val && gdjs.gameoverCode.condition1IsTrue_2.val;
}
if( gdjs.gameoverCode.condition0IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.gameoverCode.GDretryObjects3.length;j<jLen;++j) {
        if ( gdjs.gameoverCode.GDretryObjects2_1final.indexOf(gdjs.gameoverCode.GDretryObjects3[j]) === -1 )
            gdjs.gameoverCode.GDretryObjects2_1final.push(gdjs.gameoverCode.GDretryObjects3[j]);
    }
}
}
{
{gdjs.gameoverCode.conditionTrue_2 = gdjs.gameoverCode.condition1IsTrue_1;
gdjs.gameoverCode.condition0IsTrue_2.val = false;
gdjs.gameoverCode.condition1IsTrue_2.val = false;
{
gdjs.gameoverCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if ( gdjs.gameoverCode.condition0IsTrue_2.val ) {
{
gdjs.gameoverCode.condition1IsTrue_2.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}}
gdjs.gameoverCode.conditionTrue_2.val = true && gdjs.gameoverCode.condition0IsTrue_2.val && gdjs.gameoverCode.condition1IsTrue_2.val;
}
if( gdjs.gameoverCode.condition1IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
}
}
{
gdjs.gameoverCode.GDretryObjects2.createFrom(gdjs.gameoverCode.GDretryObjects2_1final);
}
}
}if ( gdjs.gameoverCode.condition0IsTrue_0.val ) {
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition1IsTrue_0;
gdjs.gameoverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7832092);
}
}}
if (gdjs.gameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


{
gdjs.gameoverCode.GDretryObjects1.createFrom(runtimeScene.getObjects("retry"));
{for(var i = 0, len = gdjs.gameoverCode.GDretryObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDretryObjects1[i].setLayer("");
}
}
{ //Subevents
gdjs.gameoverCode.eventsList0x798434(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.gameoverCode.eventsList0x7716bc
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDtitleObjects3Objects = Hashtable.newFrom({"title": gdjs.gameoverCode.GDtitleObjects3});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDtitleObjects1Objects = Hashtable.newFrom({"title": gdjs.gameoverCode.GDtitleObjects1});gdjs.gameoverCode.eventsList0x98ef34 = function(runtimeScene) {

{

/* Reuse gdjs.gameoverCode.GDtitleObjects1 */

gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDtitleObjects1Objects, runtimeScene, true, false);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameoverCode.GDtitleObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDtitleObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDtitleObjects1[i].setLayer("orange");
}
}}

}


}; //End of gdjs.gameoverCode.eventsList0x98ef34
gdjs.gameoverCode.eventsList0x6d1384 = function(runtimeScene) {

{

gdjs.gameoverCode.GDtitleObjects2.length = 0;


gdjs.gameoverCode.condition0IsTrue_0.val = false;
gdjs.gameoverCode.condition1IsTrue_0.val = false;
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition0IsTrue_0;
gdjs.gameoverCode.GDtitleObjects2_1final.length = 0;gdjs.gameoverCode.condition0IsTrue_1.val = false;
gdjs.gameoverCode.condition1IsTrue_1.val = false;
{
gdjs.gameoverCode.GDtitleObjects3.createFrom(runtimeScene.getObjects("title"));
{gdjs.gameoverCode.conditionTrue_2 = gdjs.gameoverCode.condition0IsTrue_1;
gdjs.gameoverCode.condition0IsTrue_2.val = false;
gdjs.gameoverCode.condition1IsTrue_2.val = false;
{
gdjs.gameoverCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDtitleObjects3Objects, runtimeScene, true, false);
}if ( gdjs.gameoverCode.condition0IsTrue_2.val ) {
{
gdjs.gameoverCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.gameoverCode.conditionTrue_2.val = true && gdjs.gameoverCode.condition0IsTrue_2.val && gdjs.gameoverCode.condition1IsTrue_2.val;
}
if( gdjs.gameoverCode.condition0IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.gameoverCode.GDtitleObjects3.length;j<jLen;++j) {
        if ( gdjs.gameoverCode.GDtitleObjects2_1final.indexOf(gdjs.gameoverCode.GDtitleObjects3[j]) === -1 )
            gdjs.gameoverCode.GDtitleObjects2_1final.push(gdjs.gameoverCode.GDtitleObjects3[j]);
    }
}
}
{
gdjs.gameoverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if( gdjs.gameoverCode.condition1IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
}
}
{
gdjs.gameoverCode.GDtitleObjects2.createFrom(gdjs.gameoverCode.GDtitleObjects2_1final);
}
}
}if ( gdjs.gameoverCode.condition0IsTrue_0.val ) {
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition1IsTrue_0;
gdjs.gameoverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10022412);
}
}}
if (gdjs.gameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title", false);
}}

}


{


{
gdjs.gameoverCode.GDtitleObjects1.createFrom(runtimeScene.getObjects("title"));
{for(var i = 0, len = gdjs.gameoverCode.GDtitleObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDtitleObjects1[i].setLayer("");
}
}
{ //Subevents
gdjs.gameoverCode.eventsList0x98ef34(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.gameoverCode.eventsList0x6d1384
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects2Objects = Hashtable.newFrom({"retry": gdjs.gameoverCode.GDretryObjects2});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDtitleObjects2Objects = Hashtable.newFrom({"title": gdjs.gameoverCode.GDtitleObjects2});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDoptionsObjects2Objects = Hashtable.newFrom({"options": gdjs.gameoverCode.GDoptionsObjects2});gdjs.gameoverCode.eventsList0x6d6cec = function(runtimeScene) {

{

gdjs.gameoverCode.GDoptionsObjects1.length = 0;

gdjs.gameoverCode.GDretryObjects1.length = 0;

gdjs.gameoverCode.GDtitleObjects1.length = 0;


gdjs.gameoverCode.condition0IsTrue_0.val = false;
gdjs.gameoverCode.condition1IsTrue_0.val = false;
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition0IsTrue_0;
gdjs.gameoverCode.GDoptionsObjects1_1final.length = 0;gdjs.gameoverCode.GDretryObjects1_1final.length = 0;gdjs.gameoverCode.GDtitleObjects1_1final.length = 0;gdjs.gameoverCode.condition0IsTrue_1.val = false;
gdjs.gameoverCode.condition1IsTrue_1.val = false;
gdjs.gameoverCode.condition2IsTrue_1.val = false;
{
gdjs.gameoverCode.GDretryObjects2.createFrom(runtimeScene.getObjects("retry"));
gdjs.gameoverCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects2Objects, runtimeScene, true, false);
if( gdjs.gameoverCode.condition0IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.gameoverCode.GDretryObjects2.length;j<jLen;++j) {
        if ( gdjs.gameoverCode.GDretryObjects1_1final.indexOf(gdjs.gameoverCode.GDretryObjects2[j]) === -1 )
            gdjs.gameoverCode.GDretryObjects1_1final.push(gdjs.gameoverCode.GDretryObjects2[j]);
    }
}
}
{
gdjs.gameoverCode.GDtitleObjects2.createFrom(runtimeScene.getObjects("title"));
gdjs.gameoverCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDtitleObjects2Objects, runtimeScene, true, false);
if( gdjs.gameoverCode.condition1IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.gameoverCode.GDtitleObjects2.length;j<jLen;++j) {
        if ( gdjs.gameoverCode.GDtitleObjects1_1final.indexOf(gdjs.gameoverCode.GDtitleObjects2[j]) === -1 )
            gdjs.gameoverCode.GDtitleObjects1_1final.push(gdjs.gameoverCode.GDtitleObjects2[j]);
    }
}
}
{
gdjs.gameoverCode.GDoptionsObjects2.createFrom(runtimeScene.getObjects("options"));
gdjs.gameoverCode.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDoptionsObjects2Objects, runtimeScene, true, false);
if( gdjs.gameoverCode.condition2IsTrue_1.val ) {
    gdjs.gameoverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.gameoverCode.GDoptionsObjects2.length;j<jLen;++j) {
        if ( gdjs.gameoverCode.GDoptionsObjects1_1final.indexOf(gdjs.gameoverCode.GDoptionsObjects2[j]) === -1 )
            gdjs.gameoverCode.GDoptionsObjects1_1final.push(gdjs.gameoverCode.GDoptionsObjects2[j]);
    }
}
}
{
gdjs.gameoverCode.GDoptionsObjects1.createFrom(gdjs.gameoverCode.GDoptionsObjects1_1final);
gdjs.gameoverCode.GDretryObjects1.createFrom(gdjs.gameoverCode.GDretryObjects1_1final);
gdjs.gameoverCode.GDtitleObjects1.createFrom(gdjs.gameoverCode.GDtitleObjects1_1final);
}
}
}if ( gdjs.gameoverCode.condition0IsTrue_0.val ) {
{
{gdjs.gameoverCode.conditionTrue_1 = gdjs.gameoverCode.condition1IsTrue_0;
gdjs.gameoverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7938596);
}
}}
if (gdjs.gameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\highlight.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, gdjs.randomFloatInRange(0.95, 1.05));
}}

}


}; //End of gdjs.gameoverCode.eventsList0x6d6cec
gdjs.gameoverCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\lose.wav", 2, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, gdjs.randomFloatInRange(0.95, 1.05));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


{
gdjs.gameoverCode.GDcombo2Objects1.createFrom(runtimeScene.getObjects("combo2"));
gdjs.gameoverCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));
gdjs.gameoverCode.GDheckedObjects1.createFrom(runtimeScene.getObjects("hecked"));
gdjs.gameoverCode.GDkills2Objects1.createFrom(runtimeScene.getObjects("kills2"));
gdjs.gameoverCode.GDscore2Objects1.createFrom(runtimeScene.getObjects("score2"));
gdjs.gameoverCode.GDtime2Objects1.createFrom(runtimeScene.getObjects("time2"));
{for(var i = 0, len = gdjs.gameoverCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDcursorObjects1[i].setZOrder(999);
}
}{for(var i = 0, len = gdjs.gameoverCode.GDscore2Objects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDscore2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDtime2Objects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDtime2Objects1[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) / 60)) + ":" + gdjs.evtTools.common.toString((Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)))) - ((Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) / 60)) * 60)));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDkills2Objects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDkills2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDcombo2Objects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDcombo2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDheckedObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDheckedObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameoverCode.eventsList0x845ad4(runtimeScene);} //End of subevents
}

}


{


gdjs.gameoverCode.eventsList0xa27244(runtimeScene);
}


{


gdjs.gameoverCode.eventsList0x7cc58c(runtimeScene);
}


{


gdjs.gameoverCode.eventsList0x7716bc(runtimeScene);
}


{


gdjs.gameoverCode.eventsList0x6d1384(runtimeScene);
}


{


gdjs.gameoverCode.eventsList0x6d6cec(runtimeScene);
}


}; //End of gdjs.gameoverCode.eventsList0x5b71c8


gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDoptionsObjects1.length = 0;
gdjs.gameoverCode.GDoptionsObjects2.length = 0;
gdjs.gameoverCode.GDoptionsObjects3.length = 0;
gdjs.gameoverCode.GDcursorObjects1.length = 0;
gdjs.gameoverCode.GDcursorObjects2.length = 0;
gdjs.gameoverCode.GDcursorObjects3.length = 0;
gdjs.gameoverCode.GDgameoverObjects1.length = 0;
gdjs.gameoverCode.GDgameoverObjects2.length = 0;
gdjs.gameoverCode.GDgameoverObjects3.length = 0;
gdjs.gameoverCode.GDscoreObjects1.length = 0;
gdjs.gameoverCode.GDscoreObjects2.length = 0;
gdjs.gameoverCode.GDscoreObjects3.length = 0;
gdjs.gameoverCode.GDscore2Objects1.length = 0;
gdjs.gameoverCode.GDscore2Objects2.length = 0;
gdjs.gameoverCode.GDscore2Objects3.length = 0;
gdjs.gameoverCode.GDtimeObjects1.length = 0;
gdjs.gameoverCode.GDtimeObjects2.length = 0;
gdjs.gameoverCode.GDtimeObjects3.length = 0;
gdjs.gameoverCode.GDtime2Objects1.length = 0;
gdjs.gameoverCode.GDtime2Objects2.length = 0;
gdjs.gameoverCode.GDtime2Objects3.length = 0;
gdjs.gameoverCode.GDcomboObjects1.length = 0;
gdjs.gameoverCode.GDcomboObjects2.length = 0;
gdjs.gameoverCode.GDcomboObjects3.length = 0;
gdjs.gameoverCode.GDcombo2Objects1.length = 0;
gdjs.gameoverCode.GDcombo2Objects2.length = 0;
gdjs.gameoverCode.GDcombo2Objects3.length = 0;
gdjs.gameoverCode.GDkillsObjects1.length = 0;
gdjs.gameoverCode.GDkillsObjects2.length = 0;
gdjs.gameoverCode.GDkillsObjects3.length = 0;
gdjs.gameoverCode.GDkills2Objects1.length = 0;
gdjs.gameoverCode.GDkills2Objects2.length = 0;
gdjs.gameoverCode.GDkills2Objects3.length = 0;
gdjs.gameoverCode.GDretryObjects1.length = 0;
gdjs.gameoverCode.GDretryObjects2.length = 0;
gdjs.gameoverCode.GDretryObjects3.length = 0;
gdjs.gameoverCode.GDtitleObjects1.length = 0;
gdjs.gameoverCode.GDtitleObjects2.length = 0;
gdjs.gameoverCode.GDtitleObjects3.length = 0;
gdjs.gameoverCode.GDheckedObjects1.length = 0;
gdjs.gameoverCode.GDheckedObjects2.length = 0;
gdjs.gameoverCode.GDheckedObjects3.length = 0;

gdjs.gameoverCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
