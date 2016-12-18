</div> <!-- Close the navbar -->
    <?php
    if ($_POST['username'] === 'admin' && $_POST['password'] === 'admin') {
        echo "
        <link rel='stylesheet' type='text/css' href='stylesheets/cv.css' />
        <link rel='stylesheet' type='text/css' href='stylesheets/admin.css' />

    <section class='white-background'>
        <div class='cv-main'>
            <div class='cv-section'>
                <h2 class='cv-section-header'>.CV</h2>
                <div class='cv-line'>Klicka på rubrik för att expandera. Klicka på textrad för att redigera.</div>
                <div class='cv-header'>
                    <div>
                        <h2 class='cv-item'>Utbildning</h2>
                        <div class='expanded' id='Utbildning'>";
                                $query = "
                                    SELECT * FROM Utbildning
                                    ORDER BY id;
                                ";

                                $result = mysqli_query($db, $query);

                                while($row = mysqli_fetch_assoc($result)) {
                                    $header = $row['header'];
                                    $date = $row['date'];
                                    $paragraph = $row['paragraph'];
                                    echo "<div class='cv-header-text'><h3 contenteditable>$header</h3>
                                    <h4 contenteditable>$date</h4></div>
                                    <span class='cv-paragraph'><p contenteditable>$paragraph</p><img class='trash' src='images/trash.png' /></span>";
                                }
                        echo "<button class='add-item'>+ lägg till</button></div>
                    </div>
                    <div>
                        <h2 class='cv-item'>Arbetslivserfarenhet</h2>
                        <div class='expanded' id='Arbetslivserfarenhet'>";
                                $query = "
                                    SELECT * FROM Arbetslivserfarenhet
                                    ORDER BY id;
                                ";

                                $result = mysqli_query($db, $query);

                                while($row = mysqli_fetch_assoc($result)) {
                                    $header = $row['header'];
                                    $date = $row['date'];
                                    $paragraph = $row['paragraph'];
                                    echo "<div class='cv-header-text'><h3 contenteditable>$header</h3>
                                    <h4 contenteditable>$date</h4></div>
                                    <span class='cv-paragraph'><p contenteditable>$paragraph</p><img class='trash' src='images/trash.png' /></span>";
                                    }
                        echo "<button class='add-item'>+ lägg till</button></div>
                    </div>
                    <div>
                        <h2 class='cv-item'>IT</h2>
                        <div class='expanded' id='IT'>";
                                $query = "
                                    SELECT * FROM IT
                                    ORDER BY id;
                                ";

                                $result = mysqli_query($db, $query);

                                while($row = mysqli_fetch_assoc($result)) {
                                    $paragraph = $row['paragraph'];
                                    echo "<span class='cv-paragraph'><p contenteditable>$paragraph</p><img class='trash' src='images/trash.png' /></span>";
                                    }
                        echo "<button class='add-item-paragraph'>+ lägg till</button></div>
                    </div>
                    <div>
                        <h2 class='cv-item'>Språk</h2>
                        <div class='expanded' id='Språk'>";
                                $query = "
                                    SELECT * FROM Språk
                                    ORDER BY id;
                                ";

                                $result = mysqli_query($db, $query);

                                while($row = mysqli_fetch_assoc($result)) {
                                    $paragraph = $row['paragraph'];
                                    echo "<span class='cv-paragraph'><p contenteditable>$paragraph</p><img class='trash' src='images/trash.png' /></span>";
                                    }
                        echo "<button class='add-item-paragraph'>+ lägg till</button></div>
                    </div>
                    <div>
                        <h2 class='cv-item'>Övrigt</h2>
                        <div class='expanded' id='Övrigt'>";
                                $query = "
                                    SELECT * FROM Övrigt
                                    ORDER BY id;
                                ";

                                $result = mysqli_query($db, $query);

                                while($row = mysqli_fetch_assoc($result)) {
                                    $paragraph = $row['paragraph'];
                                    echo "<span class='cv-paragraph'><p contenteditable>$paragraph</p><img class='trash' src='images/trash.png' /></span>";
                                    }
                        echo "<button class='add-item-paragraph'>+ lägg till</button></div>
                    </div>
                </div>
            </div>
            <div class='about-section'>
                <div class='me'></div>
                <div class='about-header'><h2>.Om mig</h2></div>
                <article>";
                        $query = "
                            SELECT * FROM about
                            ORDER BY id;
                        ";

                        $result = mysqli_query($db, $query);

                        while($row = mysqli_fetch_assoc($result)) {
                            $paragraph = $row['paragraph'];
                            echo "<p id='aboutParagraph' contenteditable>$paragraph</p>";
                            }
                echo "</article>
            </div>
        </div>
    </div>

    <script src='scripts/cv.js'></script>
    <script src='scripts/admin.js'></script>
    ";
    }
    else {
        echo "
        <link rel='stylesheet' type='text/css' href='stylesheets/login.css' />

        <div class='login-container white-background'>
            Fel användarnamn eller lösenord.
        </div>";
    }
    ?>
</section>