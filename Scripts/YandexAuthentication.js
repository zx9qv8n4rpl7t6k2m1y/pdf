function Auth() {

    initPlayer().then(_player => {
        if (_player.getMode() === 'lite')  // Игрок не авторизован в яндексе.
        {

        }
        else
        {
            AuthenticationSuccess();
        }
    }).catch(err =>
    {
        console.error("Ошибка при инициализации объекта Player 2\n"+ err);
        // Ошибка при инициализации объекта Player.
    });
}


function initPlayer() {
    return sdk.getPlayer().then(_player => {
        player = _player;
        return player;
    });
}


function AuthenticationSuccess() {

    let playerData = {
        UniqueID: player.getUniqueID(),
        Name: player.getName(),
        PhotoUrlSmall: player.getPhoto('small'),
        PhotoUrlMedium: player.getPhoto('medium'),
        PhotoUrlLarge: player.getPhoto('large'),
    }

    MyGameInstance.SendMessage('YandexAuthentication', 'AuthenticationSuccess', JSON.stringify(playerData));
}
