cc.Class({
    extends: cc.Component,

    properties: {
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
        seletedNode: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        cc.log("[TitleMenu] onLoad");
        this.onTouchEvent();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    // on touch event
    onTouchEvent: function() {
        cc.log("[TitleMenu] onTouchEvent");

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    },

    // off touch event
    offTouchEvent: function() {
        cc.log("[TitleMenu] offTouchEvent");
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    },    

    // touch end event
    onTouchEnd: function(event) {
        cc.log("[TitleMenu] onTouchEnd");

        // test
        // this.seletedNode.y = -300;
        // cc.log(event.getDeltaX());
        // cc.log(event.getDeltaY());
        // var touches = event.getTouches();
        // var touchLoc = touches[0].getLocation();        
    },    
});
