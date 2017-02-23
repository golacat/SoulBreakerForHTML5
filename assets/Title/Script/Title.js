cc.Class({
    extends: cc.Component,

    properties: {
        canvas: cc.Node,
        titleSprite: {
            default: null,
            type: cc.Sprite
        },
        titleLabel: {
            default: null,
            type: cc.Label
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
        
        // Title Label
        this.titleLabel.node.opacity = 0;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    onCallBackTitleScale: function() {
        cc.log("onCallBackTitleScale");
        this.titleLabel.node.opacity = 255;
        this.titleLabel.node.runAction(
            cc.sequence(
                cc.delayTime(1.0),
                cc.callFunc(this.onCallBackTouchImageBlink(), this)
            )
        );
    },
    
    onCallBackTouchImageBlink: function() {
        cc.log("onCallBackTouchImageBlink");
        this.titleLabel.node.runAction(
            cc.repeatForever(cc.blink(1.0, 1))
            );

        this.initTouchEvent();
    },

    initTouchEvent: function() {
        cc.log("initTouchEvent");

        this.canvas.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log("TOUCH_START");
        }, this.node);

        this.canvas.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            cc.log("TOUCH_MOVE");
        }, this.node);

        this.canvas.on(cc.Node.EventType.TOUCH_END, function (event) {
            cc.log("TOUCH_END");
        }, this.node);
    }
});
