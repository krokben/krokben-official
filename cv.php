</div> <!-- Close the navbar -->
<link rel="stylesheet" type="text/css" href="stylesheets/cv.css" />

<!-- CV -->
<div class="white-background">
    <div class="cv-main">
        <div class="cv-section">
            <h2 class="cv-section-header">.CV</h2>
            <div class="cv-line">Klicka på rubrik för att expandera...</div>
            <div class="cv-header">
                <div>
                    <h2 class="cv-item">Utbildning</h2>
                    <div class="expanded" id="Utbildning">
                        <?php
                            $query = "
                                SELECT * FROM education
                                ORDER BY id;
                            ";

                            $result = mysqli_query($db, $query);

                            while($row = mysqli_fetch_assoc($result)) {
                                $header = $row['header'];
                                $date = $row['date'];
                                $paragraph = $row['paragraph'];
                                echo "<h3>$header <span class='floatRight'>$date</span></h3>
                                <p>$paragraph</p>";
                                }
                        ?>
                    </div>
                </div>
                <div>
                    <h2 class="cv-item">Arbetslivserfarenhet</h2>
                    <div class="expanded" id="Arbetslivserfarenhet">
                        <?php
                            $query = "
                                SELECT * FROM work
                                ORDER BY id;
                            ";

                            $result = mysqli_query($db, $query);

                            while($row = mysqli_fetch_assoc($result)) {
                                $header = $row['header'];
                                $date = $row['date'];
                                $paragraph = $row['paragraph'];
                                echo "<h3>$header <span class='floatRight'>$date</span></h3>
                                <p>$paragraph</p>";
                                }
                        ?>
                    </div>
                </div>
                <div>
                    <h2 class="cv-item">IT</h2>
                    <div class="expanded" id="IT">
                        <?php
                            $query = "
                                SELECT * FROM it
                                ORDER BY id;
                            ";

                            $result = mysqli_query($db, $query);

                            while($row = mysqli_fetch_assoc($result)) {
                                $paragraph = $row['paragraph'];
                                echo "<p>$paragraph</p>";
                                }
                        ?>
                    </div>
                </div>
                <div>
                    <h2 class="cv-item">Språk</h2>
                    <div class="expanded" id="Språk">
                        <?php
                            $query = "
                                SELECT * FROM languages
                                ORDER BY id;
                            ";

                            $result = mysqli_query($db, $query);

                            while($row = mysqli_fetch_assoc($result)) {
                                $paragraph = $row['paragraph'];
                                echo "<p>$paragraph</p>";
                                }
                        ?>
                    </div>
                </div>
                <div>
                    <h2 class="cv-item">Övrigt</h2>
                    <div class="expanded" id="Övrigt">
                        <?php
                            $query = "
                                SELECT * FROM misc
                                ORDER BY id;
                            ";

                            $result = mysqli_query($db, $query);

                            while($row = mysqli_fetch_assoc($result)) {
                                $paragraph = $row['paragraph'];
                                echo "<p>$paragraph</p>";
                                }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-section">
            <div class="me"></div>
            <div class="about-header"><h2>.Om mig</h2></div>
            <article>
                <?php
                    $query = "
                        SELECT * FROM about
                        ORDER BY id;
                    ";

                    $result = mysqli_query($db, $query);

                    while($row = mysqli_fetch_assoc($result)) {
                        $paragraph = $row['paragraph'];
                        echo "<p>$paragraph</p>";
                        }
                ?>
            </article>
        </div>
    </div>
</div>

<script src="scripts/cv.js"></script>
