function PlayersService($q, $http) {
    var service = this;

    //service.GetPlayers = function () {
    //    var deferred = $q.defer();

    //    var result = [
    //        { id:1, Name: 'Waldek'},
    //        { id: 2, Name: 'Dominik' },
    //        { id: 3, Name: 'Adi' }
    //    ];

    //    deferred.resolve(result)

    //    return deferred.promise;
    //};

    service.GetPlayers = function () {
        return $http({

            url: '/api/players'
        });
    }

    service.GetPlayer = function (id) {
        return $http({
            method: 'GET',
            url: '/api/players',
            params: { id: id }
        });
    }

    service.DeletePlayer = function (id) {
        return $http({
            method: 'DELETE',
            url: '/api/players',
            params: {id: id}
        });
    }

    service.AddPlayer = function (newPlayer) {

        console.log('newPlayer', newPlayer);
        var player = {
            Id: -1,
            Name: newPlayer.name,
            Email: newPlayer.email
        };

        console.log('player', player);


        return $http({
            method: 'POST',
            url: '/api/players',
            data: player
        });
    }

    service.UpdatePlayer = function (playerId, updatedPlayer) {

        var player = {
            Id: playerId,
            Name: updatedPlayer.name,
            Email: updatedPlayer.email
        };

        return $http({
            method: 'PUT',
            url: '/api/players',
            params: { id: playerId },
            data: player
        });
    }
}