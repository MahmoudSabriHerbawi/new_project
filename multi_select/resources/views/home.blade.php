@extends('layouts.master')
@section('clinks')
@vite('resources/js/logic.js')
@endsection
@section('content')
<div class="container mt-5">
    <div class="row justify-content-center mt-5">
        <form action="{{ route('test') }}" method="POST" id="questionForm">
        @csrf
        <div class="col-md-8">
            <div id="question1" class="question">
                <h2>Question 1</h2>
                <input type="text" class="form-control mb-2" name="answer1" id="answer1">
                <h6 class="text-danger fw-lighter errorMessage"></h6>
                <button type="button" class="next btn btn-primary" data-next="question2">Next</button>
                <div class="progress mt-4">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">10%</div>
                </div>
            </div>

            <div id="question2" class="question d-none">
                <h2>Question 2</h2>
                <input type="text" class="form-control mb-2" name="first_name" id="first_name" placeholder="First Name">
                <input type="text" class="form-control mb-2" name="last_name" id="last_name" placeholder="Last Name">
                <h6 class="text-danger fw-lighter errorMessage"></h6>
                <button type="button" class="back btn btn-secondary mr-2" data-previous="question1">Back</button>
                <button type="button" class="next btn btn-primary" data-next="question3">Next</button>
                <div class="progress mt-4">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>
            </div>

            <div id="question3" class="question d-none">
                <h2>Question 3</h2>
                <input type="text" class="form-control mb-2" name="answer3" id="answer3">
                <h6 class="text-danger fw-lighter errorMessage"></h6>
                <button type="button" class="back btn btn-secondary mr-2" data-previous="question2">Back</button>
                <button type="button" class="next btn btn-primary" data-next="question4">Next</button>
                <div class="progress mt-4">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
            </div>

            <div id="question4" class="question d-none">
                <h2>Question 4</h2>
                <input type="text" class="form-control mb-2" name="field1" id="field1" placeholder="Field 1">
                <input type="text" class="form-control mb-2" name="field2" id="field2" placeholder="Field 2">
                <input type="text" class="form-control mb-2" name="field3" id="field3" placeholder="Field 3">
                <h6 class="text-danger fw-lighter errorMessage"></h6>
                <button type="button" class="back btn btn-secondary mr-2" data-previous="question3">Back</button>
                <button type="button" class="next btn btn-primary" data-next="question5">Next</button>
                <div class="progress mt-4">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
            </div>

            <div id="question5" class="question d-none">
                <h2>Question 5</h2>
                <input type="text" class="form-control mb-2" name="answer5" id="answer5">
                <h6 class="text-danger fw-lighter errorMessage"></h6>
                <button type="button" class="back btn btn-secondary mr-2" data-previous="question4">Back</button>
                <button class="submit btn btn-success">Submit</button>
                <div class="progress mt-4">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
            </div>
        </form>
        </div>
    </div>
</div>

@endsection
