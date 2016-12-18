// Create new
function addItem() {
    $('.add-item').on('click', function() {
        $.ajax({
            url: 'admin/add.php',
            type: 'POST',
            dataType: 'json',
            data: {
                title: String($(this).parent().attr('id')),
                header: 'Rubrik',
                date: 'Datum',
                paragraph: 'Paragraf',
                id: $(this).siblings('div').length + 1
            }
        });
        // Add new item with dummy info and a new Add button after
        $(this).parent().append("<div class='cv-header-text'><h3 contenteditable>Rubrik</h3><h4 contenteditable>Datum</h4></div><p contenteditable>Paragraf</p><button class='add-item'>+ lägg till</button>");
        updateItem();
        addItem();
        $(this).remove();
    });
}

// Create new (paragraph only)
function addItemParagraph() {
    $('.add-item-paragraph').on('click', function() {
        console.log($(this).siblings('span').length + 1);
        $.ajax({
            url: 'admin/add.php',
            type: 'POST',
            dataType: 'json',
            data: {
                title: String($(this).parent().attr('id')),
                paragraph: 'Paragraf',
                id: $(this).siblings('span').length + 1
            }
        });
        // Add new item with dummy info and a new Add button after
        $(this).parent().append("<div class='cv-paragraph'><p contenteditable>Paragraf</p><img class='trash' src='images/trash.png' /></div><button class='add-item-paragraph'>+ lägg till</button>");
        updateItem();
        addItemParagraph();
        $(this).remove();
    });
}

// Update
function updateItem() {
    $('.expanded >, .expanded > >').blur(function() {
        // Header
        if ($(this)[0].tagName === 'H3') {
            $.ajax({
                url: 'admin/update.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    title: String($(this).parent().parent().attr('id')),
                    header: String($(this).html()),
                    id: $(this).parent().prevAll('div').length + 1
                }
            });
            // Date
        } else if ($(this)[0].tagName === 'H4') {
            $.ajax({
                url: 'admin/update.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    title: String($(this).parent().parent().attr('id')),
                    date: String($(this).html()),
                    id: $(this).parent().prevAll('div').length + 1
                }
            });
            // Paragraph
        } else {
            $.ajax({
                url: 'admin/update.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    title: String($(this).parent().parent().attr('id')),
                    paragraph: String($(this).html()),
                    id: $(this).parent().prevAll('span').length + 1
                }
            });
        }
    });
}

// Update about text
$('#aboutParagraph').blur(function() {
    $.ajax({
        url: 'admin/update-about.php',
        type: 'POST',
        dataType: 'json',
        data: {
            paragraph: String($(this).html()),
        }
    });
});

// Delete
function deleteItem() {
    $('.trash').on('click', function() {
        console.log($(this).parent().parent().attr('id'));
        console.log($(this).parent().prevAll('span').length + 1);
        $.ajax({
            url: 'admin/delete.php',
            type: 'POST',
            dataType: 'json',
            data: {
                title: String($(this).parent().attr('id')),
                id: $(this).parent().prevAll('span').length + 1
            }
        });
        // Delete from page
        if ($(this).parent().parent().find('div').length === 0) {
            $(this).parent().remove();
        } else {
            $(this).parent().prev().remove();
            $(this).parent().remove();
        }
    });
}

// Init
addItem();
addItemParagraph();
updateItem();
deleteItem();
