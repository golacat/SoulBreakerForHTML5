cc.Class({
    extends: cc.Component,

    properties: {
        // node for touch event
        canvas: cc.Node,
        // soulbreaker title sprite
        titleSprite: {
            default: null,
            type: cc.Sprite
        },
        // touch the screen label
        titleLabel: {
            default: null,
            type: cc.Label
        },

        // is menu for touch the screen
        _isMenu : false,
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

    // CallBack Title Image Scaled
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
    
    // CallBack Title Label Blink
    onCallBackTouchImageBlink: function() {
        cc.log("[Title] onCallBackTouchImageBlink");
        this.titleLabel.node.runAction(
            cc.repeatForever(cc.blink(1.0, 1))
            );

        this.initTouchEvent();
    },

    // init touch event
    initTouchEvent: function() {
        cc.log("[Title] initTouchEvent");

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

    // touch end event
    onTouchEnd: function() {
        cc.log("[Title] onTouchEnd");
        cc.log("[Title] _isMenu is ", this._isMenu);
        if (this._isMenu == false) {
            // TOUCH THE SCREEN -> MENU
            this.titleLabel.node.stopAllActions();
            this.titleLabel.node.runAction(
                cc.fadeOut(0.1),
                cc.callFunc(this.onCallBackTouchLabelFadeOutEnd(), this)
            );
        } else {
        }
    },

    // call back title label fadeout
    onCallBackTouchLabelFadeOutEnd: function() {
        cc.log("[Title] onCallBackTouchLabelFadeOutEnd");
        this.node.removeChild(this.titleLabel);
        this.setMenu();
    },

    setMenu: function() {
        cc.log("[Title] setMenu");
    }
});
