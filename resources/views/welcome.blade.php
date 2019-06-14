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


<!-- React entry point -->
<div id="root"></div>
<script src="../js/app.js"></script>

<script type="application/javascript" src="https://server/cookies.js"></script>
<!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

<!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

<!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js"></script>

<!-- Add Firebase products that you want to use -->
<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-firestore.js"></script>
</body>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAVYcWHS5zwPM1FEvZ23D0ZvvolAGWgM98",
        authDomain: "m3-cadet.firebaseapp.com",
        databaseURL: "https://m3-cadet.firebaseio.com",
        projectId: "m3-cadet",
        storageBucket: "m3-cadet.appspot.com",
        messagingSenderId: "797390348180",
        appId: "1:797390348180:web:420eda4cf823d7e6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


</script>
</body>
</html>
