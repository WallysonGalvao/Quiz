(function() {
    'use strict';
    /* jshint proto: true */

    // Injecting '$scope', '$controller' dependencys
    TestController.$inject = ['$scope', '$controller'];

    angular
        .controller('TestController', TestController);


    function TestController($scope, $controller) {

        var ctrl = this;

        // Created the BaseController instance
        ctrl.base = $controller('BaseController', {});

        /* =========================================================== */
        /* event handlers                                              */
        /* =========================================================== */

        // TODO: Criar documentação para a função
        $scope.createTest = function() {

            //_checkAnswers();

            /**
             * Passing the numbers (10, 60) as a parameter to the randomNumbers function of the BaseController
             * getting the result and adding to the variable aNumbers
             **/
            var aNumbers = ctrl.base.randomNumbers(10, 60);

            /**
             * Passing the aNumbers as a parameter to the setTest function of the BaseController
             * getting the result and adding to the variable aCurrentTest
             **/
            var aCurrentTeste = ctrl.base.setTest(aNumbers);

            // Call the printTest function by passing the aCurrentTeste as a parameter
            _printTest(aCurrentTeste);
        };

        // TODO: Criar documentação para a função
        $scope.checkTest = function() {
            var aChecked = [];
            var aAnswerMarked = [];

            for (var i = 0; i < $("#form>label>input").length; i++) {

                var bChecked = $("#form>label>input")[i].checked;

                if (bChecked) {
                    aAnswerMarked.push(i);
                    aChecked.push(bChecked);
                }

            }

            if (aChecked.length == this.answer.length) {
                for (var j = 0; j < aChecked.length; j++) {
                    if (aAnswerMarked[j] == this.answer[j]) {
                        document.getElementById("footerInit").hidden = false;
                        document.getElementById("footerCheck").hidden = true;
                        document.getElementById("buttonInit").innerText = 'Next';
                        document.getElementById("h1").style = 'color:green;';
                        document.getElementById("h1").innerText = 'You\'re Rigth!';

                        $("#myModal").modal();
                    } else {
                        document.getElementById("h1").style = 'color:red;';
                        document.getElementById("h1").innerText = 'You\'re Wrong !';

                        $("#myModal").modal();
                    }
                }
            } else {
                document.getElementById("h1").style = 'color:red;';
                document.getElementById("h1").innerText = 'Select at least one answer!';

                $("#myModal").modal();
            }
        };

        /* =========================================================== */
        /* begin: internal methods                                     */
        /* =========================================================== */

        /**
         * Function that bind the test in the View
         *
         * @param  {Array} aCurrentTeste   Mandatory parameter
         */
        var _printTest = function(aCurrentTeste) {

            $scope.tests = [];

            // If aCurrentTest is that greater of 0 (i.e, there is a object)
            if (aCurrentTeste.length > 0) {

                // Hideen the footer with the button Start label
                document.getElementById("footerInit").hidden = true;

                // Show the footer with the button Check label
                document.getElementById("footerCheck").hidden = false;

                // / Traverses the array aCurrentTeste binding the test in the View
                for (var i = 0; i < aCurrentTeste.length; i++) {


                    $scope.tests.push({
                        "questionId": aCurrentTeste[i].QuestionId,
                        "question": aCurrentTeste[i].Question,
                        "alternatives": aCurrentTeste[i].Alternatives
                    });

                    // Add aCurrentTeste[i].Question to the $scope.question
                    //$scope.question = aCurrentTeste[i].Question;

                    // Add aCurrentTeste[i].questionId to the $scope.questionId
                    //$scope.questionId = aCurrentTeste[i].QuestionId;

                    // Add aCurrentTeste[i].answer to the $scope.answer
                    $scope.answer = aCurrentTeste[i].Answer;

                    /**
                     * IF: The object has is a hint bind in the View
                     * ELSE: Hideen the hint text in the View
                     */
                    if (aCurrentTeste[i].Hint) {

                        // Add aCurrentTeste[i].Answer to the $scope.hint
                        $scope.hint = aCurrentTeste[i].Answer.length;

                        // Show the hint text in the View
                        //document.getElementById("hint").hidden = false;
                    } else {
                        // Hideen the hint text in the View
                        //document.getElementById("hint").hidden = true;
                    }

                    // Add aCurrentTeste[i].alternatives to the $scope.alternatives
                    //$scope.alternatives = aCurrentTeste[i].Alternatives;
                }
            }
        };

    }

})();
