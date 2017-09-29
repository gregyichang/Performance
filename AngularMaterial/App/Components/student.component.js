(function (app) {
    "use strict";

    app.component("student",
    {
        templateUrl: "App/Components/student.component.html",
        bindings: {
            stValue: '='
        },
        controller: [studentController],
        controllerAs: "$ctrl"
    });

    function studentController() {
        var vm = this;

        vm.isViewing = "No";

        vm.stateList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
        'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        vm.setCurrentStudent = function(isCurrent) {
            vm.isViewing = isCurrent? "Yes": "No";
        }

        vm.$onInit = function () {
            
        };

    }

})(angular.module("memApp"));