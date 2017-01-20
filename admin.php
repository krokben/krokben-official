</div> <!-- Close the navbar -->
    <?php
    if ($_POST['username'] === 'admin' && $_POST['password'] === 'admin') {
        echo "
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
        <link rel='stylesheet' type='text/css' href='stylesheets/cv.css' />
        <link rel='stylesheet' type='text/css' href='stylesheets/admin.css' />

    <section class='white-background'>
        <div>
            <table id='cvTable'></table>
            <button id='updateList'>Spara</button> <--- Tryck här för att spara listan!
        </div>
        <div>
            <h2>Om mig</h2>
            <article id='aboutMe'>";
                        $query = "
                            SELECT * FROM about
                            ORDER BY id;
                        ";

                        $result = mysqli_query($db, $query);

                        while($row = mysqli_fetch_assoc($result)) {
                            $paragraph = $row['paragraph'];
                            echo "<p id='aboutMeParagraph' contenteditable>$paragraph</p>";
                        }
            echo "</article><button id='updateAbout'>Spara</button> <--- Tryck här för att spara om-texten!
        </div>
    </section>

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
