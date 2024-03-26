<?php

namespace App\Helpers;


class helper
{
    public static function Images($request, $nameFile, $path)
    {
        try {
            if ($request->hasFile($nameFile)) {
                $image = $request->file($nameFile);
                $image_name = \Str::random() . time() . '.' . $image->getClientOriginalExtension();
                $destinationPath = public_path($path);
                $image->move($destinationPath, $image_name);
                return (object)["status" => true, "msg" => "success", "name" => $image_name, "full-path" => $path . "/" . $image_name];
            } else {
                return (object)["status" => false, "msg" => "oops!! error"];
            }
        } catch (\Exception $e) {
            return (object)["status" => false, "msg" => "oops!! error"];
        }
    }
}
