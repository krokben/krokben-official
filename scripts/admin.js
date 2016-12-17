$('.expanded >, .expanded > >').blur(function() {
    if ($(this)[0].tagName === 'H3') {
        $.ajax({
            url: 'admin/update.php',
            type: 'POST',
            dataType: 'json',
            data: {
                title: String($(this).parent().parent().attr('id')),
                header: String($(this).html()),
                id: String($(this).siblings('h4').html())
            }
        });
    } else if ($(this)[0].tagName === 'H4') {
        $.ajax({
            url: 'admin/update.php',
            type: 'POST',
            dataType: 'json',
            data: {
                title: String($(this).parent().parent().attr('id')),
                date: String($(this).html()),
                id: String($(this).siblings('h3').html())
            }
        });
    } else if ($(this).siblings('div').length !== 0 && $(this).prev().children().first()[0].tagName === 'H3') {
        $.ajax({
            url: 'admin/update.php',
            type: 'POST',
            dataType: 'json',
            data: {
                title: String($(this).parent().attr('id')),
                paragraph: String($(this).html()),
                id: String($(this).prev('div').children('h3').html())
            }
        });
    } else {
        $.ajax({
            url: 'admin/update.php',
            type: 'POST',
            dataType: 'json',
            data: {
                title: String($(this).parent().attr('id')),
                paragraph: String($(this).html()),
                id: $(this).index() + 1,
                noheader: 'yes'
            }
        });
    }
});
