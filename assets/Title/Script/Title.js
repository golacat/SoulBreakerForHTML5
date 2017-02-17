cc.Class({
    extends: cc.Component,

    properties: {
        titleSprite: {
            default: null,
            type: cc.Sprite
        },
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        cc.log("[Title] onLoad.");

        // Title Image Scale Action
        this.titleSprite.node.opacity = 0;
        this.titleSprite.node.runAction(
            cc.sequence(
                cc.spawn(
                    cc.scaleTo(3.0, 0.5),
                    cc.fadeIn(3.0)
                ),
                cc.callFunc(this.onCallBackTitleScale, this)
            )
        );
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    onCallBackTitleScale: function() {
        cc.log("onCallBackTitleScale");
    },
});
