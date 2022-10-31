gdjs.optionsCode = {};
gdjs.optionsCode.GDExitObjects1_1final = [];

gdjs.optionsCode.GDcursorObjects2_1final = [];

gdjs.optionsCode.GDminusObjects1_1final = [];

gdjs.optionsCode.GDplusObjects1_1final = [];

gdjs.optionsCode.GDoptionsObjects1= [];
gdjs.optionsCode.GDoptionsObjects2= [];
gdjs.optionsCode.GDoptionsObjects3= [];
gdjs.optionsCode.GDcursorObjects1= [];
gdjs.optionsCode.GDcursorObjects2= [];
gdjs.optionsCode.GDcursorObjects3= [];
gdjs.optionsCode.GDheaderObjects1= [];
gdjs.optionsCode.GDheaderObjects2= [];
gdjs.optionsCode.GDheaderObjects3= [];
gdjs.optionsCode.GDparticlesObjects1= [];
gdjs.optionsCode.GDparticlesObjects2= [];
gdjs.optionsCode.GDparticlesObjects3= [];
gdjs.optionsCode.GDparticlesSwitchObjects1= [];
gdjs.optionsCode.GDparticlesSwitchObjects2= [];
gdjs.optionsCode.GDparticlesSwitchObjects3= [];
gdjs.optionsCode.GDtheCursorObjects1= [];
gdjs.optionsCode.GDtheCursorObjects2= [];
gdjs.optionsCode.GDtheCursorObjects3= [];
gdjs.optionsCode.GDcursorSwitchObjects1= [];
gdjs.optionsCode.GDcursorSwitchObjects2= [];
gdjs.optionsCode.GDcursorSwitchObjects3= [];
gdjs.optionsCode.GDfullscreenObjects1= [];
gdjs.optionsCode.GDfullscreenObjects2= [];
gdjs.optionsCode.GDfullscreenObjects3= [];
gdjs.optionsCode.GDfullscreenSwitchObjects1= [];
gdjs.optionsCode.GDfullscreenSwitchObjects2= [];
gdjs.optionsCode.GDfullscreenSwitchObjects3= [];
gdjs.optionsCode.GDheckModeObjects1= [];
gdjs.optionsCode.GDheckModeObjects2= [];
gdjs.optionsCode.GDheckModeObjects3= [];
gdjs.optionsCode.GDheckSwitchObjects1= [];
gdjs.optionsCode.GDheckSwitchObjects2= [];
gdjs.optionsCode.GDheckSwitchObjects3= [];
gdjs.optionsCode.GDvolumeObjects1= [];
gdjs.optionsCode.GDvolumeObjects2= [];
gdjs.optionsCode.GDvolumeObjects3= [];
gdjs.optionsCode.GDvolume2Objects1= [];
gdjs.optionsCode.GDvolume2Objects2= [];
gdjs.optionsCode.GDvolume2Objects3= [];
gdjs.optionsCode.GDplusObjects1= [];
gdjs.optionsCode.GDplusObjects2= [];
gdjs.optionsCode.GDplusObjects3= [];
gdjs.optionsCode.GDminusObjects1= [];
gdjs.optionsCode.GDminusObjects2= [];
gdjs.optionsCode.GDminusObjects3= [];
gdjs.optionsCode.GDExitObjects1= [];
gdjs.optionsCode.GDExitObjects2= [];
gdjs.optionsCode.GDExitObjects3= [];

gdjs.optionsCode.conditionTrue_0 = {val:false};
gdjs.optionsCode.condition0IsTrue_0 = {val:false};
gdjs.optionsCode.condition1IsTrue_0 = {val:false};
gdjs.optionsCode.condition2IsTrue_0 = {val:false};
gdjs.optionsCode.condition3IsTrue_0 = {val:false};
gdjs.optionsCode.conditionTrue_1 = {val:false};
gdjs.optionsCode.condition0IsTrue_1 = {val:false};
gdjs.optionsCode.condition1IsTrue_1 = {val:false};
gdjs.optionsCode.condition2IsTrue_1 = {val:false};
gdjs.optionsCode.condition3IsTrue_1 = {val:false};


gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.optionsCode.GDExitObjects1});gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDExitObjects2Objects = Hashtable.newFrom({"Exit": gdjs.optionsCode.GDExitObjects2});gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDplusObjects2Objects = Hashtable.newFrom({"plus": gdjs.optionsCode.GDplusObjects2});gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDminusObjects2Objects = Hashtable.newFrom({"minus": gdjs.optionsCode.GDminusObjects2});gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.optionsCode.GDExitObjects1});gdjs.optionsCode.eventsList0x77371c = function(runtimeScene) {

{

/* Reuse gdjs.optionsCode.GDExitObjects1 */

gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.optionsCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.optionsCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.optionsCode.GDExitObjects1[i].setLayer("orange");
}
}}

}


}; //End of gdjs.optionsCode.eventsList0x77371c
gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDparticlesSwitchObjects1Objects = Hashtable.newFrom({"particlesSwitch": gdjs.optionsCode.GDparticlesSwitchObjects1});gdjs.optionsCode.eventsList0x7e1984 = function(runtimeScene) {

{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDparticlesSwitchObjects2.createFrom(runtimeScene.getObjects("particlesSwitch"));
{for(var i = 0, len = gdjs.optionsCode.GDparticlesSwitchObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDparticlesSwitchObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == -(1);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDparticlesSwitchObjects2.createFrom(runtimeScene.getObjects("particlesSwitch"));
{for(var i = 0, len = gdjs.optionsCode.GDparticlesSwitchObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDparticlesSwitchObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.optionsCode.GDparticlesSwitchObjects1.createFrom(runtimeScene.getObjects("particlesSwitch"));

gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
{
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDparticlesSwitchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.optionsCode.condition0IsTrue_1.val ) {
{
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.optionsCode.conditionTrue_1.val = true && gdjs.optionsCode.condition0IsTrue_1.val && gdjs.optionsCode.condition1IsTrue_1.val;
}
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9268780);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).mul(-(1));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, 1);
}}

}


}; //End of gdjs.optionsCode.eventsList0x7e1984
gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDcursorSwitchObjects1Objects = Hashtable.newFrom({"cursorSwitch": gdjs.optionsCode.GDcursorSwitchObjects1});gdjs.optionsCode.eventsList0x8d7924 = function(runtimeScene) {

{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDcursorSwitchObjects2.createFrom(runtimeScene.getObjects("cursorSwitch"));
{for(var i = 0, len = gdjs.optionsCode.GDcursorSwitchObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorSwitchObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == -(1);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDcursorSwitchObjects2.createFrom(runtimeScene.getObjects("cursorSwitch"));
{for(var i = 0, len = gdjs.optionsCode.GDcursorSwitchObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorSwitchObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.optionsCode.GDcursorSwitchObjects1.createFrom(runtimeScene.getObjects("cursorSwitch"));

gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
{
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDcursorSwitchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.optionsCode.condition0IsTrue_1.val ) {
{
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.optionsCode.conditionTrue_1.val = true && gdjs.optionsCode.condition0IsTrue_1.val && gdjs.optionsCode.condition1IsTrue_1.val;
}
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7804604);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).mul(-(1));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, 1);
}}

}


}; //End of gdjs.optionsCode.eventsList0x8d7924
gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDfullscreenSwitchObjects1Objects = Hashtable.newFrom({"fullscreenSwitch": gdjs.optionsCode.GDfullscreenSwitchObjects1});gdjs.optionsCode.eventsList0x7cc7cc = function(runtimeScene) {

{


gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7831964);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == -(1);
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10022708);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


}; //End of gdjs.optionsCode.eventsList0x7cc7cc
gdjs.optionsCode.eventsList0x7cc9bc = function(runtimeScene) {

{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDfullscreenSwitchObjects2.createFrom(runtimeScene.getObjects("fullscreenSwitch"));
{for(var i = 0, len = gdjs.optionsCode.GDfullscreenSwitchObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDfullscreenSwitchObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == -(1);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDfullscreenSwitchObjects2.createFrom(runtimeScene.getObjects("fullscreenSwitch"));
{for(var i = 0, len = gdjs.optionsCode.GDfullscreenSwitchObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDfullscreenSwitchObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.optionsCode.GDfullscreenSwitchObjects1.createFrom(runtimeScene.getObjects("fullscreenSwitch"));

gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
{
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDfullscreenSwitchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.optionsCode.condition0IsTrue_1.val ) {
{
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.optionsCode.conditionTrue_1.val = true && gdjs.optionsCode.condition0IsTrue_1.val && gdjs.optionsCode.condition1IsTrue_1.val;
}
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7963908);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).mul(-(1));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, 1);
}
{ //Subevents
gdjs.optionsCode.eventsList0x7cc7cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.optionsCode.eventsList0x7cc9bc
gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDheckSwitchObjects1Objects = Hashtable.newFrom({"heckSwitch": gdjs.optionsCode.GDheckSwitchObjects1});gdjs.optionsCode.eventsList0x6d133c = function(runtimeScene) {

{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == 1;
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDheckSwitchObjects2.createFrom(runtimeScene.getObjects("heckSwitch"));
{for(var i = 0, len = gdjs.optionsCode.GDheckSwitchObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDheckSwitchObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == -(1);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDheckSwitchObjects2.createFrom(runtimeScene.getObjects("heckSwitch"));
{for(var i = 0, len = gdjs.optionsCode.GDheckSwitchObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDheckSwitchObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.optionsCode.GDheckSwitchObjects1.createFrom(runtimeScene.getObjects("heckSwitch"));

gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
{
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDheckSwitchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.optionsCode.condition0IsTrue_1.val ) {
{
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.optionsCode.conditionTrue_1.val = true && gdjs.optionsCode.condition0IsTrue_1.val && gdjs.optionsCode.condition1IsTrue_1.val;
}
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7171044);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).mul(-(1));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, 1);
}}

}


}; //End of gdjs.optionsCode.eventsList0x6d133c
gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDcursorObjects3Objects = Hashtable.newFrom({"cursor": gdjs.optionsCode.GDcursorObjects3});gdjs.optionsCode.eventsList0x791a74 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1);
}}

}


{

gdjs.optionsCode.GDcursorObjects2.length = 0;


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.GDcursorObjects2_1final.length = 0;gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
{
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.optionsCode.condition0IsTrue_1.val ) {
    gdjs.optionsCode.conditionTrue_1.val = true;
}
}
{
gdjs.optionsCode.GDcursorObjects3.createFrom(runtimeScene.getObjects("cursor"));
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDcursorObjects3Objects, runtimeScene, true, true);
if( gdjs.optionsCode.condition1IsTrue_1.val ) {
    gdjs.optionsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.optionsCode.GDcursorObjects3.length;j<jLen;++j) {
        if ( gdjs.optionsCode.GDcursorObjects2_1final.indexOf(gdjs.optionsCode.GDcursorObjects3[j]) === -1 )
            gdjs.optionsCode.GDcursorObjects2_1final.push(gdjs.optionsCode.GDcursorObjects3[j]);
    }
}
}
{
gdjs.optionsCode.GDcursorObjects2.createFrom(gdjs.optionsCode.GDcursorObjects2_1final);
}
}
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(200);
}}

}


{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.optionsCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorObjects2[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "switchs", 0));
}
}{for(var i = 0, len = gdjs.optionsCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorObjects2[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "switchs", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.optionsCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorObjects2[i].hide(false);
}
}}

}


{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == -(1);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.optionsCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorObjects2[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "switchs", 0));
}
}{for(var i = 0, len = gdjs.optionsCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorObjects2[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "switchs", 0));
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.optionsCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorObjects2[i].hide();
}
}}

}


{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) <= 0;
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.optionsCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.optionsCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorObjects1[i].hide();
}
}}

}


}; //End of gdjs.optionsCode.eventsList0x791a74
gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDplusObjects2Objects = Hashtable.newFrom({"plus": gdjs.optionsCode.GDplusObjects2});gdjs.optionsCode.eventsList0x8e0ea4 = function(runtimeScene) {

{

/* Reuse gdjs.optionsCode.GDplusObjects2 */

gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDplusObjects2Objects, runtimeScene, true, false);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.optionsCode.GDplusObjects2 */
{for(var i = 0, len = gdjs.optionsCode.GDplusObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDplusObjects2[i].setLayer("orange");
}
}}

}


}; //End of gdjs.optionsCode.eventsList0x8e0ea4
gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDminusObjects2Objects = Hashtable.newFrom({"minus": gdjs.optionsCode.GDminusObjects2});gdjs.optionsCode.eventsList0x6d76ac = function(runtimeScene) {

{

/* Reuse gdjs.optionsCode.GDminusObjects2 */

gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDminusObjects2Objects, runtimeScene, true, false);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.optionsCode.GDminusObjects2 */
{for(var i = 0, len = gdjs.optionsCode.GDminusObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDminusObjects2[i].setLayer("orange");
}
}}

}


}; //End of gdjs.optionsCode.eventsList0x6d76ac
gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDplusObjects2Objects = Hashtable.newFrom({"plus": gdjs.optionsCode.GDplusObjects2});gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDminusObjects1Objects = Hashtable.newFrom({"minus": gdjs.optionsCode.GDminusObjects1});gdjs.optionsCode.eventsList0x8e0dd4 = function(runtimeScene) {

{


{
gdjs.optionsCode.GDplusObjects2.createFrom(runtimeScene.getObjects("plus"));
{for(var i = 0, len = gdjs.optionsCode.GDplusObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDplusObjects2[i].setLayer("");
}
}
{ //Subevents
gdjs.optionsCode.eventsList0x8e0ea4(runtimeScene);} //End of subevents
}

}


{


{
gdjs.optionsCode.GDminusObjects2.createFrom(runtimeScene.getObjects("minus"));
{for(var i = 0, len = gdjs.optionsCode.GDminusObjects2.length ;i < len;++i) {
    gdjs.optionsCode.GDminusObjects2[i].setLayer("");
}
}
{ //Subevents
gdjs.optionsCode.eventsList0x6d76ac(runtimeScene);} //End of subevents
}

}


{


{
gdjs.optionsCode.GDvolume2Objects2.createFrom(runtimeScene.getObjects("volume2"));
{for(var i = 0, len = gdjs.optionsCode.GDvolume2Objects2.length ;i < len;++i) {
    gdjs.optionsCode.GDvolume2Objects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.sound.getGlobalVolume(runtimeScene)) + "%");
}
}}

}


{

gdjs.optionsCode.GDplusObjects2.createFrom(runtimeScene.getObjects("plus"));

gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
{
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDplusObjects2Objects, runtimeScene, true, false);
}if ( gdjs.optionsCode.condition0IsTrue_1.val ) {
{
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.optionsCode.conditionTrue_1.val = true && gdjs.optionsCode.condition0IsTrue_1.val && gdjs.optionsCode.condition1IsTrue_1.val;
}
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8165732);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (5));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 1, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 1, 1);
}}

}


{

gdjs.optionsCode.GDminusObjects1.createFrom(runtimeScene.getObjects("minus"));

gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
{
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDminusObjects1Objects, runtimeScene, true, false);
}if ( gdjs.optionsCode.condition0IsTrue_1.val ) {
{
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.optionsCode.conditionTrue_1.val = true && gdjs.optionsCode.condition0IsTrue_1.val && gdjs.optionsCode.condition1IsTrue_1.val;
}
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7833292);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) - (5));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 1, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 1, 1);
}}

}


}; //End of gdjs.optionsCode.eventsList0x8e0dd4
gdjs.optionsCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\click.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, 1);
}}

}


{

gdjs.optionsCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));

gdjs.optionsCode.condition0IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
{
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.optionsCode.condition0IsTrue_1.val ) {
{
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.optionsCode.conditionTrue_1.val = true && gdjs.optionsCode.condition0IsTrue_1.val && gdjs.optionsCode.condition1IsTrue_1.val;
}
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.optionsCode.GDExitObjects1.length = 0;

gdjs.optionsCode.GDminusObjects1.length = 0;

gdjs.optionsCode.GDplusObjects1.length = 0;


gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition0IsTrue_0;
gdjs.optionsCode.GDExitObjects1_1final.length = 0;gdjs.optionsCode.GDminusObjects1_1final.length = 0;gdjs.optionsCode.GDplusObjects1_1final.length = 0;gdjs.optionsCode.condition0IsTrue_1.val = false;
gdjs.optionsCode.condition1IsTrue_1.val = false;
gdjs.optionsCode.condition2IsTrue_1.val = false;
{
gdjs.optionsCode.GDExitObjects2.createFrom(runtimeScene.getObjects("Exit"));
gdjs.optionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDExitObjects2Objects, runtimeScene, true, false);
if( gdjs.optionsCode.condition0IsTrue_1.val ) {
    gdjs.optionsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.optionsCode.GDExitObjects2.length;j<jLen;++j) {
        if ( gdjs.optionsCode.GDExitObjects1_1final.indexOf(gdjs.optionsCode.GDExitObjects2[j]) === -1 )
            gdjs.optionsCode.GDExitObjects1_1final.push(gdjs.optionsCode.GDExitObjects2[j]);
    }
}
}
{
gdjs.optionsCode.GDplusObjects2.createFrom(runtimeScene.getObjects("plus"));
gdjs.optionsCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDplusObjects2Objects, runtimeScene, true, false);
if( gdjs.optionsCode.condition1IsTrue_1.val ) {
    gdjs.optionsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.optionsCode.GDplusObjects2.length;j<jLen;++j) {
        if ( gdjs.optionsCode.GDplusObjects1_1final.indexOf(gdjs.optionsCode.GDplusObjects2[j]) === -1 )
            gdjs.optionsCode.GDplusObjects1_1final.push(gdjs.optionsCode.GDplusObjects2[j]);
    }
}
}
{
gdjs.optionsCode.GDminusObjects2.createFrom(runtimeScene.getObjects("minus"));
gdjs.optionsCode.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.optionsCode.mapOfGDgdjs_46optionsCode_46GDminusObjects2Objects, runtimeScene, true, false);
if( gdjs.optionsCode.condition2IsTrue_1.val ) {
    gdjs.optionsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.optionsCode.GDminusObjects2.length;j<jLen;++j) {
        if ( gdjs.optionsCode.GDminusObjects1_1final.indexOf(gdjs.optionsCode.GDminusObjects2[j]) === -1 )
            gdjs.optionsCode.GDminusObjects1_1final.push(gdjs.optionsCode.GDminusObjects2[j]);
    }
}
}
{
gdjs.optionsCode.GDExitObjects1.createFrom(gdjs.optionsCode.GDExitObjects1_1final);
gdjs.optionsCode.GDminusObjects1.createFrom(gdjs.optionsCode.GDminusObjects1_1final);
gdjs.optionsCode.GDplusObjects1.createFrom(gdjs.optionsCode.GDplusObjects1_1final);
}
}
}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
{gdjs.optionsCode.conditionTrue_1 = gdjs.optionsCode.condition1IsTrue_0;
gdjs.optionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8674012);
}
}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bleeps\\highlight.wav", 0, false, 50, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 1, gdjs.randomInRange(0.95, 1.05));
}}

}


{


{
gdjs.optionsCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.optionsCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.optionsCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.optionsCode.GDcursorObjects1[i].setZOrder(999);
}
}{for(var i = 0, len = gdjs.optionsCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.optionsCode.GDExitObjects1[i].setLayer("");
}
}
{ //Subevents
gdjs.optionsCode.eventsList0x77371c(runtimeScene);} //End of subevents
}

}


{


gdjs.optionsCode.eventsList0x7e1984(runtimeScene);
}


{


gdjs.optionsCode.eventsList0x8d7924(runtimeScene);
}


{


gdjs.optionsCode.eventsList0x7cc9bc(runtimeScene);
}


{


gdjs.optionsCode.eventsList0x6d133c(runtimeScene);
}


{


gdjs.optionsCode.eventsList0x791a74(runtimeScene);
}


{


gdjs.optionsCode.eventsList0x8e0dd4(runtimeScene);
}


}; //End of gdjs.optionsCode.eventsList0x5b71c8


gdjs.optionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.optionsCode.GDoptionsObjects1.length = 0;
gdjs.optionsCode.GDoptionsObjects2.length = 0;
gdjs.optionsCode.GDoptionsObjects3.length = 0;
gdjs.optionsCode.GDcursorObjects1.length = 0;
gdjs.optionsCode.GDcursorObjects2.length = 0;
gdjs.optionsCode.GDcursorObjects3.length = 0;
gdjs.optionsCode.GDheaderObjects1.length = 0;
gdjs.optionsCode.GDheaderObjects2.length = 0;
gdjs.optionsCode.GDheaderObjects3.length = 0;
gdjs.optionsCode.GDparticlesObjects1.length = 0;
gdjs.optionsCode.GDparticlesObjects2.length = 0;
gdjs.optionsCode.GDparticlesObjects3.length = 0;
gdjs.optionsCode.GDparticlesSwitchObjects1.length = 0;
gdjs.optionsCode.GDparticlesSwitchObjects2.length = 0;
gdjs.optionsCode.GDparticlesSwitchObjects3.length = 0;
gdjs.optionsCode.GDtheCursorObjects1.length = 0;
gdjs.optionsCode.GDtheCursorObjects2.length = 0;
gdjs.optionsCode.GDtheCursorObjects3.length = 0;
gdjs.optionsCode.GDcursorSwitchObjects1.length = 0;
gdjs.optionsCode.GDcursorSwitchObjects2.length = 0;
gdjs.optionsCode.GDcursorSwitchObjects3.length = 0;
gdjs.optionsCode.GDfullscreenObjects1.length = 0;
gdjs.optionsCode.GDfullscreenObjects2.length = 0;
gdjs.optionsCode.GDfullscreenObjects3.length = 0;
gdjs.optionsCode.GDfullscreenSwitchObjects1.length = 0;
gdjs.optionsCode.GDfullscreenSwitchObjects2.length = 0;
gdjs.optionsCode.GDfullscreenSwitchObjects3.length = 0;
gdjs.optionsCode.GDheckModeObjects1.length = 0;
gdjs.optionsCode.GDheckModeObjects2.length = 0;
gdjs.optionsCode.GDheckModeObjects3.length = 0;
gdjs.optionsCode.GDheckSwitchObjects1.length = 0;
gdjs.optionsCode.GDheckSwitchObjects2.length = 0;
gdjs.optionsCode.GDheckSwitchObjects3.length = 0;
gdjs.optionsCode.GDvolumeObjects1.length = 0;
gdjs.optionsCode.GDvolumeObjects2.length = 0;
gdjs.optionsCode.GDvolumeObjects3.length = 0;
gdjs.optionsCode.GDvolume2Objects1.length = 0;
gdjs.optionsCode.GDvolume2Objects2.length = 0;
gdjs.optionsCode.GDvolume2Objects3.length = 0;
gdjs.optionsCode.GDplusObjects1.length = 0;
gdjs.optionsCode.GDplusObjects2.length = 0;
gdjs.optionsCode.GDplusObjects3.length = 0;
gdjs.optionsCode.GDminusObjects1.length = 0;
gdjs.optionsCode.GDminusObjects2.length = 0;
gdjs.optionsCode.GDminusObjects3.length = 0;
gdjs.optionsCode.GDExitObjects1.length = 0;
gdjs.optionsCode.GDExitObjects2.length = 0;
gdjs.optionsCode.GDExitObjects3.length = 0;

gdjs.optionsCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['optionsCode'] = gdjs.optionsCode;
