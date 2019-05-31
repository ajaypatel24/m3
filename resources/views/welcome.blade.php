<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>M3</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <link href={{ URL::asset('css/index.css') }} rel="stylesheet">
    <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
    />
</head>
<body>

<!-- Appends for PHPtoJSTransformer => see documentation on README.md -->
@include('footer')

<script>var csrf_field = '<?php echo csrf_field(); ?>';</script>
<!-- React entry point -->
<div id="root"></div>
<script src="../js/app.js"></script>

<!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

<!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>

<!-- Add Firebase products that you want to use -->
<script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-firestore.js"></script>

<script>
    // TODO: Replace the following with your app's Firebase project configuration
    var firebaseConfig = {
        apiKey: "AIzaSyD_xohMcXSJccx8WcAWXX15jjD0Ds4wRRk",
        authDomain: "m3coop-7943c.firebaseapp.com",
        databaseURL: "https://m3coop-7943c.firebaseio.com",
        projectId: "m3coop-7943c",
        storageBucket: "m3coop-7943c.appspot.com",
        messagingSenderId: "85673074593",
        appId: "1:85673074593:web:c675f25f37729aae"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
</script>
</body>
</html>
