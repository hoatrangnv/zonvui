var ResultTableTLMN = require('ResultTableTLMN');
var ResultTableSam = cc.Class({
    extends: ResultTableTLMN,

    initComponent: function (componentId, container) {
        ResultTableTLMN.prototype.initComponent.call(this, componentId, container);
    },

    applyLayout: function () {
        ResultTableTLMN.prototype.applyLayout.call(this);
    },

    initialize: function () {
        ResultTableTLMN.prototype.initialize.call(this);

    },

    //////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////override////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////

});

ResultTableSam.create = function (componentId, container) {
    var component = new ResultTableSam();
    component.initComponent(componentId, container);
    return component;
};

module.exports = ResultTableSam;