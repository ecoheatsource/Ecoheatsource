$(document).ready(function () {
    $(".quote-form").on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: baseUrl + "/api/quote/request",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status === 'success') {
                    const payload = {
                        icon: 'fad fa-bells',
                        title: 'Quotation request submitted',
                        message: 'We have received your request and will get back to you shortly'
                    }
                    pushNotification(payload);
                    $(".quote-form").trigger("reset");
                } else {

                }
            },
        });
    })
    $(".contact_form").on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: baseUrl + "/api/contact/submit",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status === 'success') {
                    const payload = {
                        icon: 'fad fa-bells',
                        title: 'Message has been sent',
                        message: 'We have received your message and will get back to you shortly'
                    }
                    pushNotification(payload);
                    $(".contact_form").trigger("reset");
                } else {

                }
            },
        });
    })
    $(".add-cart").on("click", function (e) {
        e.preventDefault();
        var proid = $(this).data("id").split("_")[1];
        var qty = $(this).data("qty");
        var name = $(this).data("name");
        var price = $(this).data("price");
        var photo = $(this).data("photo");
        var slug = $(this).data("slug");
        var cartdata = {
            id: proid,
            qty: parseInt(qty),
            name: name,
            price: price,
            photo: photo,
            slug: slug,
        };
        console.log(cartdata);
        $.ajax({
            type: "post",
            url: baseUrl + "/api/cart/add",
            data: cartdata,
            success: function (data) {
                console.log(data);
                addedCart(name, "added");
                fetchMiniCart();
            },
        });
    });

    $('.pro_quantity_add').click(function (e) {
        e.preventDefault();
        var qty = $(this).closest('.product_quantity').find('.pro_quantity_input');
        var currentVal = parseInt(qty.val());
        if (!isNaN(currentVal)) {
            qty.val(currentVal + 1);

        } else {
            qty.val(1);
        }
        qty.trigger('change');
    });

    $('.pro_quantity_subtract').click(function (e) {
        e.preventDefault();
        var qty = $(this).closest('.product_quantity').find('.pro_quantity_input');
        var currentVal = parseInt(qty.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            qty.val(currentVal - 1);
        } else {
            qty.val(1);
        }
        qty.trigger('change');
    });


    $(".pro_add_cart").on("click", function (e) {
        e.preventDefault();
        var proid = $(this).data("id").split("_")[1];
        var qty = $(this).data("qty");
        var qty = $('.pro_quantity_input').val();
        var name = $(this).data("name");
        var price = $(this).data("price");
        var photo = $(this).data("photo");
        var slug = $(this).data("slug");
        var cartdata = {
            id: proid,
            qty: parseInt(qty),
            name: name,
            price: price,
            photo: photo,
            slug: slug,
        };
        console.log(cartdata);
        $.ajax({
            type: "post",
            url: baseUrl + "/api/cart/add",
            data: cartdata,
            success: function (data) {
                console.log(data);
                addedCart(name, "added");
                fetchMiniCart();
            },
        });
    });

    //var fieldName ="";
    $('.product_quantity_add').click(function (e) {
        e.preventDefault();
        //fieldName = $(this).class('.product_quantity_add');

        //Fetch qty in the current elements context and since you have used class selector use it.
        var qty = $(this).closest('.cart_content').find('.product_quantity_input');
        //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

        var currentVal = parseInt(qty.val());
        if (!isNaN(currentVal)) {
            qty.val(currentVal + 1);

        } else {
            qty.val(1);
        }

        //Trigger change event
        qty.trigger('change');
        var rowid = $(this).data('rowid');
        var proid = $(this).data("id").split("_")[1];
        var qty2 = qty.val();
        var name = $(this).data("name");
        var price = $(this).data("price");
        var photo = $(this).data("photo");
        var slug = $(this).data("slug");

        var cartdata = {
            rowid: rowid,
            id: proid,
            qty: qty2,
            name: name,
            price: price,
            photo: photo,
            slug: slug,
        };

        console.log(cartdata);
        $.ajax({
            type: "post",
            url: baseUrl + "/api/cart/update",
            data: cartdata,
            success: function (data) {
                console.log(data);
                addedCart(name, "updated");
                fetchMiniCart();
            },
        });
    });

    // Bind the change event
    $(".product_quantity_input").change(function () {
        updateCart();
    }).change(); // Trigger change event on page load

    $(".product_quantity_subtract").click(function (e) {
        e.preventDefault();
        //fieldName = $(this).class('.product_quantity_subtract');

        //Fetch qty in the current elements context and since you have used class selector use it.
        var qty = $(this).closest('.cart_content').find('.product_quantity_input');
        //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

        var currentVal = parseInt(qty.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            qty.val(currentVal - 1);
        } else {
            qty.val(1);
        }

        //Trigger change event
        qty.trigger('change');
        var rowid = $(this).data('rowid');
        var proid = $(this).data("id").split("_")[1];
        var qty2 = qty.val();
        var name = $(this).data("name");
        var price = $(this).data("price");
        var photo = $(this).data("photo");
        var slug = $(this).data("slug");

        var cartdata = {
            rowid: rowid,
            id: proid,
            qty: qty2,
            name: name,
            price: price,
            photo: photo,
            slug: slug,
        };

        console.log(cartdata);
        $.ajax({
            type: "post",
            url: baseUrl + "/api/cart/update",
            data: cartdata,
            success: function (data) {
                console.log(data);
                addedCart(name, "updated");
                fetchMiniCart();
            },
        });
    });

    $(".delete_item").click(function (e) {
        e.preventDefault();
        var row = $(this).closest('.cart_content');
        var rowid = $(this).data('rowid');
        var name = $(this).data("name");
        var cartdata = {
            rowid: rowid,
            name: name,
        };
        $.ajax({
            type: "post",
            url: baseUrl + "/api/cart/delete",
            data: cartdata,
            success: function (data) {
                console.log(data);
                row.fadeOut(400, function () {
                    row.remove();
                    updateCart();
                    addedCart(name, "deleted");
                    fetchMiniCart();
                });

            },
        });

    });





    $(".qty-right-plus").click(function () {
        if ($(this).prev().val() < 10) {
            $(this)
                .prev()
                .val(+$(this).prev().val() + 1);

            var proid = $(this).data("id").split("_")[1];
            var qty = $(this).prev().val();
            var name = $(this).data("name");
            var price = $(this).data("price");
            var photo = $(this).data("photo");
            var slug = $(this).data("slug");
            $.ajax({
                type: "post",
                url: baseUrl + "/lite/addcart",
                data: {
                    id: proid,
                    qty: parseInt(qty),
                    name: name,
                    price: price,
                    photo: photo,
                    slug: slug,
                },
                success: function (data) {
                    addedCart(name);
                    fetchMiniCart();
                },
            });
        }
    });
    $(".qty-left-minus").click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) {
                var nval = $(this).next().val() - 1;
                $(this).next().val(+nval);
            }
        }
    });

    $(document).ready(function () {
        fetchMiniCart();
    });

    function fetchMiniCart() {
        $.ajax({
            type: "post",
            url: baseUrl + "api/cart/count",
            data: {
                status: "connected",
            },
            success: function (data) {
                const totalItems = parseInt(data);
                if (totalItems > 0) {
                    $(".cart-count").html(data);
                } else {
                    $(".cart-count").html(data);
                }
            },
        });
    }

    function updateCart() {
        var total = 0;
        $('.cart_content').each(function () {
            var price = $(this).find('.product_per_price').text();
            var count = $(this).find('.product_quantity_input').val();
            var subtotal = parseFloat(price) * parseInt(count);
            $(this).find('.product_total_price').text(numberWithCommas(subtotal.toFixed(0)));
            total += subtotal;
        });
        $('.total_price').html("KES. " + numberWithCommas(total.toFixed(0)));
    }

    function addedCart(namex, mode) {
        $.notify(
            {
                icon: "fad fa-check-circle",
                title: `<strong>${namex}</strong>`,
                message: "Has been " + mode + " to your shopping cart",
            },
            {
                element: "body",
                position: null,
                type: "success",
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "bottom",
                    align: "right",
                },
                offset: 10,
                spacing: 0,
                z_index: 1031,
                delay: 5000,
                animate: {
                    enter: 'animate__animated animate__fadeInUp',
                    exit: 'animate__animated animate__fadeOutDown'
                },
                icon_type: "class",
                template:
                    '<div data-notify="container" class="alert-notify col-xxl-3 col-lg-5 col-md-6 col-sm-7 col-12 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
                    '<div class="alert-container">' +
                    '<div class="alert-icon">' +
                    '<span data-notify="icon"></span> ' +
                    '</div>' +
                    '<div class="alert-content">' +
                    '<span data-notify="title" class="alert-title">{1}</span> ' +
                    '<span data-notify="message" class="alert-message">{2}</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    "</div>" +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    "</div>",
            }
        );
    }


    function pushNotification(payload) {
        $.notify(
            {
                icon: payload.icon,
                title: `<strong>${payload.title}</strong>`,
                message: payload.message,
            },
            {
                element: "body",
                position: null,
                type: "success",
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "bottom",
                    align: "right",
                },
                offset: 10,
                spacing: 0,
                z_index: 1031,
                delay: 5000,
                animate: {
                    enter: 'animate__animated animate__fadeInUp',
                    exit: 'animate__animated animate__fadeOutDown'
                },
                icon_type: "class",
                template:
                    '<div data-notify="container" class="alert-notify col-xxl-3 col-lg-5 col-md-6 col-sm-7 col-12 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
                    '<div class="alert-container">' +
                    '<div class="alert-icon">' +
                    '<span data-notify="icon"></span> ' +
                    '</div>' +
                    '<div class="alert-content">' +
                    '<span data-notify="title" class="alert-title">{1}</span> ' +
                    '<span data-notify="message" class="alert-message">{2}</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    "</div>" +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    "</div>",
            }
        );
    }


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

});