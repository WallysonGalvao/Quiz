(function() {
    'use strict';

    angular
        .controller('BaseController', BaseController);

    function BaseController() {

        /**
         * Function that pick up the questions according to the numbers drawn
         *
         * @example
         *   example(3); // {
         *                    QuestionId: "3",
         *                    Question: "What do you need to update when migrate and SAP Bu…ion option (DMO) of the software upgrade manager?",
         *                    Answer: Array(2),
         *                    Hint: true,
         *                    Alternatives: Array(4)
         *                  }
         *
         * @param   {Integer} nameKey   Mandatory parameter
         * @param   {Array} myArray   Mandatory parameter
         * @returns {Array} myArray[i]
         */
        var getQuestionsIntoArray = function(nameKey, myArray) {

            // Traverses the array myArray checking if the passed value exists in the array
            for (var i = 0; i < myArray.length; i++) {

                // If the value exists turn back the value
                if (myArray[i].QuestionId == nameKey) {
                    return myArray[i];
                }
            }
        };

        /**
         * Function that generates an array of objects that is bind in the view
         *
         * @example
         *   example(3); // {
         *                    QuestionId: "3",
         *                    Question: "What do you need to update when migrate and SAP Bu…ion option (DMO) of the software upgrade manager?",
         *                    Answer: Array(2),
         *                    Hint: true,
         *                    Alternatives: Array(4)
         *                  }
         *
         * @param   {Array} aNumbers   Mandatory parameter
         * @returns {Function} printTest(Object)
         */

        this.setTest = function(aNumbers) {
            // Declare and initialize the variable aCurrentTest as an empty array
            var aCurrentTest = [];

            // Traverses the array aNumbers by taking the results of the getQuestionsIntoArray method and inserting into aCurrentTest
            for (var i = 0; i < aNumbers.length; i++) {

                // Pick up the return of getQuestionsIntoArray method and add into variable oQuestionsIntoArray
                var oQuestionsIntoArray = getQuestionsIntoArray(aNumbers[i], oJson);

                // If oQuestionsIntoArray is different of undefined (i. e, there is a question) add into aCurrentTest
                if (oQuestionsIntoArray !== undefined) {
                    aCurrentTest.push(oQuestionsIntoArray);
                }
            }

            // After the aCurrentTest is complete call printTest method
            return aCurrentTest;
        };

        /**
         * Function that generates an array with iQuantityOfQuestion between 0 and iMaxValue
         *
         * @example
         *   example(10, 50); // [11, 19, 21, 23, 31, 34, 40, 41, 46, 47]
         *
         * @param   {Integer} iQuantityOfNumbers   Mandatory parameter
         * @param   {Integer} iMaxValue            Mandatory parameter
         * @returns {Array}
         */
        this.randomNumbers = function(iQuantityOfNumbers, iMaxValue) {
            // Declare and initialize the variable aNumbers as an empty array
            var aNumbers = [];

            // While the length of aNumbers is not equal to iQuantityOfNumbers execute the loop
            while (aNumbers.length !== iQuantityOfNumbers) {

                // Declare and initialize the variable iRandomNumber with random number
                var iRandomNumber = Math.floor((Math.random() * iMaxValue) + 1);

                // If iRandomNumber is not inside aNumbers (i.e doesn't exist) push inside array
                // Array.includes() not supported in version WebView in io.cordova.hellocordova (33.0.0.0)
                //if (!(iRandomNumber in aNumbers)) {
                if (!aNumbers.includes(iRandomNumber)) {
                    aNumbers.push(iRandomNumber);
                }
            }

            // Declare and initialize the variable aNumbersSort as an empty array
            var aNumbersSort = [];

            // aNumbersSort receives the aNumbers values sorted in ascending order
            aNumbersSort = aNumbers.sort(function(a, b) {
                return a - b;
            });

            // Return aNumbersSort in ascending order
            return aNumbersSort;
        };
    }

})();
