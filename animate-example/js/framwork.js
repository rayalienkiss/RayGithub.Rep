
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

//function argumentsExample() {
//    var sum = 0;
//    for (var i = 0; i < arguments.length; i++) {
//        sum += arguments[i];
//    }
//    return sum;
//}
//alert(argumentsExample(4, 5));

//function argumentsExample2(num) {
//    return num + 100;
//};

//function argumentsExample2(num) {
//    return num + 200;
//};
//alert(argumentsExample2(2));

//function box(obj) {
//    if (obj.name != undefined) {
//        document.write('i have name' + '<br/>');
//    } else {
//        document.write('it does no work'+'<br/>');
//    }
//    if (obj.age != undefined) {
//        document.write('32 years old' + '<br/>');
//    } else {
//        document.write('it does no work' + '<br/>');
//    }
//    return 'this is a test';
//};

//box({
//    name: 'ray',
//    age: 32,
//});

//alert(box({
//    name: undefined,
//    age: undefined,
//}));

//function box(obj) {
//    alert(obj.name);
//    alert(obj.age);
//    alert(obj.height);
//    alert(obj.fav);
//}

//var obj={
//    name: 'ray',
//    age: 32,
//    height: 175,
//    fav: 'dive'
//};

//box(obj);

//var box = new Array();
//document.write(box);
//alert(typeof box);
//alert(box);

//var box = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
//document.write(box.length);

//var box = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
//box[box.length] = 'o';
//alert(box);

//var box = [
//    {
//        name: 'ray',
//        age: 32
//    },
//    [
//        'a', 'b', 'c',
//        {

//        }
//    ],
//    '够了'
//];

//alert(box);
//alert(box[3]);

//var box = ['ray', 32, 175, new Date()]
//alert(box);
//alert(box.toString());
//alert(box.valueOf());
//alert(box.toLocaleString());

var box = ['ray', 32, 175, new Date()]
alert(box.join('xxx'));