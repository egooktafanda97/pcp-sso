import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layouts } from "./Layout-0c4006d1.js";
const Home = () => {
  return /* @__PURE__ */ jsx(Layouts, { children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-md-4", children: /* @__PURE__ */ jsx("div", { className: "w-full grid mt-12  lg:mt-5 ", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://dashfin.pcpexpress.com/callback",
      className: "transition-all pb-5 duration-1000  bg-[#fff] rounded-sm overflow-hidden shadow-md  hover:bg-[#1c76da]  hover:shadow-xl m-2 relative z-40 group",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/img/items/dashops.png",
            alt: "",
            className: "w-full h-[300px]"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: " absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  " }),
        /* @__PURE__ */ jsxs("div", { className: "py-2 px-9 relative  ", children: [
          /* @__PURE__ */ jsx("h3", { className: "mt-8 text-lg font-semibold text-gray-800 group-hover:text-white  ", children: "DASHBOARD OPERASIONAL" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-gray-600 group-hover:text-white  ", children: "Dashboard operasional untuk memantau seluruh kegiatan operasional base data Airwaybill" })
        ] })
      ]
    }
  ) }) }) }) });
};
export {
  Home as default
};
