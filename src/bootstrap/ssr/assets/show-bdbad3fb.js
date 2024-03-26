import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layouts } from "./Layout-d0aa4f86.js";
import moment from "moment";
function Show(props) {
  var _a;
  console.log(props);
  return /* @__PURE__ */ jsx(Layouts, { children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-x-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/article/create",
          className: "bg-gray-400 py-2 px-3 text-white flex justify-center items-center",
          children: "Tambah Data"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Judul" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Lang" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Tanggal" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "#" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: (_a = props == null ? void 0 : props.item) == null ? void 0 : _a.map((x) => /* @__PURE__ */ jsxs("tr", { className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700", children: [
        /* @__PURE__ */ jsx("td", { className: "px-6 py-2 text-gray-700", children: (x == null ? void 0 : x.title) ?? "" }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-2", children: (x == null ? void 0 : x.lang) ?? "" }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-2", children: moment(x == null ? void 0 : x.created_at).format(
          "YYYY MM DD"
        ) ?? "" }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-2", children: "-" })
      ] })) })
    ] })
  ] }) });
}
export {
  Show as default
};
