var TableBinhVO = require('TableBinhVO');
cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrameType: [cc.SpriteFrame],
        spriteFrameSpecial: [cc.SpriteFrame]
    },
    statics: {
        IDX_BI_SAP_HAM:14,
        IDX_BAT_SAP_HAM:15,
        IDX_BI_SAP_LANG:16,
        IDX_BAT_SAP_LANG:17,
        IDX_BINH_LUNG:18
    },


    // use this for initialization
    onLoad: function () {

    },

    setEmptyState: function () {
        var sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = new cc.SpriteFrame();
    },

    showTypeCards: function (type) {
        if (type >= 0) this.showStatusCards(type);
        else this.showSpecialCards(type);
    },

    showStatusCards: function (type) {
        var spriteFrame = this.spriteFrameType[type];
        if (!spriteFrame) {
            cc.warn("[StatusPlaceControl] has not spriteFame " + type);
            return;
        }

        var sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        TweenLite.from(this.node, 0.3, {scaleX: 0});
    },

    showSpecialCards: function (type) {
        var spriteFrame = this.spriteFrameSpecial[Math.abs(type)];
        if (!spriteFrame) {
            cc.warn("[StatusPlaceControl] has not spriteFame " + type);
            return;
        }

        var sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        this.node.scaleX = this.node.scaleY = 1;
        TweenLite.from(this.node, 0.3, {scaleX: 0, scaleY: 0});
    }

});
