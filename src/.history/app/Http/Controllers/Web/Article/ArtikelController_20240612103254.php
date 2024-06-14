<?php

namespace App\Http\Controllers\Web\Article;

use App\Helpers\helper;
use App\Http\Controllers\Controller;
use App\Service\Artikel\ArtikelService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Middleware;
use TaliumAttributes\Collection\Rutes\Name;
use TaliumAttributes\Collection\Rutes\Post;

#[Controllers()]
#[Group(prefix: 'article', name: 'article', middleware: ['auth'])]
class ArtikelController extends Controller
{
    #[Get("")]
    public function show(ArtikelService $arc)
    {
        return Inertia::render('Article/show', [
            "item" => $arc->show()
        ]);
    }

    #[Get("create")]
    public function create()
    {
        return Inertia::render('Article/create');
    }

    // set rules
    #[Get("set-rules/{id}")]
    public function setRules(ArtikelService $arc, $id)
    {

        return Inertia::location(route('article.show'));
    }

    #[Post("")]
    #[Name("store")]
    public function store(ArtikelService $artikelService, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:200',
            'content' => 'required|string',
            'lang' => 'nullable|string',
            'thm' => 'nullable|file|max:200',
            'is_type' => 'nullable|string|max:20',
        ]);
        if ($validator->fails()) {
            return to_route('article')->with($validator->errors());
        }

        $data = $validator->valid();
        try {
            $img = helper::Images($request, "thm", "file/article/");
            unset($data['thm']);
            $data['thm'] = $img->name;
        } catch (\Throwable $e) {
            return to_route('article.create')->with("errors", $e->getMessage());
        }
        $artikelService->store(collect($data)->merge(["user_id" => auth()->user()->id])->toArray());
        return Inertia::location(route('article.show'));
    }
}
