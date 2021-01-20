var SFSEvent = {
    CLOSE_CONNECTION: 'closeConnection',
    CONNECT_SUCCESS: 'connectSuccess',
    PLUGIN_NOT_FOUND: 'pluginNotFound',
    CONNECT_FAIL: 'connectFail',
    LOGIN_SUCCESS: 'loginSuccess',
    LOGIN_FAIL: 'loginFail',
    JOIN_LOBBY_ROOM_SUCCESS: 'joinLobbyRoomSuccess',
    UPDATE_USER_LIST: 'updateUserList',
    UPDATE_USER_LIST_OF_LOBBY: 'updateUserListOfLobby',
    UPDATE_ROOM_LIST: 'updateRoomList',
    JOIN_GAME_ROOM_SUCCESS: 'joinGameRoomSuccess',
    GET_FIRST_PLAYER: 'getFirstPlayer',
    GET_USER_INFO: 'getUserInfo',
    GET_CURRENT_PLAYER: 'getCurrentPlayer',
    JOIN_GAME_ROOM_FAIL: 'joinGameRoomFail',
    GAME_ROOM_INVALID: 'gameRoomInvalid',
    HAVE_USER_JOIN_ROOM: 'haveUserJoinRoom',
    HAVE_USER_OUT_ROOM: 'haveUserOutRoom',
    READY_SUCCESS: 'readySuccess',
    START_GAME_SUCCESS: 'startGameSuccess',
    PUBLIC_CHAT: 'publicChat',
    ROOM_MASTER_KICK: 'roomMasterKick',
    TIME_OUT: 'timeOut',
    HACKING: 'hacking',
    HAVE_INVITE_PLAY: 'haveInvitePlay',
    INVITE_ADD_FRIEND: 'inviteAddFriend',
    CONFIRM_FRIEND_REQUEST: 'confirmFriendRequest',
    SORT_FINISH: 'sortFinish',
    COMPARE_GROUP: 'compareGroup',
    WHITE_WIN: 'whiteWin',
    DICE: 'dice',
    UPDATE_MONEY: 'updateMoney',
    UPDATE_MONEY_SPECIAL: 'updateMoney_special',
    CONFIRM_ADD_FRIEND: 'confirmAddFriend',
    FRIEND_CONFIRM_ADD_FRIEND_INVITE: 'friendConfirmAddFriendInvite',

    REQUEST_TIME_CLOCK: 'requestTimeClock',
    RESPOND_TIME_CLOCK: 'respondTimeClock',
    REQUEST_IS_COMPARE_GROUP: 'requestIsCompareGroup',
    RESPOND_IS_COMPARE_GROUP: 'respondIsCompareGroup',
    COMPARE_GROUP_COMPLETE: 'compareGroupComplete',
    GET_CARD_SUCCESS: 'getCardSuccess',
    STEAL_CARD: 'stealCard',
    TRANSFER: 'transferCard',
    LAYING_DONE: 'layingDone',// ha bai
    LAYING_CARD: 'layingCard',//gui bai
    SEND_ADD_FRIEND_SUCCESS: 'sendAddFriendSuccess',
    HAVE_USER_GET_CARD: 'haveUserGetCard',
    HAVE_USER_DOWN_CARD: 'haveUserDownCard',
    HAVE_USER_DOWN_CARD_FINISH: 'haveUserDownCardFinish',
    HAVE_USER_SEND_CARD_FINISH: 'haveUserSendCardFinish',
    HAVE_USER_SEND_CARD: 'haveUserDownSend',
    GAME_OVER: 'gameOver',
    LIST_BEFORE_START: 'resetNewGame',
    DEAL_CARD: 'dealCard',
    HAVE_USER_DISCARD: 'haveUserDiscard',
    ERROR: 'error',
    NEXTTURN: 'nextturn',
    UPDATE_ALL_INFO_LOBBY: 'updateAllInfoLobby',
    SIT_DOWN:'sit',
    BET:'bet',
    SPIN:'spin',
    UPDATE_ROOM_MASTER: "updateRoomMaster",
    SEND_CARD: "sendCard",
    SEND_CARD_FINISH: "sendCardFinish",
    DRAW_CARD: "drawCard",
    CARD_RESPONSE: "cardResponse",

    COUNT_DOWN:'countdown',
    USER_JOIN_ROOM:'userEnter',
    USER_LEAVE_GAME:'userLeaveGame',
    JOIN_ROOM:'joinRoom',
    QUICK_JOIN:'quickJoin',
    SAM:'sam',

    START_GAME:'startGame',
    UPDATE_CURRENT_TURN:'updateCurrentTurn',
    GET_PLAYING_INFO:'getPlayingInfo',
    USER_ENTER_ROOM:'userEnterRoom',
    UPDATE_GAME_ROOM_DATA:'UPDATE_GAME_ROOM_DATA',
    //mini game
    GET_MONEY: 'get_money',

    HEART_BEAT:'heartBeat',
    NEXT_TURN:'nextTurn',
    END_ROUND:'endRound',
    DISCARD:'discard',
    START_GAME_1:'orderHand',

    GET_ROOM_LIST:'getRoomList',
    UPDATE_USER_INFO:'UPDATE_USER_INFO',

    START_BETTING:'startBetting',
    STOP_BETTING:'stopBetting',
    DICE_RESULT:'showResult',
    SOLD_OUT:'soldOut',
    BUY_ROOM_MASTER:'buyRoomMaster',
    CANCEL_BET:'cancelBet',
    SOLD: 'sold',
    SOLD_BET:'soldBet',

    REFRESH_MONEY:'refreshMoney',
    FULL_LAYING_CARDS:'fullLayingCards',
    ADD_ROOM:'addRoom',
    REMOVE_ROOM:'removeRoom',
    USER_JOIN_MINIGAME:'userJoinMinigame',
    SUBMIT_HAND:'submitHand',

    //GET_PLAYING_INFO_MINIGAME: 'getPlayingInfo',
    UPDATE_BOARD_BET: 'updateBoardBet',
    UPDATE_GAME_STATE: 'updateGameState',
    REPAY: 'repay',
    CHANGE_MONEY_TYPE: 'changeMoneyType',
    GET_INFO: 'getInfo',

    UPDATE_POT: "updatePot",
    UPDATE_ROOM: "updateRoom",
    RESULT_SPIN: "resultSpin",
    SEND_SPIN: "spin",
    CHANGE_ROOM: "updateRoom",
    USER_DISCONNECT: "userDisconnect",
    GET_USER_HISTORY: "getUserHistory",
    GET_DETAIL_SESSION: "detailSession",
    GET_RANK: "getDailyTopWin",
    GET_TOP: "getTop",
    GET_HISTORY: "getHistory",
    REGISTER_QUIT:'registerQuit',
    CANCEL_REGISTER_QUIT:'cancelQuit',
    CREATE_ROOM:'createRoom',
    ERROR:'error'

};

module.exports = SFSEvent;