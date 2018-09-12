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

    service.DeletePlayer = function (id) {
        return $http({
            method: 'DELETE',
            url: '/api/players',
            params: {id: id}
        });
    }

    service.AddPlayer = function (name) {

        var player = {
            Id: -1,
            Name: name,
            Email: 'qqqqq'
        };

        console.log(player);


        return $http({
            method: 'POST',
            url: '/api/players',
            data: player
        });
    }
}