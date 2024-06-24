// $(document).ready(function() {
//     // Handle next button click
//     $('.next').click(function() {
//         var currentQuestion = $(this).closest('.question');
//         var nextQuestionId = $(this).data('next');
//         currentQuestion.addClass('d-none');
//         $('#' + nextQuestionId).removeClass('d-none');
//     });

//     // Handle back button click
//     $('.back').click(function() {
//         var currentQuestion = $(this).closest('.question');
//         var previousQuestionId = $(this).data('previous');
//         currentQuestion.addClass('d-none');
//         $('#' + previousQuestionId).removeClass('d-none');
//     });

//     // Handle form submission
//     $('.submit').click(function() {
//         alert('Form submitted!');
//         // Implement AJAX call or form submission logic here if needed
//     });
// });

// Prevent form submission on "Enter" key press and trigger next button click
//    $('#questionForm').on('keypress', function(e) {
//     if (e.which === 13) { // 13 is the key code for "Enter"
//         e.preventDefault();
//         $(e.target).closest('.question').find('.next').click();
//     }
//     });
$(document).ready(function() {

    // ########################################################################## visability section
    function goToNext(currentQuestion, nextQuestionId) {
        currentQuestion.addClass('d-none');
        $('#' + nextQuestionId).removeClass('d-none');
    }

    // Function to handle moving to the previous question
    function goToPrevious(currentQuestion, previousQuestionId) {
        currentQuestion.addClass('d-none');
        $('#' + previousQuestionId).removeClass('d-none');
    }
    // ########################################################################## visability section



    // ######################################################################################### validation section then goes to the next page
    $('.next').click(function() {
        var currentQuestion = $(this).closest('.question');
        var nextQuestionId = $(this).data('next');
        var valid = true;

        // Custom validation for question 1
        if (currentQuestion.attr('id') === 'question1') {
            var answer1 = $('#answer1').val();
            if (answer1.trim() === "") {
                $('.errorMessage', currentQuestion).text('This field is required').show();
                valid = false;
            } else {
                $('.errorMessage', currentQuestion).hide();
            }
        }

        // Custom validation for question 2
        if (currentQuestion.attr('id') === 'question2') {
            var firstName = $('#first_name').val();
            var lastName = $('#last_name').val();
            if (firstName.trim() === "" || lastName.trim() === "") {
                $('.errorMessage', currentQuestion).text('All fields are required').show();
                valid = false;
            } else {
                $('.errorMessage', currentQuestion).hide();
            }
        }

        // Custom validation for question 3
        if (currentQuestion.attr('id') === 'question3') {
            var field = $('#answer3').val();
            if (field.trim() === "") {
                $('.errorMessage', currentQuestion).text('this field is required').show();
                valid = false;
            }
            else
            {
                $('.errorMessage', currentQuestion).hide();
            }
        }

        // Custom validation for question 4
        if (currentQuestion.attr('id') === 'question4') {
            var field1 = $('#field1').val();
            var field2 = $('#field2').val();
            var field3 = $('#field3').val();
            if (field1.trim() === "" || field2.trim() === "" || field3.trim() === "") {
                $('.errorMessage', currentQuestion).text('All fields are required').show();
                valid = false;
            } else {
                $('.errorMessage', currentQuestion).hide();
            }
        }

        // If valid, go to the next question
        if (valid) {
            goToNext(currentQuestion, nextQuestionId);
        }
    });
    // ######################################################################################### validation section then goes to the next page


    // ############################################################################### back operation

    // Click handler for the back button
    $('.back').click(function() {
        var currentQuestion = $(this).closest('.question');
        var previousQuestionId = $(this).data('previous');
        goToPrevious(currentQuestion, previousQuestionId);
    });
    // ############################################################################### back operation


    // ############################################################################################## Keyboard Events

    // Prevent form submission on "Enter" key press and trigger next/back button click
    $('#questionForm').on('keypress', function(e) {
        if (e.which === 13) { // 13 is the key code for "Enter"
            e.preventDefault();
            var focusedElement = $(document.activeElement);
            if (focusedElement.hasClass('next')) {
                focusedElement.click(); // Trigger next button click
            } else if (focusedElement.hasClass('back')) {
                focusedElement.click(); // Trigger back button click
            } else if (focusedElement.hasClass('submit')) {
                focusedElement.click(); // Trigger submit button click
            }
        }
    });

    // Handle tab navigation for "Back", "Next", and "Submit" buttons
    $('.back, .next, .submit').on('keydown', function(e) {
        var isEnterKey = (e.which === 13);
        var isTabKey = (e.which === 9);

        // Handle "Enter" key press
        if (isEnterKey) {
            $(this).click(); // Trigger button click
        }

        // Handle "Tab" key press
        if (isTabKey) {
            e.preventDefault(); // Prevent default tab behavior
            var focusableElements = $(this).closest('.question').find('.back, .next, .submit');
            var currentIndex = focusableElements.index($(this));
            var nextIndex = currentIndex + (e.shiftKey ? -1 : 1);

            if (nextIndex < 0) {
                nextIndex = focusableElements.length - 1;
            } else if (nextIndex >= focusableElements.length) {
                nextIndex = 0;
            }

            focusableElements.eq(nextIndex).focus(); // Move focus to the next/previous button
        }
    });
    // ############################################################################################## Keyboard Events


});



// the next operation

// $('.next').click(function (){
//     // e.preventDefault();
//     var currentQuestion = $(this).closest('.question');
//     var nextStation = $(this).data('next');
//     // console.log('#'+nextStation);
//     currentQuestion.addClass('d-none');
//     $('#'+nextStation).removeClass('d-none');
// });

// // the previous operation
// $('.back').click(function (){
//     // e.preventDefault();
//     var currentQuestion = $(this).closest('.question');
//     // console.log(currentQuestion);
//     var preStation = $(this).data('previous');
//     // console.log('#'+preStation);
//     currentQuestion.addClass('d-none');
//     $('#'+preStation).removeClass('d-none');
// });
