<link rel="stylesheet" type="text/css" href="stylesheets/home.css" />

<!-- Countdowns -->
        <div class="countdown-container">
            <div class="item clockdiv" id="clockdiv">
                <h3>LiA</h3>
                <span class="days"></span>:<span class="hours">
                </span>:<span class="minutes"></span>:<span class="seconds"></span>
            </div>
            <div class="item clockdiv" id="clockdiv2">
                <h3>Examen</h3>
                <span class="days"></span>:<span class="hours">
                </span>:<span class="minutes"></span>:<span class="seconds"></span>
            </div>
        </div>
<!-- Cartoon character div -->
        <div class="item arrow" id="profile"></div>
        </div> <!-- Close the navbar -->
<!-- Pattern background div + about div -->
    <div class="container pattern">
        <section class="about">
            <h1>tommy svensson, frontend-utvecklare</h1>
            <p>Söker ni en utvecklare till ert projekt? Leta ej längre. Jag är mannen ni
                söker. Med nästan 2 månaders erfarenhet av frontend-utveckling under bältet
                kan jag lova att leverera den bästa tänkbara användarupplevelsen till er
                hemsida/applikation. Jag har erfarenhet inom följande områden:</p>
            <ul class="about-ul">
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>JavaScript</span></li>
                <li><span>PHP</span></li>
                <li><span>Design</span></li>
                <li><span>MS Paint</span></li>
                <li><span>Git/Github</span></li>
            </ul>
        </section>
    </div>
<!-- Empty whitespace div -->
    <div class="whitespace">
            <form id="mailForm">
                <div class="mailform">
                    <h3 class="contact-header">.kontakta mig</h3>
                    <label>Namn</label>
                    <input type="text" placeholder="Namn" pattern="[A-Za-z\s]{1,20}" name="name" required id="name">
                    <label>E-mail</label>
                    <input type="email" placeholder="e@mail.com" name="email" required id="email"><br>
                    <label>Meddelande</label><br>
                    <textarea placeholder="Meddelande" name="message" required id="message"></textarea>
                    <input type="submit" name="submit" value=".skicka" id="submitButton">
                    <div id="messageFail"></div>
                    <div id="messageSuccess"></div>
                </div>
            </form>
    </div>

<script src="scripts/home.js"></script>
