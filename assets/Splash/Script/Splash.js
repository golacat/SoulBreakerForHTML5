cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
    },

    // use this for initialization
    onLoad: function () {
        cc.log("[Splash] onLoad.");
        this.label.node.opacity = 0;        
        this.label.node.runAction(
            cc.sequence(
                cc.fadeIn(0.5),
                cc.delayTime(3.0),
                cc.fadeOut(0.5),
                cc.callFunc(this.CallBack, this)
                )
            );
    },

    // called every frame
    update: function (dt) {

    },

    // slash animation end
    CallBack: function () {
        cc.log("[Splash] CallBack");
    }
});
