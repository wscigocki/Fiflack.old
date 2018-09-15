function ModalWindowController() {

    var $ctrl = this;


    $ctrl.$onInit = function () {
        $ctrl.visible = false;
        $ctrl.title = 'Dialog title';
        $ctrl.btnOkCaption = 'Ok';
        $ctrl.btnCancelCaption = 'Cancel';
        console.log($ctrl);
    };


}