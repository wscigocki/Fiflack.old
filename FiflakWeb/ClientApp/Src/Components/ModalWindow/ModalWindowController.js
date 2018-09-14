function ModalWindowController() {

    var $ctrl = this;


    $ctrl.$onInit = function () {
        $ctrl.visible = false;
        $ctrl.title = 'Dialog title';
        $ctrl.btnOkCaption = 'Ok';
        $ctrl.btnCancelCaption = 'Cancel';
        console.log($ctrl);
    };

    //$ctrl.doCheck = function () {

    //    console.log('doCheck: ' + $ctrl.visible);

    //    if ($ctrl.visible === true) {
    //        $ctrl.ShowModalWindow();
    //    } else {
    //        $ctrl.HideModalWindow();
    //    };
    //}

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
}