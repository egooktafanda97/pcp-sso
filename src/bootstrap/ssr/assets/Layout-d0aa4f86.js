import { jsxs, jsx } from "react/jsx-runtime";
function NavBar() {
  return /* @__PURE__ */ jsxs("header", { className: "pc-header", children: [
    /* @__PURE__ */ jsxs("div", { className: "m-header", children: [
      /* @__PURE__ */ jsx("a", { href: "index.html", className: "b-brand", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://dashops.pcpexpress.com/images/logo/1_Logo_PCP_Express.png",
          className: "logo logo-lg max-h-5"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "pc-h-item", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "pc-head-link head-link-secondary m-0",
          id: "sidebar-hide",
          children: /* @__PURE__ */ jsx("i", { className: "ti ti-menu-2" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "header-wrapper", children: [
      " ",
      /* @__PURE__ */ jsx("div", { className: "me-auto pc-mob-drp", children: /* @__PURE__ */ jsxs("ul", { className: "list-unstyled", children: [
        /* @__PURE__ */ jsx("li", { className: "pc-h-item header-mobile-collapse", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "pc-head-link head-link-secondary ms-0",
            id: "mobile-collapse",
            children: /* @__PURE__ */ jsx("i", { className: "ti ti-menu-2" })
          }
        ) }),
        /* @__PURE__ */ jsxs("li", { className: "dropdown pc-h-item d-inline-flex d-md-none", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "pc-head-link head-link-secondary dropdown-toggle arrow-none m-0",
              "data-bs-toggle": "dropdown",
              href: "#",
              role: "button",
              "aria-haspopup": "false",
              "aria-expanded": "false",
              children: /* @__PURE__ */ jsx("i", { className: "ti ti-search" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "dropdown-menu pc-h-dropdown drp-search", children: /* @__PURE__ */ jsx("form", { className: "px-3", children: /* @__PURE__ */ jsxs("div", { className: "form-group mb-0 d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("i", { className: "ti ti-search" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "search",
                className: "form-control border-0 shadow-none",
                placeholder: "Search here..."
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "pc-h-item d-none d-md-inline-flex", children: /* @__PURE__ */ jsxs("form", { className: "header-search", children: [
          /* @__PURE__ */ jsx("i", { className: "ti ti-search icon-search" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "search",
              className: "form-control",
              placeholder: "Search here..."
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "btn btn-light-secondary btn-search", children: /* @__PURE__ */ jsx("i", { className: "ti ti-adjustments-horizontal" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxs("ul", { className: "list-unstyled", children: [
        /* @__PURE__ */ jsxs("li", { className: "dropdown pc-h-item", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "pc-head-link head-link-secondary dropdown-toggle arrow-none me-0",
              "data-bs-toggle": "dropdown",
              href: "#",
              role: "button",
              "aria-haspopup": "false",
              "aria-expanded": "false",
              children: /* @__PURE__ */ jsx("i", { className: "ti ti-bell" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown", children: [
            /* @__PURE__ */ jsxs("div", { className: "dropdown-header", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#!",
                  className: "link-primary float-end text-decoration-underline",
                  children: "Mark as all read"
                }
              ),
              /* @__PURE__ */ jsxs("h5", { children: [
                "All Notification",
                " ",
                /* @__PURE__ */ jsx("span", { className: "badge bg-warning rounded-pill ms-1", children: "01" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "dropdown-header px-0 text-wrap header-notification-scroll position-relative",
                style: { maxHeight: "calc(100vh - 215px)" },
                children: /* @__PURE__ */ jsxs("div", { className: "list-group list-group-flush w-100", children: [
                  /* @__PURE__ */ jsx("div", { className: "list-group-item", children: /* @__PURE__ */ jsxs("select", { className: "form-select", children: [
                    /* @__PURE__ */ jsx("option", { value: "all", children: "All Notification" }),
                    /* @__PURE__ */ jsx("option", { value: "new", children: "New" }),
                    /* @__PURE__ */ jsx("option", { value: "unread", children: "Unread" }),
                    /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
                  ] }) }),
                  /* @__PURE__ */ jsx("a", { className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "../assets/images/user/avatar-2.jpg",
                        alt: "user-image",
                        className: "user-avtar"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "float-end text-muted", children: "2 min ago" }),
                      /* @__PURE__ */ jsx("h5", { children: "John Doe" }),
                      /* @__PURE__ */ jsxs("p", { className: "text-body fs-6", children: [
                        "It is a long established fact that a reader will be distracted",
                        " "
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "badge rounded-pill bg-light-danger", children: "Unread" }),
                      /* @__PURE__ */ jsx("div", { className: "badge rounded-pill bg-light-warning", children: "New" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("a", { className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "user-avtar bg-light-success", children: /* @__PURE__ */ jsx("i", { className: "ti ti-building-store" }) }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "float-end text-muted", children: "3 min ago" }),
                      /* @__PURE__ */ jsx("h5", { children: "Store Verification Done" }),
                      /* @__PURE__ */ jsx("p", { className: "text-body fs-6", children: "We have successfully received your request." }),
                      /* @__PURE__ */ jsx("div", { className: "badge rounded-pill bg-light-danger", children: "Unread" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("a", { className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "user-avtar bg-light-primary", children: /* @__PURE__ */ jsx("i", { className: "ti ti-mailbox" }) }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "float-end text-muted", children: "5 min ago" }),
                      /* @__PURE__ */ jsx("h5", { children: "Check Your Mail." }),
                      /* @__PURE__ */ jsxs("p", { className: "text-body fs-6", children: [
                        "All done! Now check your inbox as you're in for a sweet treat!",
                        " "
                      ] }),
                      /* @__PURE__ */ jsxs("button", { className: "btn btn-sm btn-primary", children: [
                        "Mail",
                        " ",
                        /* @__PURE__ */ jsx("i", { className: "ti ti-brand-telegram" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("a", { className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "../assets/images/user/avatar-1.jpg",
                        alt: "user-image",
                        className: "user-avtar"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "float-end text-muted", children: "8 min ago" }),
                      /* @__PURE__ */ jsx("h5", { children: "John Doe" }),
                      /* @__PURE__ */ jsxs("p", { className: "text-body fs-6", children: [
                        "Uploaded two file on  ",
                        /* @__PURE__ */ jsx("strong", { children: "21 Jan 2020" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "notification-file d-flex p-3 bg-light-secondary rounded", children: [
                        /* @__PURE__ */ jsx("i", { className: "ti ti-arrow-bar-to-down" }),
                        /* @__PURE__ */ jsx("h5", { className: "m-0", children: "demo.jpg" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("a", { className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "../assets/images/user/avatar-3.jpg",
                        alt: "user-image",
                        className: "user-avtar"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "float-end text-muted", children: "10 min ago" }),
                      /* @__PURE__ */ jsx("h5", { children: "Joseph William" }),
                      /* @__PURE__ */ jsxs("p", { className: "text-body fs-6", children: [
                        "It is a long established fact that a reader will be distracted",
                        " "
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "badge rounded-pill bg-light-success", children: "Confirmation of Account" })
                    ] })
                  ] }) })
                ] })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "dropdown-divider" }),
            /* @__PURE__ */ jsx("div", { className: "text-center py-2", children: /* @__PURE__ */ jsx("a", { href: "#!", className: "link-primary", children: "Mark as all read" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "dropdown pc-h-item header-user-profile", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "pc-head-link head-link-primary dropdown-toggle arrow-none me-0",
              "data-bs-toggle": "dropdown",
              href: "#",
              role: "button",
              "aria-haspopup": "false",
              "aria-expanded": "false",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "../assets/images/user/avatar-2.jpg",
                    alt: "user-image",
                    className: "user-avtar"
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "ti ti-settings" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown", children: /* @__PURE__ */ jsxs("div", { className: "dropdown-header", children: [
            /* @__PURE__ */ jsxs("h4", { children: [
              "Good Morning,",
              " ",
              /* @__PURE__ */ jsxs("span", { className: "small text-muted", children: [
                " ",
                "John Doe"
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Project Admin" }),
            /* @__PURE__ */ jsxs("form", { className: "header-search", children: [
              /* @__PURE__ */ jsx("i", { className: "ti ti-search icon-search" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "search",
                  className: "form-control",
                  placeholder: "Search profile options"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("hr", {}),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "profile-notification-scroll position-relative",
                style: {
                  maxHeight: "calc(100vh - 280px)"
                },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "upgradeplan-block bg-light-warning rounded", children: [
                    /* @__PURE__ */ jsx("h4", { children: "Explore full code" }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Buy now to get full access of code files" }),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "https://codedthemes.com/item/berry-bootstrap-5-admin-template/",
                        target: "_blank",
                        className: "btn btn-warning",
                        children: "Buy Now"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("hr", {}),
                  /* @__PURE__ */ jsxs("div", { className: "settings-block bg-light-primary rounded", children: [
                    /* @__PURE__ */ jsxs("div", { className: "form-check form-switch", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          className: "form-check-input",
                          type: "checkbox",
                          role: "switch",
                          id: "flexSwitchCheckDefault"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          className: "form-check-label",
                          htmlFor: "flexSwitchCheckDefault",
                          children: "Start DND Mode"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "form-check form-switch", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          className: "form-check-input",
                          type: "checkbox",
                          role: "switch",
                          id: "flexSwitchCheckChecked",
                          defaultChecked: true
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          className: "form-check-label",
                          htmlFor: "flexSwitchCheckChecked",
                          children: "Allow Notifications"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("hr", {}),
                  /* @__PURE__ */ jsxs("a", { href: "#", className: "dropdown-item", children: [
                    /* @__PURE__ */ jsx("i", { className: "ti ti-settings" }),
                    /* @__PURE__ */ jsx("span", { children: "Account Settings" })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "#", className: "dropdown-item", children: [
                    /* @__PURE__ */ jsx("i", { className: "ti ti-user" }),
                    /* @__PURE__ */ jsx("span", { children: "Social Profile" })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "../pages/login-v3.html",
                      className: "dropdown-item",
                      children: [
                        /* @__PURE__ */ jsx("i", { className: "ti ti-logout" }),
                        /* @__PURE__ */ jsx("span", { children: "Logout" })
                      ]
                    }
                  )
                ]
              }
            )
          ] }) })
        ] })
      ] }) }),
      " "
    ] })
  ] });
}
function Sidebar() {
  return /* @__PURE__ */ jsx("nav", { className: "pc-sidebar", children: /* @__PURE__ */ jsxs("div", { className: "navbar-wrapper", children: [
    /* @__PURE__ */ jsx("div", { className: "m-header", children: /* @__PURE__ */ jsx("a", { href: "index.html", className: "b-brand", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://dashops.pcpexpress.com/images/logo/1_Logo_PCP_Express.png",
        className: "logo logo-lg"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "navbar-content", children: /* @__PURE__ */ jsxs("ul", { className: "pc-navbar", children: [
      /* @__PURE__ */ jsxs("li", { className: "pc-item pc-caption", children: [
        /* @__PURE__ */ jsx("label", { children: "Dashboard" }),
        /* @__PURE__ */ jsx("i", { className: "ti ti-dashboard" })
      ] }),
      /* @__PURE__ */ jsx("li", { className: "pc-item", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "../dashboard/index.html",
          className: "pc-link",
          children: [
            /* @__PURE__ */ jsx("span", { className: "pc-micon", children: /* @__PURE__ */ jsx("i", { className: "ti ti-dashboard" }) }),
            /* @__PURE__ */ jsx("span", { className: "pc-mtext", children: "Dashboard" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("li", { className: "pc-item pc-caption", children: [
        /* @__PURE__ */ jsx("label", { children: "Pages" }),
        /* @__PURE__ */ jsx("i", { className: "ti ti-news" })
      ] }),
      /* @__PURE__ */ jsx("li", { className: "pc-item", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "../dashboard/index.html",
          className: "pc-link",
          children: [
            /* @__PURE__ */ jsx("span", { className: "pc-micon", children: /* @__PURE__ */ jsx("i", { className: "ti ti-dashboard" }) }),
            /* @__PURE__ */ jsx("span", { className: "pc-mtext", children: "User Management" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "pc-item", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "../dashboard/index.html",
          className: "pc-link",
          children: [
            /* @__PURE__ */ jsx("span", { className: "pc-micon", children: /* @__PURE__ */ jsx("i", { className: "ti ti-dashboard" }) }),
            /* @__PURE__ */ jsx("span", { className: "pc-mtext", children: "Article" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "pc-item", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "../dashboard/index.html",
          className: "pc-link",
          children: [
            /* @__PURE__ */ jsx("span", { className: "pc-micon", children: /* @__PURE__ */ jsx("i", { className: "ti ti-dashboard" }) }),
            /* @__PURE__ */ jsx("span", { className: "pc-mtext", children: "Iso form" })
          ]
        }
      ) })
    ] }) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "pc-footer", children: /* @__PURE__ */ jsx("div", { className: "footer-wrapper container-fluid", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("div", { className: "col my-1", children: /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
      "Copyright ©",
      " ",
      /* @__PURE__ */ jsx("a", { href: "", target: "_blank", children: "Codedthemes" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-auto my-1", children: /* @__PURE__ */ jsxs("ul", { className: "list-inline footer-link mb-0", children: [
      /* @__PURE__ */ jsx("li", { className: "list-inline-item", children: /* @__PURE__ */ jsx("a", { href: "", target: "_blank", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { className: "list-inline-item", children: /* @__PURE__ */ jsx("a", { href: "", target: "_blank", children: "Privacy Policy" }) }),
      /* @__PURE__ */ jsx("li", { className: "list-inline-item", children: /* @__PURE__ */ jsx("a", { href: "", target: "_blank", children: "Contact us" }) })
    ] }) })
  ] }) }) });
}
function Layouts({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white text-gray-500", children: [
    /* @__PURE__ */ jsx("div", { className: "loader-bg", children: /* @__PURE__ */ jsx("div", { className: "loader-track", children: /* @__PURE__ */ jsx("div", { className: "loader-fill" }) }) }),
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsx("div", { className: "pc-container", children: /* @__PURE__ */ jsx("div", { className: "pc-content", children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Layouts as L
};
