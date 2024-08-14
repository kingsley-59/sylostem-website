<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * fullname - required
     * company(or personal) email - required
     * phone - required
     * subject - required
     * message - required
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'fullname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
            'files.*' => 'file|max:2048', // Validate each file, max size of 2MB per file
        ]);

        // Check if files are present
        if ($request->has('files')) {
            $filePaths = [];

            foreach ($request->file('files') as $file) {
                // Store each file securely in the 'contact_files' directory
                $path = $file->store('contact_files', 'public');

                // Append the path to the array of file paths
                $filePaths[] = $path;
            }

            // Store file paths as a JSON-encoded string
            $validate['files'] = json_encode($filePaths);
        }


        ContactMessage::create($validate);

        return redirect()->back()->with('success', 'Your message has been sent successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactMessage $contactMessage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactMessage $contactMessage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ContactMessage $contactMessage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactMessage $contactMessage)
    {
        //
    }
}
