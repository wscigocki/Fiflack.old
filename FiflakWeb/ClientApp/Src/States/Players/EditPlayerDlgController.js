function EditPlayerDlgController($uibModalInstance, dlgSetup ) {

    var $ctrl = this;
    $ctrl.title = '';
    $ctrl.playerName = '';
    $ctrl.playerEmail = '';

    if (dlgSetup.newPlayerMode) {
        $ctrl.title = 'Dodaj nowego gracza';
        $ctrl.playerName = '';
        $ctrl.playerEmail = '';
    }
    else {
        $ctrl.title = 'Edytuj dane gracza';
        $ctrl.playerName = dlgSetup.playerName;
        $ctrl.playerEmail = dlgSetup.playerEmail;
    }

    $ctrl.ok = function () {
        $uibModalInstance.close({
            name: $ctrl.playerName,
            email: $ctrl.playerEmail
        });
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}