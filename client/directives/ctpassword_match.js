// Inspired by http://rogeralsing.com/2013/08/26/angularjs-directive-to-check-that-passwords-match-followup/
(function() {
    angular
        .module('app')
        .directive('ctPasswordMatch', [function () {
        return {
            restrict: 'A',
            scope:true,
            require: 'ngModel',
            link: function (scope, elem , attrs,control) {
                console.log(attrs);
                var checker = function () {

                    //get the value of the first password
                    var e1 = scope.$eval(attrs.ngModel);

                    //get the value of the other password
                    var e2 = scope.$eval(attrs.ctPasswordMatch);
                    return e1 == e2;
                };
                scope.$watch(checker, function (n) {

                    //set the form control to valid if both
                    //passwords are the same, else invalid
                    control.$setValidity("pwMatch", n);
                });
            }
        };
    }]);
})();