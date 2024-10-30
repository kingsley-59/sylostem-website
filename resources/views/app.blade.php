<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- SEO Meta Tags -->
        <meta name="title" content="{{ config('app.name', 'Sylostem') }} - Crafting Robust Web Solutions">
        <meta name="description" content="From concept to launch, we build scalable web applications that drive innovation and growth, allowing you to focus on what you do best—growing your business.">
        <meta name="keywords" content="Sylostem, software development, software engineering, product design, business consulting, IT consulting, web development, product development, digital strategy, Kingsley Akahibe, Akahibe Kingsley">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Kingsley Akahibe">
        
        <!-- Social Media Meta Tags (Open Graph) -->
        <meta property="og:title" content="{{ config('app.name', 'Sylostem') }} - Crafting Robust Web Solutions">
        <meta property="og:description" content="At Sylostem Technologies, we transform your vision into reality with our top-tier product design, software engineering, and IT consulting services.">
        <meta property="og:image" content="{{ asset('images/social-preview.png') }}">
        <meta property="og:url" content="{{ url('/') }}">
        <meta property="og:type" content="website">
    
        <!-- Twitter Cards -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ config('app.name', 'Sylostem') }}">
        <meta name="twitter:description" content="Leading software engineering company - Sylostem.">
        <meta name="twitter:image" content="{{ asset('images/social-preview.png') }}">
    
        <!-- Favicon -->
        <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
        <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    
        <title inertia>{{ config('app.name', 'Sylostem') }}</title>
    
        <!-- Fonts and Styles -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sylostem",
              "url": "{{ url('/') }}",
              "logo": "{{ asset('images/sylostem-logo.png') }}",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-814-197-1579",
                "contactType": "Customer Support"
              }
            }
        </script>
            
    
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
