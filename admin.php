</div> <!-- Close the navbar -->
    <?php
    include('admin/db.php');

    session_start();

    if (isset($_POST['username']) && isset($_POST['password'])) {
        if ($_POST['username'] === 'admin' && $_POST['password'] === 'admin') {
            $_SESSION['admin'] = TRUE;
        }
    }

    if (isset($_SESSION['admin']) && $_SESSION['admin'] === TRUE) {
        if ($_GET['p'] === 'logout') {
            $_SESSION['admin'] = FALSE;
            header('location: ?p=login');
        } else {
            echo "
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
                <link rel='stylesheet' type='text/css' href='stylesheets/cv.css' />
                <link rel='stylesheet' type='text/css' href='stylesheets/admin.css' />
                
                <div class='logout-header'>
                    <a href='?p=logout'>---> Logga ut</a>
                </div>

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
    }
    else {
        header('location: ?p=login');
    }
    ?>
