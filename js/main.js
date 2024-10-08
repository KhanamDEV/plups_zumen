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
        

    }

})
