
////下拉菜单类型一 （没有input结构）
//function Dt1BeginSelect(elem) {

//    if (elem.className == "dropdown-type1-wrapper") {
//        elem.className = "dropdown-type1-wrapper active"
//        elem.onmouseup = function () {
//            this.className = "dropdown-type1-wrapper"
//        }
//    }

//    var ul = elem.parentNode.parentNode;
//    var li = ul.getElementsByTagName("li");
//    var selectArea = li[li.length - 1];
//    if (selectArea.style.display == "block") {
//        selectArea.style.display = "none";
//    }
//    else {
//        selectArea.style.display = "block";
//        mouseoverBg(selectArea);
//    }
//}

$(function Dt1BeginSelect() {

    $(".dropdown-type1-wrapper").click(function () {
        $(this).toggleClass("active");
        //$(this).children("ul").slideToggle(0);
    });
    //$(".ddlcity li a").click(function () {
    //    var $this = $(this);
    //    $this.parents(".ddlcity").children(".textvalue").html($(this).html());
    //    $this.parents(".ddlcity").addClass("highlight");
    //    $this.parents(".ddlcity").find("a").removeClass("hover");
    //    $this.addClass("hover");
    //});
    //$(".dropdown-type1-wrapper").mouseleave(function () {
    //    $(this).removeClass("active");
    //    $(this).children("ul").hide();
    //});
});


