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

        _isMenu : false,
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
        this._isMenu = false;

        // Title Image Scale Action
        this.titleSprite.node.opacity = 0;
        this.titleSprite.node.scale = 1.0;
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
        cc.log("[Title] onCallBackTitleScale");
        this.titleLabel.node.opacity = 255;
        this.titleLabel.node.runAction(
            cc.sequence(
                cc.delayTime(1.0),
                cc.callFunc(this.onCallBackTouchImageBlink(), this)
            )
        );
    },
    
    onCallBackTouchImageBlink: function() {
        cc.log("[Title] onCallBackTouchImageBlink");
        this.titleLabel.node.runAction(
            cc.repeatForever(cc.blink(1.0, 1))
            );

        this.initTouchEvent();
    },

    initTouchEvent: function() {
        cc.log("[Title] initTouchEvent");
        cc.log("_isMenu is ", this._isMenu);

        this.canvas.on(cc.Node.EventType.TOUCH_START, event => {
            cc.log("[Title] TOUCH_START");
            // var touches = event.getTouches();
            // var touchLoc = touches[0].getLocation();            
        }, this);

        this.canvas.on(cc.Node.EventType.TOUCH_MOVE, event => {
            cc.log("[Title] TOUCH_MOVE");
            // var touches = event.getTouches();
            // var touchLoc = touches[0].getLocation();            
        }, this);

        this.canvas.on(cc.Node.EventType.TOUCH_END, event => {
            cc.log("[Title] TOUCH_END");
            // var touches = event.getTouches();
            // var touchLoc = touches[0].getLocation();
            this.onTouchEnd();
        }, this);
    },

    onTouchEnd: function() {
        cc.log("[Title] onTouchEnd");
        cc.log("_isMenu is ", this._isMenu);
        if (this._isMenu == false) {
            // TOUCH THE SCREEN -> MENU
            this.titleLabel.node.stopAllActions();
            this.titleLabel.node.runAction(
                cc.fadeOut(0.1),
                cc.callFunc(this.onCallBackTouchImageFadeOutEnd(), this)
            );
        } else {
        }
    },

    onCallBackTouchImageFadeOutEnd: function() {
        cc.log("onCallBackTouchImageFadeOutEnd");
    }
});
