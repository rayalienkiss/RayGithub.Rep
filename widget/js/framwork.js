//下拉菜单类型一 （没有input结构）
function dt1() {

    var tagValue = document.getElementById('a');
    var menu = document.getElementById('b');
    var wrapper = document.getElementById('c');

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

$(function() {
    var $select = $(".dropdown");
    var $selextSpan = $(".dropdown .dropdown-tag");
    var $optionUl = $(".dropdown-menu");
    var $li = $(".dropdown-menu li");
    var text;

    $select.click(function() {
        $optionUl.stop().toggle();
    });

    $li.click(function() {
        text = $(this).html();
        $selextSpan.html(text);
    });
});

function kitt(){
    
}

