(function (app) {
    "use strict";

    app.controller('studentDetail', ["$uibModalInstance", "student", studentDetailControler]);

    function studentDetailControler($uibModalInstance, student) {
        var vm = this;
        vm.student = student;

        vm.ok = function () {
            $uibModalInstance.close(vm.student);
        };

        vm.stateList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
        'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

})(angular.module("memApp"));