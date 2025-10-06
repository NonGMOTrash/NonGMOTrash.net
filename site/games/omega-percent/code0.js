gdjs.titleCode = {};
gdjs.titleCode.GDcursorObjects2_1final = [];

gdjs.titleCode.GDoptionsObjects1_1final = [];

gdjs.titleCode.GDoptionsObjects2_1final = [];

gdjs.titleCode.GDstartObjects1_1final = [];

gdjs.titleCode.GDstartObjects2_2final = [];

gdjs.titleCode.GDoptionsObjects1= [];
gdjs.titleCode.GDoptionsObjects2= [];
gdjs.titleCode.GDoptionsObjects3= [];
gdjs.titleCode.GDcursorObjects1= [];
gdjs.titleCode.GDcursorObjects2= [];
gdjs.titleCode.GDcursorObjects3= [];
gdjs.titleCode.GDiconObjects1= [];
gdjs.titleCode.GDiconObjects2= [];
gdjs.titleCode.GDiconObjects3= [];
gdjs.titleCode.GDtitleObjects1= [];
gdjs.titleCode.GDtitleObjects2= [];
gdjs.titleCode.GDtitleObjects3= [];
gdjs.titleCode.GDversionObjects1= [];
gdjs.titleCode.GDversionObjects2= [];
gdjs.titleCode.GDversionObjects3= [];
gdjs.titleCode.GDstartObjects1= [];
gdjs.titleCode.GDstartObjects2= [];
gdjs.titleCode.GDstartObjects3= [];

gdjs.titleCode.conditionTrue_0 = {val:false};
gdjs.titleCode.condition0IsTrue_0 = {val:false};
gdjs.titleCode.condition1IsTrue_0 = {val:false};
gdjs.titleCode.condition2IsTrue_0 = {val:false};
gdjs.titleCode.conditionTrue_1 = {val:false};
gdjs.titleCode.condition0IsTrue_1 = {val:false};
gdjs.titleCode.condition1IsTrue_1 = {val:false};
gdjs.titleCode.condition2IsTrue_1 = {val:false};
gdjs.titleCode.conditionTrue_2 = {val:false};
gdjs.titleCode.condition0IsTrue_2 = {val:false};
gdjs.titleCode.condition1IsTrue_2 = {val:false};
gdjs.titleCode.condition2IsTrue_2 = {val:false};
gdjs.titleCode.conditionTrue_3 = {val:false};
gdjs.titleCode.condition0IsTrue_3 = {val:false};
gdjs.titleCode.condition1IsTrue_3 = {val:false};
gdjs.titleCode.condition2IsTrue_3 = {val:false};


gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDoptionsObjects2Objects = Hashtable.newFrom({"options": gdjs.titleCode.GDoptionsObjects2});gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDstartObjects2Objects = Hashtable.newFrom({"start": gdjs.titleCode.GDstartObjects2});gdjs.titleCode.eventsList0x7cc89c = function(runtimeScene) {

{

gdjs.titleCode.GDoptionsObjects1.length = 0;

gdjs.titleCode.GDstartObjects1.length = 0;


gdjs.titleCode.condition0IsTrue_0.val = false;
gdjs.titleCode.condition1IsTrue_0.val = false;
{
{gdjs.titleCode.conditionTrue_1 = gdjs.titleCode.condition0IsTrue_0;
gdjs.titleCode.GDoptionsObjects1_1final.length = 0;gdjs.titleCode.GDstartObjects1_1final.length = 0;gdjs.titleCode.condition0IsTrue_1.val = false;
gdjs.titleCode.condition1IsTrue_1.val = false;
{
gdjs.titleCode.GDoptionsObjects2.createFrom(runtimeScene.getObjects("options"));
gdjs.titleCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDoptionsObjects2Objects, runtimeScene, true, false);
if( gdjs.titleCode.condition0IsTrue_1.val ) {
    gdjs.titleCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.titleCode.GDoptionsObjects2.length;j<jLen;++j) {
        if ( gdjs.titleCode.GDoptionsObjects1_1final.indexOf(gdjs.titleCode.GDoptionsObjects2[j]) === -1 )
            gdjs.titleCode.GDoptionsObjects1_1final.push(gdjs.titleCode.GDoptionsObjects2[j]);
    }
}
}
{
gdjs.titleCode.GDstartObjects2.createFrom(runtimeScene.getObjects("start"));
gdjs.titleCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDstartObjects2Objects, runtimeScene, true, false);
if( gdjs.titleCode.condition1IsTrue_1.val ) {
    gdjs.titleCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.titleCode.GDstartObjects2.length;j<jLen;++j) {
        if ( gdjs.titleCode.GDstartObjects1_1final.indexOf(gdjs.titleCode.GDstartObjects2[j]) === -1 )
            gdjs.titleCode.GDstartObjects1_1final.push(gdjs.titleCode.GDstartObjects2[j]);
    }
}
}
{
gdjs.titleCode.GDoptionsObjects1.createFrom(gdjs.titleCode.GDoptionsObjects1_1final);
gdjs.titleCode.GDstartObjects1.createFrom(gdjs.titleCode.GDstartObjects1_1final);
}
}
}if ( gdjs.titleCode.condition0IsTrue_0.val ) {
{
{gdjs.titleCode.conditionTrue_1 = gdjs.titleCode.condition1IsTrue_0;
gdjs.titleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8176908);
}
}}
if (gdjs.titleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\highlight.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, gdjs.randomFloatInRange(0.95, 1.05));
}}

}


}; //End of gdjs.titleCode.eventsList0x7cc89c
gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDoptionsObjects3Objects = Hashtable.newFrom({"options": gdjs.titleCode.GDoptionsObjects3});gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDoptionsObjects1Objects = Hashtable.newFrom({"options": gdjs.titleCode.GDoptionsObjects1});gdjs.titleCode.eventsList0x7cc714 = function(runtimeScene) {

{

gdjs.titleCode.GDoptionsObjects2.length = 0;


gdjs.titleCode.condition0IsTrue_0.val = false;
gdjs.titleCode.condition1IsTrue_0.val = false;
{
{gdjs.titleCode.conditionTrue_1 = gdjs.titleCode.condition0IsTrue_0;
gdjs.titleCode.GDoptionsObjects2_1final.length = 0;gdjs.titleCode.condition0IsTrue_1.val = false;
gdjs.titleCode.condition1IsTrue_1.val = false;
{
gdjs.titleCode.GDoptionsObjects3.createFrom(runtimeScene.getObjects("options"));
{gdjs.titleCode.conditionTrue_2 = gdjs.titleCode.condition0IsTrue_1;
gdjs.titleCode.condition0IsTrue_2.val = false;
gdjs.titleCode.condition1IsTrue_2.val = false;
{
gdjs.titleCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDoptionsObjects3Objects, runtimeScene, true, false);
}if ( gdjs.titleCode.condition0IsTrue_2.val ) {
{
gdjs.titleCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.titleCode.conditionTrue_2.val = true && gdjs.titleCode.condition0IsTrue_2.val && gdjs.titleCode.condition1IsTrue_2.val;
}
if( gdjs.titleCode.condition0IsTrue_1.val ) {
    gdjs.titleCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.titleCode.GDoptionsObjects3.length;j<jLen;++j) {
        if ( gdjs.titleCode.GDoptionsObjects2_1final.indexOf(gdjs.titleCode.GDoptionsObjects3[j]) === -1 )
            gdjs.titleCode.GDoptionsObjects2_1final.push(gdjs.titleCode.GDoptionsObjects3[j]);
    }
}
}
{
gdjs.titleCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
if( gdjs.titleCode.condition1IsTrue_1.val ) {
    gdjs.titleCode.conditionTrue_1.val = true;
}
}
{
gdjs.titleCode.GDoptionsObjects2.createFrom(gdjs.titleCode.GDoptionsObjects2_1final);
}
}
}if ( gdjs.titleCode.condition0IsTrue_0.val ) {
{
{gdjs.titleCode.conditionTrue_1 = gdjs.titleCode.condition1IsTrue_0;
gdjs.titleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7964068);
}
}}
if (gdjs.titleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "options");
}}

}


{


{
gdjs.titleCode.GDoptionsObjects2.createFrom(runtimeScene.getObjects("options"));
{for(var i = 0, len = gdjs.titleCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDoptionsObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.titleCode.GDoptionsObjects1.createFrom(runtimeScene.getObjects("options"));

gdjs.titleCode.condition0IsTrue_0.val = false;
{
gdjs.titleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDoptionsObjects1Objects, runtimeScene, true, false);
}if (gdjs.titleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.titleCode.GDoptionsObjects1 */
{for(var i = 0, len = gdjs.titleCode.GDoptionsObjects1.length ;i < len;++i) {
    gdjs.titleCode.GDoptionsObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.titleCode.eventsList0x7cc714
gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDstartObjects3Objects = Hashtable.newFrom({"start": gdjs.titleCode.GDstartObjects3});gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.titleCode.GDstartObjects1});gdjs.titleCode.eventsList0x98effc = function(runtimeScene) {

{

/* Reuse gdjs.titleCode.GDstartObjects1 */

gdjs.titleCode.condition0IsTrue_0.val = false;
{
gdjs.titleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if (gdjs.titleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.titleCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.titleCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.titleCode.GDstartObjects1[i].setLayer("orange");
}
}{for(var i = 0, len = gdjs.titleCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.titleCode.GDstartObjects1[i].setZOrder(0);
}
}}

}


}; //End of gdjs.titleCode.eventsList0x98effc
gdjs.titleCode.eventsList0x6d138c = function(runtimeScene) {

{

gdjs.titleCode.GDstartObjects2.length = 0;


gdjs.titleCode.condition0IsTrue_0.val = false;
{
{gdjs.titleCode.conditionTrue_1 = gdjs.titleCode.condition0IsTrue_0;
gdjs.titleCode.condition0IsTrue_1.val = false;
gdjs.titleCode.condition1IsTrue_1.val = false;
{
{gdjs.titleCode.conditionTrue_2 = gdjs.titleCode.condition0IsTrue_1;
gdjs.titleCode.GDstartObjects2_2final.length = 0;gdjs.titleCode.condition0IsTrue_2.val = false;
gdjs.titleCode.condition1IsTrue_2.val = false;
{
gdjs.titleCode.GDstartObjects3.createFrom(runtimeScene.getObjects("start"));
{gdjs.titleCode.conditionTrue_3 = gdjs.titleCode.condition0IsTrue_2;
gdjs.titleCode.condition0IsTrue_3.val = false;
gdjs.titleCode.condition1IsTrue_3.val = false;
{
gdjs.titleCode.condition0IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDstartObjects3Objects, runtimeScene, true, false);
}if ( gdjs.titleCode.condition0IsTrue_3.val ) {
{
gdjs.titleCode.condition1IsTrue_3.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.titleCode.conditionTrue_3.val = true && gdjs.titleCode.condition0IsTrue_3.val && gdjs.titleCode.condition1IsTrue_3.val;
}
if( gdjs.titleCode.condition0IsTrue_2.val ) {
    gdjs.titleCode.conditionTrue_2.val = true;
    for(var j = 0, jLen = gdjs.titleCode.GDstartObjects3.length;j<jLen;++j) {
        if ( gdjs.titleCode.GDstartObjects2_2final.indexOf(gdjs.titleCode.GDstartObjects3[j]) === -1 )
            gdjs.titleCode.GDstartObjects2_2final.push(gdjs.titleCode.GDstartObjects3[j]);
    }
}
}
{
gdjs.titleCode.condition1IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.titleCode.condition1IsTrue_2.val ) {
    gdjs.titleCode.conditionTrue_2.val = true;
}
}
{
gdjs.titleCode.GDstartObjects2.createFrom(gdjs.titleCode.GDstartObjects2_2final);
}
}
}if ( gdjs.titleCode.condition0IsTrue_1.val ) {
{
gdjs.titleCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}}
gdjs.titleCode.conditionTrue_1.val = true && gdjs.titleCode.condition0IsTrue_1.val && gdjs.titleCode.condition1IsTrue_1.val;
}
}if (gdjs.titleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


{
gdjs.titleCode.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));
{for(var i = 0, len = gdjs.titleCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.titleCode.GDstartObjects1[i].setLayer("white");
}
}
{ //Subevents
gdjs.titleCode.eventsList0x98effc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.titleCode.eventsList0x6d138c
gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDcursorObjects3Objects = Hashtable.newFrom({"cursor": gdjs.titleCode.GDcursorObjects3});gdjs.titleCode.eventsList0x7920bc = function(runtimeScene) {

{


{
gdjs.titleCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1);
}{for(var i = 0, len = gdjs.titleCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects2[i].setZOrder(999);
}
}{for(var i = 0, len = gdjs.titleCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects2[i].setLayer("cursor");
}
}}

}


{

gdjs.titleCode.GDcursorObjects2.length = 0;


gdjs.titleCode.condition0IsTrue_0.val = false;
{
{gdjs.titleCode.conditionTrue_1 = gdjs.titleCode.condition0IsTrue_0;
gdjs.titleCode.GDcursorObjects2_1final.length = 0;gdjs.titleCode.condition0IsTrue_1.val = false;
gdjs.titleCode.condition1IsTrue_1.val = false;
{
gdjs.titleCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.titleCode.condition0IsTrue_1.val ) {
    gdjs.titleCode.conditionTrue_1.val = true;
}
}
{
gdjs.titleCode.GDcursorObjects3.createFrom(runtimeScene.getObjects("cursor"));
gdjs.titleCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.titleCode.mapOfGDgdjs_46titleCode_46GDcursorObjects3Objects, runtimeScene, true, true);
if( gdjs.titleCode.condition1IsTrue_1.val ) {
    gdjs.titleCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.titleCode.GDcursorObjects3.length;j<jLen;++j) {
        if ( gdjs.titleCode.GDcursorObjects2_1final.indexOf(gdjs.titleCode.GDcursorObjects3[j]) === -1 )
            gdjs.titleCode.GDcursorObjects2_1final.push(gdjs.titleCode.GDcursorObjects3[j]);
    }
}
}
{
gdjs.titleCode.GDcursorObjects2.createFrom(gdjs.titleCode.GDcursorObjects2_1final);
}
}
}if (gdjs.titleCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(200);
}}

}


{


gdjs.titleCode.condition0IsTrue_0.val = false;
{
gdjs.titleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
}if (gdjs.titleCode.condition0IsTrue_0.val) {
gdjs.titleCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.titleCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects2[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "switchs", 0));
}
}{for(var i = 0, len = gdjs.titleCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects2[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "switchs", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.titleCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects2[i].hide(false);
}
}}

}


{


gdjs.titleCode.condition0IsTrue_0.val = false;
{
gdjs.titleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == -(1);
}if (gdjs.titleCode.condition0IsTrue_0.val) {
gdjs.titleCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.titleCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects2[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "switchs", 0));
}
}{for(var i = 0, len = gdjs.titleCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects2[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "switchs", 0));
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.titleCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects2[i].hide();
}
}}

}


{


gdjs.titleCode.condition0IsTrue_0.val = false;
{
gdjs.titleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) <= 0;
}if (gdjs.titleCode.condition0IsTrue_0.val) {
gdjs.titleCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.titleCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.titleCode.GDcursorObjects1[i].hide();
}
}}

}


}; //End of gdjs.titleCode.eventsList0x7920bc
gdjs.titleCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.titleCode.condition0IsTrue_0.val = false;
{
gdjs.titleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.titleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, 1);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


gdjs.titleCode.condition0IsTrue_0.val = false;
{
gdjs.titleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}if (gdjs.titleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, 1);
}}

}


{


gdjs.titleCode.eventsList0x7cc89c(runtimeScene);
}


{


gdjs.titleCode.eventsList0x7cc714(runtimeScene);
}


{


gdjs.titleCode.eventsList0x6d138c(runtimeScene);
}


{


gdjs.titleCode.eventsList0x7920bc(runtimeScene);
}


}; //End of gdjs.titleCode.eventsList0x5b71c8


gdjs.titleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.titleCode.GDoptionsObjects1.length = 0;
gdjs.titleCode.GDoptionsObjects2.length = 0;
gdjs.titleCode.GDoptionsObjects3.length = 0;
gdjs.titleCode.GDcursorObjects1.length = 0;
gdjs.titleCode.GDcursorObjects2.length = 0;
gdjs.titleCode.GDcursorObjects3.length = 0;
gdjs.titleCode.GDiconObjects1.length = 0;
gdjs.titleCode.GDiconObjects2.length = 0;
gdjs.titleCode.GDiconObjects3.length = 0;
gdjs.titleCode.GDtitleObjects1.length = 0;
gdjs.titleCode.GDtitleObjects2.length = 0;
gdjs.titleCode.GDtitleObjects3.length = 0;
gdjs.titleCode.GDversionObjects1.length = 0;
gdjs.titleCode.GDversionObjects2.length = 0;
gdjs.titleCode.GDversionObjects3.length = 0;
gdjs.titleCode.GDstartObjects1.length = 0;
gdjs.titleCode.GDstartObjects2.length = 0;
gdjs.titleCode.GDstartObjects3.length = 0;

gdjs.titleCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['titleCode'] = gdjs.titleCode;
