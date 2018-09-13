function PlayersController(PlayersService) {
    var $ctrl = this;

    $ctrl.Name = "Players screen";
    $ctrl.Players = [];
    $ctrl.modalWindowVisible = false;

    $ctrl.PlayerName = 'new player';
    $ctrl.ModalWindowTitle = '';

    $ctrl.GetPlayers = function () {

        var playersPromise = PlayersService.GetPlayers();
        playersPromise.then(
            function (response) {
                $ctrl.Players = response.data;
            },
            function (error) {
                console.log('error: ' + response.ExceptionMessage);
            }
        );
    };

    $ctrl.ShowNewPlayerWindow = function () {

        $ctrl.ModalWindowTitle = 'Dodaj nowego gracza';
        $ctrl.modalWindowVisible = true;

        console.log($ctrl.modalWindowVisible);

        //$ctrl.ShowModalWindow();
    };

    //$ctrl.ShowModalWindow = function () {
    //    var element = angular.element('#exampleModal');
    //    console.log(element);
    //    element.modal('show');
    //};

    //$ctrl.HideModalWindow = function () {
    //    var element = angular.element('#exampleModal');
    //    console.log(element);
    //    element.modal('hide');
    //};

    $ctrl.AddPlayer = function () {

        //$ctrl.HideModalWindow();

        var promise = PlayersService.AddPlayer('Default name');
        promise.then(
            function (response) {
                $ctrl.GetPlayers();
            },
            function (response) {
                console.log('error: ' + response.data.Message);
                console.log(response);
            }
        );
    };

    $ctrl.DeletePlayer = function (id) {

        var promise = PlayersService.DeletePlayer(id);
        promise.then(
            function (response) {
                $ctrl.GetPlayers();
            },
            function (response) {
                console.log('error: ' + response.ExceptionMessage);
            }
        );
    };




    $ctrl.GetPlayers();
}