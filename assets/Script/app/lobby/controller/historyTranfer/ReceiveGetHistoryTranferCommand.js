var BaseCommand = require('BaseCommand');
var LobbyMessage = require('LobbyMessage');
export default class ReceiveGetHistoryTranferCommand extends BaseCommand {
    execute(notification) {
        BaseCommand.prototype.execute.call(this, notification);
        var params = notification.getBody();
        this.sendNotification(LobbyMessage.ON_UPDATE_HISTORY_TRANFER, params.data);
    }
}
