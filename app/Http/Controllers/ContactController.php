<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::all();
        return response()->json(['contacts' => $contacts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // // dd($request);
        // $contact = new Contact();
        // $contact->fullName = $request->fullname;
        // $contact->email = $request->email;
        // $contact->phone = $request->phone;

        // // $image = $request->file('image');
        // // if ($request->hasFile('image')) {
        // //     $image = $request->file('image');
        // //     $name =  $image->getClientOriginalExtension();
        // //     $filename = date('His') . $name;
        // //     $request->file('image')->storeAs('images/', $filename, 'public');

        // //     // $destinationPath = 'university_images/';
        // //     // $image->move($destinationPath, $name);
        // //     // $contact->image = 'university_images/' . $name;
        // // }

        // if ($contact->save()) {
        //     return response()->json(['status' => 200, 'image' => $image]);
        // }
        return response()->json($request->file('image'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $contact = Contact::find($id);
        return response()->json(['contact' => $contact]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->fullName = $request->fullName;
        $contact->email = $request->email;
        $contact->phone = $request->phone;

        if ($contact->save()) {
            return response()->json(['status' => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        if ($contact->delete()) {
            return response()->json(['status' => 200, 'id' => $id]);
        }
    }
}
