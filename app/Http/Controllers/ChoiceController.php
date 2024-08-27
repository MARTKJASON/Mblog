<?php

namespace App\Http\Controllers;

use App\Models\Choices;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($question_id)
    {
        $question = Question::findorFail($question_id);
        $choices = $question->choices;
        return Inertia::render('Lesson/LessonPage', [
            'question' => $question,
            'choices' => $choices
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Lesson/Components/AddChoice');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    { {
            $request->validate([
                'options' => 'required|string|max:255',
                'question_id' => 'required|exists:questions,id'


            ]);

            Choices::create([
                'options'  => $request->options,
                'question_id' => $request->question_id

            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
