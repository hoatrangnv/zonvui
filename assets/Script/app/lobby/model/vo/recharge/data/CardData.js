var BaseVO = require("BaseVO");

var puremvc = BaseVO.puremvc;

module.exports = puremvc.define
(
    // CLASS INFO
    {
        parent: BaseVO,
        constructor: function () {
            this.cardTelcoList = null;
            this.cardRateList = null;
        }
    },

    // INSTANCE MEMBERS
    {},
    // STATIC MEMBERS
    {}
);