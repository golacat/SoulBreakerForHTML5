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

    MakeTitleCircle: function (num) {
        cc.log("MakeTitleCircle " + num)
        for (var i=0; i < num; i++) {
            // instance prefab
            var circle = cc.instantiate(this.circlePrefab);
            
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
            
            // random position x: -240 ~ 240,  y: -400 ~ 400
            circle.x = (Math.random()*2 - 1) * 240;
            circle.y = (Math.random()*2 - 1) * 400;
            cc.log(circle.position)

            //circle.parent = circleNode;
            this.node.addChild(circle);
        }        
    }
});
