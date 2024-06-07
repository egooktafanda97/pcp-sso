import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layout";
import { Editor } from "@tinymce/tinymce-react";
import { useForm, usePage } from "@inertiajs/react";
interface Props {
    status: number;
    error: any;
}

const Create = (props: any) => {
    const [value, setValue] = useState("");
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    const { errors, intended } = usePage<any>().props;
    const { data, setData, post, progress } = useForm({
        title: null,
        thm: null,
        content: null,
        lang: null,
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post("/login");
    };

    useEffect(() => {
        const handler = (e: any) => {
            if (
                e.target.closest(
                    ".tox-tinymce-aux, .moxman-window, .tam-assetmanager-root",
                ) !== null
            ) {
                e.stopImmediatePropagation();
            }
        };
        document.addEventListener("focusin", handler);
        return () => document.removeEventListener("focusin", handler);
    }, []);
    function submit(e: any) {
        e.preventDefault();
        post("/article");
    }
    return (
        <Layouts>
            <form onSubmit={submit} action="" encType="multipart/form-data">
                <div className="">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="title"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Judul
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                onChange={(e: any) =>
                                    setData("title", e.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="last_name"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Thumbnail
                            </label>
                            <div className="flex justify-between items-center">
                                <input
                                    className="block w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
                                    onChange={(e: any) =>
                                        setData("thm", e.target.files[0])
                                    }
                                    type="file"
                                />
                                <select
                                    className="block w-full ml-2 mr-2 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
                                    onChange={(e: any) =>
                                        setData("lang", e.target.value)
                                    }
                                >
                                    <option value="">pilih bahasa</option>
                                    <option value="ID">ID</option>
                                    <option value="EN">EN</option>
                                </select>
                                <div>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white ml-2  font-bold py-2 px-4 rounded-full"
                                    >
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Editor
                    value={value}
                    apiKey="qrlq15z6viwxldpr266evyakae92wll0yaiqwh3i4alnwu8z"
                    onInit={(evt, editor) => {
                        setText(editor.getContent({ format: "text" }));
                    }}
                    onEditorChange={(newValue: any, editor) => {
                        setValue(newValue);
                        setData("content", newValue ?? null);
                        setText(editor.getContent({ format: "text" }));
                    }}
                    init={{
                        toolbar:
                            "undo redo spellcheckdialog  | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image | align lineheight checklist bullist numlist | indent outdent | removeformat typography",
                        height: "1200px",
                        toolbar_sticky: true,
                        autosave_restore_when_empty: true,
                        spellchecker_active: true,
                        spellchecker_language: "en_US",
                        spellchecker_languages:
                            "English (United States)=en_US,English (United Kingdom)=en_GB,Danish=da,French=fr,German=de,Italian=it,Polish=pl,Spanish=es,Swedish=sv",
                        typography_langs: ["en-US"],
                        typography_default_lang: "en-US",

                        content_style: `
                      body {
                        background: #fff;
                      }
              
                      @media (min-width: 840px) {
                        html {
                          background: #eceef4;
                          min-height: 100%;
                          padding: 0 .5rem;
                        }
          
                        body {
                          background-color: #fff;
                          box-shadow: 0 0 4px rgba(0, 0, 0, .15);
                          box-sizing: border-box;
                          margin: 1rem auto 0;
                          max-width: 920px;
                          min-height: calc(100vh - 1rem);
                          padding:4rem 6rem 6rem 6rem;
                        }
                      }
                    `,
                    }}
                />
            </form>
        </Layouts>
    );
};

export default Create;
