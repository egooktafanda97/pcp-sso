import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, useForm } from "@inertiajs/react";
function LoginComponent(props) {
  const { errors, intended } = usePage().props;
  const { data, setData, post } = useForm({
    username: "",
    password: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/login");
  };
  return /* @__PURE__ */ jsx("main", { className: "text-gray-700", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "loader-bg", children: /* @__PURE__ */ jsx("div", { className: "loader-track", children: /* @__PURE__ */ jsx("div", { className: "loader-fill" }) }) }),
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsx("div", { className: "auth-main", children: /* @__PURE__ */ jsx("div", { className: "auth-wrapper v3", children: /* @__PURE__ */ jsx("div", { className: "auth-form", children: /* @__PURE__ */ jsx("div", { className: "card my-5", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "d-flex justify-content-center",
          children: /* @__PURE__ */ jsx("img", { src: "https://dashops.pcpexpress.com/images/logo/1_Logo_PCP_Express.png" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "auth-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-secondary mt-5", children: /* @__PURE__ */ jsx("b", { children: "Hi, Welcome Back" }) }),
        /* @__PURE__ */ jsx("p", { className: "f-16 mt-2", children: "Enter your credentials to continue" })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "saprator mt-3", children: /* @__PURE__ */ jsx("span", { children: "or" }) }),
      /* @__PURE__ */ jsx("h5", { className: "my-4 d-flex justify-content-center", children: "Sign in with Username" }),
      /* @__PURE__ */ jsxs("div", { className: "w-full mb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: `form-control ${(errors ?? null) && "is-invalid"}`,
              id: "floatingInput",
              placeholder: " Username",
              value: data.username,
              onChange: (e) => setData(
                "username",
                e.target.value
              )
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "floatingInput", children: "Username" })
        ] }),
        errors && /* @__PURE__ */ jsx(
          "label",
          {
            className: "ml-2 text-red-500",
            htmlFor: "",
            children: "username or password is wrong"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full mb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "password",
              className: `form-control ${(errors ?? null) && "is-invalid"}`,
              id: "floatingInput",
              placeholder: "Password",
              value: data.password,
              onChange: (e) => setData(
                "password",
                e.target.value
              )
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "floatingInput", children: "Password" })
        ] }),
        errors && /* @__PURE__ */ jsx(
          "label",
          {
            className: "ml-2 text-red-500",
            htmlFor: "",
            children: "username or password is wrong"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex mt-1 justify-content-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "form-check", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-check-input input-primary",
              type: "checkbox",
              id: "customCheckc1",
              defaultChecked: true
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "form-check-label text-muted",
              htmlFor: "customCheckc1",
              children: "Remember me"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h5", { className: "text-secondary", children: "Forgot Password?" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "d-grid mt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "btn btn-secondary bg-secondary text-white",
          children: "Sign In"
        }
      ) }),
      /* @__PURE__ */ jsx("hr", {})
    ] }) }) }) }) }) })
  ] }) });
}
export {
  LoginComponent as default
};
