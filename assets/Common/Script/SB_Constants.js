var SB_Constants = cc.Class({
    extends: cc.Component,
    properties: {
        
    },
    statics: {
        MAIN_WIDTH: 480,
        MAIN_HEIGHT: 800,

        TITLE_CIRCLE_YELLOW: cc.color(255, 251, 118),
        TITLE_CIRCLE_BLUE: cc.color(166, 255, 253),
        TITLE_CIRCLE_VIOLET: cc.color(244, 140, 203),
        TITLE_TEXT_COLOR: cc.color(255, 135, 150),

        eMenuType: cc.Enum({
            START: 1,
            CREDIT: 2,
            EXIT: 3,
        }),

        eChrSelType: cc.Enum({
            CHRSEL_MADOKA: 1,
            CHRSEL_HOMURA: 2,
            CHRSEL_SAYAKA: 3,
            CHRSEL_MAMI: 4,
            CHRSEL_KYOKO: 5,
            CHRSEL_BACK: 6,
        }),
    },
});

module.exports = SB_Constants;