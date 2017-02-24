cc.Class({
    extends: cc.Component,

    properties: {
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
        cc.log("[CircleCreate] onLoad.");

        // Make Background Circle - 50
        this.MakeTitleCircle(50);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    // instantiate prefab, random position
    MakeTitleCircle: function (num) {
        cc.log("MakeTitleCircle " + num)
        for (var i=0; i < num; i++) {
            // instance prefab
            var circle = cc.instantiate(this.circlePrefab);
            
            // random position x: -240 ~ 240,  y: 500 ~ -500
            circle.x = (Math.random()*2 - 1) * 240;
            circle.y = (Math.random()*2 - 1) * 500;
            // cc.log(circle.position)
            
            this.MakeCircleRandom(circle);

            //circle.parent = circleNode;
            this.node.addChild(circle);
        }        
    },
    
    // random scale, color and moveTo action
    MakeCircleRandom: function (circle) {
        // random scale 0.1 ~ 0.6
        circle.scale = Math.random() * 0.5 + 0.1;
        //cc.log(circle.scale)

        // 3 type color
        var temp = Math.round(Math.random() * 2);            
        //cc.log(temp);
        switch (temp) {
            case 0: circle.color = new cc.color(255, 251, 118); break;
            case 1: circle.color = new cc.color(166, 255,253); break;
            case 2: circle.color = new cc.color(244, 140, 203); break;
        }
        
        var time = (circle.position.y + 500) / 20.0;
        
        circle.runAction(cc.sequence(
                cc.moveTo(time, cc.p(circle.position.x, -500)),
                cc.callFunc(this.onCallBackCircleMove, this, circle)
            ));
    },

    onCallBackCircleMove: function(circle) {
        // cc.log("onCallBackCircleMove");
        
        circle.x = (Math.random()*2 - 1) * 240;
        circle.y = 500;
        
        this.MakeCircleRandom(circle);
    },
});
