$(document).ready(function() {

// cache DOM & globals
    $cv = $('#cvTable');
    let lastCategory = null;

    // Init
    fetchData();
    setTimeout(moveItem, 100); //setTimeout so fetchData() -> render() completes first
    setTimeout(bindEvents, 100);

    // bind events
    function bindEvents() {
        $('.add-item').on('click', addItem);
        $('#updateList').on('click', updateList);
        $('#updateAbout').on('click', updateAbout);
        $('#updateList').on('blur', changeButtonText);
        $('#updateAbout').on('blur', changeButtonText);
        $('.fa-trash').on('click', deleteItem);
    }

    function changeButtonText() {
        $(this).html('Spara');
    }

    function moveItem() {
        $('.fa-arrow-down').on('click', function() {
            $grandParent = $(this).parent().parent().parent();
            if (!$grandParent.next().hasClass('category')) {
                $grandParent.before($grandParent.next());
            }
        });
        $('.fa-arrow-up').on('click', function() {
            $grandParent = $(this).parent().parent().parent();
            if (!$grandParent.prev().hasClass('category')) {
                $grandParent.after($grandParent.prev());
            }
        });
    }

    function addItem() {
        $grandParent = $(this).parent().parent().parent();
        $category = $(this).parent().prev().html();
        if ($category === 'Utbildning' || $category === 'Arbetslivserfarenhet') { // Check if item has header & date
            $item = `<tbody>
                        <tr>
                            <td contenteditable data-type="header">...Rubrik...</td>
                            <td contenteditable data-type="date">...Datum...</td>
                            <td><i class="fa fa-arrow-down"></i> <i class="fa fa-arrow-up"></i> <i class="fa fa-trash"></i></td>
                        </tr>
                        <tr>
                            <td contenteditable data-type="paragraph">...Paragraf...</td>
                        </tr>
                    </tbody>`;
        } else { // No header & date
            $item = `<tbody>
                        <tr>
                            <td contenteditable colspan=2 data-type="paragraph">...Paragraf...</td>
                            <td><i class="fa fa-arrow-down"></i> <i class="fa fa-arrow-up"></i> <i class="fa fa-trash"></i></td>
                        </tr>
                    </tbody>`
        }

        $($item).insertAfter($grandParent);
        moveItem(); // Bind arrows
        $('.fa-trash').on('click', deleteItem); // Re-bind delete icons
    }

    function deleteItem() {
        $grandParent = $(this).parent().parent().parent();
        const c = confirm('Är du säker?');
        if (c === true) {
            $grandParent.remove();
        }
    }

    function fetchData() {
            $.ajax({
                url: 'admin/get.php',
                data: "",
                dataType: 'json',
                success: function(data) {
                    // console.log(data);
                    render(data);
                },
                error: function (req, status, err) {
                        console.log('Something went wrong with FetchData', status, err);
                }
            });
        }

    function render(arr) {
        $cv.html('');
        arr.forEach((item) => {
            if (item.category !== lastCategory) { // If item's category is the first one, print a header
                if (item.header !== '' && item.date !== '') { // Check if item has header & date
                    $cv.append(
                        `<tbody class="category">
                            <tr>
                                <th>${item.category}</th>
                                <th><button class="add-item">Lägg till erfarenhet</button></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td contenteditable data-type="header">${item.header}</td>
                                <td contenteditable data-type="date">${item.date}</td>
                                <td><i class="fa fa-arrow-down"></i> <i class="fa fa-arrow-up"></i> <i class="fa fa-trash"></i></td>
                            </tr>
                            <tr>
                                <td contenteditable data-type="paragraph">${item.paragraph}</td>
                            </tr>
                        </tbody>`
                    );
                } else { // No header & date
                    $cv.append(
                        `<tbody class="category">
                            <tr>
                                <th>${item.category}</th>
                                <th><button class="add-item">Lägg till erfarenhet</button></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td contenteditable colspan=2 data-type="paragraph">${item.paragraph}</td>
                                <td><i class="fa fa-arrow-down"></i> <i class="fa fa-arrow-up"></i> <i class="fa fa-trash"></i></td>
                            </tr>
                        </tbody>`
                    );
                }
            } else { // No category header
                if (item.header !== '' && item.date !== '') { // Check if item has header & date
                    $cv.append(
                        `<tbody>
                            <tr>
                                <td contenteditable data-type="header">${item.header}</td>
                                <td contenteditable data-type="date">${item.date}</td>
                                <td><i class="fa fa-arrow-down"></i> <i class="fa fa-arrow-up"></i> <i class="fa fa-trash"></i></td>
                            </tr>
                            <tr>
                                <td contenteditable data-type="paragraph">${item.paragraph}</td>
                            </tr>
                        </tbody>`
                    );
                } else { // No header & date
                    $cv.append(
                        `<tbody>
                            <tr>
                                <td contenteditable colspan=2 data-type="paragraph">${item.paragraph}</td>
                                <td><i class="fa fa-arrow-down"></i> <i class="fa fa-arrow-up"></i> <i class="fa fa-trash"></i></td>
                            </tr>
                        </tbody>`
                    );
                }
            }
            lastCategory = item.category; // Set last category to current item's
        });
    }

    function updateList() {
        let jsonObj = [];

        $tableItem = $('#cvTable').children();
        const tableItemIteration = $tableItem.each(function(index) {
            let obj = {};
            if (!$(this).hasClass('category')) {
                if ($(this).find('[data-type="header"]').attr('data-type') === 'header') { // Check if item has header
                    obj["category"] = $(this).prevAll('.category').first().children().children().first().html();
                    obj["header"] = $(this).find('[data-type="header"]').html();
                    obj["date"] = $(this).find('[data-type="date"]').html();
                    obj["paragraph"] = $(this).find('[data-type="paragraph"]').html();
                } else { // If no header, only give paragraph
                    obj["category"] = $(this).prevAll('.category').first().children().children().first().html();
                    obj["paragraph"] = $(this).find('[data-type="paragraph"]').html();
                }
            } else {
                return; // Skip category header
            }
            jsonObj.push(obj);
        });

        $.ajax({
            url: 'admin/truncate.php',
            type: 'POST',
            data: 'truncate',
            success: function(data) {
                // console.log(data);
            },
            error: function (req, status, err) {
                console.log('Something went wrong', status, err);
            }
        });

        $.ajax({
            url: 'admin/update.php',
            type: 'POST',
            data: {tableData:JSON.stringify(jsonObj)},
            success: function(data) {
                // console.log(data);
                $('#updateList').html('Succé');
            },
            error: function (req, status, err) {
                console.log('Something went wrong', status, err);
            }
        });
    }

    function updateAbout() {
        $paragraph = $('#aboutMeParagraph').html();

        $.ajax({
            url: 'admin/update-about.php',
            type: 'POST',
            data: {paragraph: $paragraph},
            success: function(data) {
                console.log(data);
                $('#updateAbout').html('Succé');
            },
            error: function (req, status, err) {
                console.log('Something went wrong', status, err);
            }
        });
    }
});