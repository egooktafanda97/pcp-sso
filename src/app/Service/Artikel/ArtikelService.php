<?php

namespace App\Service\Artikel;

use App\Models\Artikel;

class ArtikelService
{
    public function __construct(public Artikel $artikel)
    {
    }

    public function top_tree_desc($lang = "ID")
    {
        return $this->artikel::whereLang($lang)
            ->orderBy("id", "desc")
            ->take(3)
            ->get();
    }

    public function show_page()
    {
        return $this->artikel::orderBy("id", "desc")
            ->paginate(10);
    }

    public function findId($id)
    {
        $d = $this->artikel::find($id);

        $d->thm_path = asset("file/article");
        $d->base64  = "data:image/jpg;base64," . base64_encode(file_get_contents(url("/file/article") . "/" . $d->thm));
        return  $d;
    }

    public function show()
    {
        return $this->artikel::whereUserId(auth()->user()->id)
            ->orderBy("id", "desc")
            ->get();
    }

    public function store(array $data): Artikel
    {
        return $this->artikel::create($data);
    }
}
