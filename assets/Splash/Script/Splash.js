var SB_Constants = require('SB_Constants');

cc.Class({
    extends: cc.Component,

    properties: {
        splashLabel: {
            default: null,
            type: cc.Label
        },
    },

    // use this for initialization
    onLoad: function () {
        cc.log("[Splash] onLoad.");
        this.splashLabel.node.opacity = 0;        
        this.splashLabel.node.runAction(
            cc.sequence(
                cc.fadeIn(0.5),
                cc.delayTime(3.0),
                cc.fadeOut(0.5),
                cc.callFunc(this.CallBack, this)
                )
            );
    },

    // called every frame
    // update: function (dt) {

    // },

    // slash animation end
    CallBack: function () {
        cc.log("[Splash] CallBack");

        cc.director.loadScene('Title', this.onLoadSceneFinish);
    },

    // Load Title Scene Finish. (Called After Title Scene OnLoad)
    onLoadSceneFinish: function () {
        cc.log("[Splash] onLoadSceneFinish");
    }

});
