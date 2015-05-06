
//function box(name, age) {
//    return '名字：' + name + '<br/>' + '年龄：' + age;
//}
//document.write(box('ray', 32));

//var box = {
//    'name': 'ray',
//    'age': 32,
//    'height': 175
//};

//with (box) {

//    var n = name,
//        a = age,
//        h = height;
//};

//alert(n + a + h);

//function vcone(one, two) {
//    return 'ok' + one + two;
//}

//document.write('<br/>' + vcone(1, true));

//function dox(num) {
//    if (num > 5) return '大于5';
//    return 100;
//}

//document.write('<br/>' + dox(6));

//var width = document.documentElement.clientHeight;
//document.write('<br/>浏览器窗口高度为&nbsp;' + width + 'px');

function argumentsExample() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
alert(argumentsExample(4, 5));

function argumentsExample2(num) {
    return num + 100;
};

function argumentsExample2(num) {
    return num + 200;
};
alert(argumentsExample2(2));