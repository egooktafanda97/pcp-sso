<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
    <title>Singgle One SingIn</title>
    <!-- [Meta] -->
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" name="viewport" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta
        content="Berry is made using Bootstrap 5 design framework. Download the free admin template & use it for your project."
        name="description" />
    <meta
        content="Berry, Dashboard UI Kit, Bootstrap 5, Admin Template, Admin Dashboard, CRM, CMS, Bootstrap Admin Template"
        name="keywords" />
    <meta content="CodedThemes" name="author" />

    <!-- [Favicon] icon -->
    <link href="{{ asset('/template/dist') }}/assets/images/favicon.svg" rel="icon" type="image/x-icon" />
    <!-- [Google Font] Family -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" id="main-font-link"
        rel="stylesheet" />
    <!-- [Tabler Icons] https://tablericons.com -->
    <link href="{{ asset('/template/dist') }}/assets/fonts/tabler-icons.min.css" rel="stylesheet" />
    <!-- [Material Icons] https://fonts.google.com/icons -->
    <link href="{{ asset('/template/dist') }}/assets/fonts/material.css" rel="stylesheet" />
    <!-- [Template CSS Files] -->
    <link href="{{ asset('/template/dist') }}/assets/css/style.css" id="main-style-link" rel="stylesheet" />
    <link href="{{ asset('/template/dist') }}/assets/css/style-preset.css" id="preset-style-link" rel="stylesheet" />
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

<body class="font-sans text-[.915rem] tracking-tight antialiased">
    @inertia
    <!-- Required Js -->
    <script src="{{ asset('/template/dist') }}/assets/js/plugins/popper.min.js"></script>
    <script src="{{ asset('/template/dist') }}/assets/js/plugins/bootstrap.min.js"></script>
    <script src="{{ asset('/template/dist') }}/assets/js/plugins/simplebar.min.js"></script>

    <script src="{{ asset('/template/dist') }}/assets/js/config.js"></script>
    <script src="{{ asset('/template/dist') }}/assets/js/pcoded.js"></script>


</body>

</html>
