$(function () {
    AOS.init();
    $(".open-nav-mobile").click(function () {
        $("#header-main #nav-mobile").addClass('open')
    });
    $(".close-menu").click(function () {
        $("#header-main #nav-mobile").removeClass('open')
    });

    $("#contact-form").submit(function (e) {
        e.preventDefault();
        let data = $("#contact-form").serializeArray();
        let templateHtml = `
            <div style="display: flex; margin-bottom: 20px">
            <span style="display: block; width: 180px">貴社名: </span>
    <span style="display: block;" class="data-contact-name">${data.find(item => item.name == 'company').value}</span>
    </div>
    <div style="display: flex; margin-bottom: 20px">
    <span style="display: block; width: 180px">お名前: </span>
    <span style="display: block;" class="data-contact-furigana">${data.find(item => item.name == 'name').value}</span>
    </div>
    <div style="display: flex; margin-bottom: 20px">
    <span style="display: block; width: 180px">メール: </span>
    <span style="display: block;" class="data-contact-postcode">${data.find(item => item.name == 'email').value}</span>
    </div>
    <div style="display: flex; margin-bottom: 20px">
    <span style="display: block; width: 180px">電話番号: </span>
    <span style="display: block;" class="data-contact-prefecture">${data.find(item => item.name == 'phone').value}</span>
    </div>
    <div style="display: flex; margin-bottom: 20px">
    <span style="display: block; width: 180px">メッセージ本文: </span>
    <span style="display: block;" class="data-contact-address">${data.find(item => item.name == 'content').value}</span>
    </div>
    `
        Swal.showLoading();
        sendEmail(templateHtml);
    });


    function sendEmail(html) {
        $.ajax({
           type: 'POST',
           url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
               key: '60f5b372d00471b62d688aa74a2d7237-us9',
                message: {
                   from_email: 'no-reply@plups.jp',
                    to: [
                        {
                            email: 'khanamdev@gmail.com',
                            type: 'to'
                        }
                    ],
                    autotext: true,
                    subject: "お問い合わせを受け付けました",
                    html: html
                }
            }
        }).done(function (response){
            console.log(response)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'お問い合わせをいただきまして、ありがとうございました。',
                html: '後日ご連絡させて頂きます。',
                showConfirmButton: false,
                timer: 2500
            });
        });

    }

})
