<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($category_id)
    {
        $category = Category::findOrFail($category_id);
        $questions = $category->questions()->with('choices')->get();
        return Inertia::render('Lesson/LessonPage', [
            'categoryTitle' => $category->title,
            'questions' => $questions,
            'categoryId' => $category->id,
            'description' => $category->description
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Lesson/LessonPage');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required|string|max:255',
            'correct_answer' => 'required|string',
            'category_id' => 'required|exists:categories,id'

        ]);

        Question::create([
            'question'  => $request->question,
            'correct_answer' => $request->correct_answer,
            'category_id' => $request->category_id
        ]);
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
    public function edit()
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
    public function destroy(Question $questions)
    {
        $questions->delete();
        // return redirect()->route('questions.index');
    }
}
