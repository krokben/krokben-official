<!-- Facebook share -->
    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
<!-- Header with logo and navbar -->
    <div id="hiddenMenu">
        <ul>
            <a id="trigram2">&#9776;</a>
            <li><span>.</span><a class="nav-home">hem</a></li>
            <li><span>.</span><a class="nav-portfolio">portfolio</a></li>
            <li><span>.</span><a class="nav-cv">cv</a></li>
        </ul>
    </div>
    <div class="container mobile-background">
        <a href="index.html"><div class="logo">krokben.se</div></a>
        <nav class="item navbar">
            <ul>
                <a href="?p=portfolio" id="goBack">&#8672;</a>
                <li><span>.</span><a href="?p=home" class="nav-home" id="hem">hem</a></li>
                <li><span>.</span><a href="?p=portfolio" class="nav-portfolio" id="portfolio">portfolio</a></li>
                <li><span>.</span><a href="?p=cv" class="nav-cv" id="cv">cv</a></li>
                <li class="icon"><a id="trigram">&#9776;</a></li>
            </ul>
        </nav>

<script src="scripts/navbar.js"></script>
