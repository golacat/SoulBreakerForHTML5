var SB_Constants = require('SB_Constants');

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
        selectedNode: {
            default: null,
            type: cc.Node
        },

        _menuNum: SB_Constants.eMenuType.START,
    },

    // use this for initialization
    onLoad: function () {
        cc.log("[TitleMenu] onLoad");
        // this.onTouchEvent();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    // callback start btn
    onClickStartBtn: function () {
        cc.log("[TitleMenu] onClickStartBtn");
        this.selectedNode.y = 0;

        if (this._menuNum == SB_Constants.eMenuType.START)
        {
            cc.log("[TitleMenu] change scene to character select");
        }
        else
        {
            this._menuNum = SB_Constants.eMenuType.START;
        }
    },
    
    // callback credit btn
    onClickCreditBtn: function () {
        cc.log("[TitleMenu] onClickCreditBtn");
        this.selectedNode.y = -60

        if (this._menuNum == SB_Constants.eMenuType.CREDIT)
        {
            cc.log("[TitleMenu] change scene to credit");
        }
        else
        {
            this._menuNum = SB_Constants.eMenuType.CREDIT;
        }        
    },
    
    // callback exit btn
    onClickExitBtn: function () {
        cc.log("[TitleMenu] onClickExitBtn");
        this.selectedNode.y = -120;

        if (this._menuNum == SB_Constants.eMenuType.EXIT)
        {
            cc.log("[TitleMenu] change scene to exit");
        }
        else
        {
            this._menuNum = SB_Constants.eMenuType.EXIT;
        }        
    }
});
