<?php

namespace App\Http\Controllers\Api;

use App\Helpers\helper;
use App\Http\Controllers\Controller;
use App\Service\Artikel\ArtikelService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Controller\RestController;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Middleware;
use TaliumAttributes\Collection\Rutes\Name;
use TaliumAttributes\Collection\Rutes\Post;

#[RestController()]
#[Group(prefix: 'article', name: 'article', middleware: ['auth'])]
class ArtikelController extends Controller
{
    #[Get("/top-three")]
    public function top_tree_show(ArtikelService $artikelServices, Request $request)
    {
        try {
            $lang = empty($request->get("lang")) ? "ID" : "EN";
            return response()->json($artikelServices->top_tree_desc($lang)->map(function ($x) {
                $x->base64  = "data:image/jpg;base64," . base64_encode(file_get_contents(url("/file/article") . "/" . $x->thm));
                return $x;
            }), 200);
        } catch (\Throwable $th) {
            return response()->json([
                "message" => $th->getMessage()
            ], 422);
        }
    }

    #[Get("/show-page")]
    public function show_paging(ArtikelService $artikelServices)
    {
        try {
            return response()->json($artikelServices->show_page(), 200);
        } catch (\Throwable $th) {
            return response()->json([
                "message" => $th->getMessage()
            ], 422);
        }
    }

    #[Get("/{id}")]
    public function findId(ArtikelService $artikelServices, $id)
    {
        try {
            return response()->json($artikelServices->findId($id), 200);
        } catch (\Throwable $th) {
            return response()->json([
                "message" => $th->getMessage()
            ], 422);
        }
    }
}
