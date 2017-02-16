cc.Class({
    extends: cc.Component,

    properties: {
        titleSprite: {
            default: null,
            type: cc.Sprite
        },
        circlePrefab: {
            default: null,
            type: cc.Prefab
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

        // Make Background Circle - 50
        this.MakeTitleCircle(50);

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

    MakeTitleCircle: function (num) {
        cc.log("MakeTitleCircle " + num)
        for (var i=0; i < num; i++) {
            var circle = cc.instantiate(this.circlePrefab);

            var temp = Math.round(Math.random() * 3);            
            switch (temp) {
                case 0: circle.color = new cc.color(255, 251, 118); break;
                case 1: circle.color = new cc.color(166, 255,253); break;
                case 2: circle.color = new cc.color(244, 140, 203); break;
            }
            
            circle.x = 0;
            circle.y = 0;

            this.node.addChild(circle);

        }        
    }
});
