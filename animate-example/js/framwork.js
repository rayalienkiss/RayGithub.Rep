
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

//var box = ['ray', 32, 175, new Date()]
//alert(box.join('xxx'));

//var box = ['ray', 32, 175];
//box.push('计算机编程');
//box[4] = 'hat';
//alert(box.push('计算机编程','case'));
//alert(box);
//document.write(box.pop());
//alert(box);

//var box = ['ray', 32, 175];
//box.shift();
//box[4] = 'basketball';
//alert(box.shift());
//alert(box);

//var box = ['ray', 32, 175];
//box.unshift('case');
//alert(box.unshift('me'));
//box[3] = 'a';
//alert(box);

//var box = ['ray', 180, 175];
//alert(box.reverse());
//box.reverse();
//alert(box);

//function compare(value1, value2) {
//    if (value1 < value2) {
//        return -1;
//    } else if (value1 > value2) {
//        return 1;
//    } else {
//        return 0;
//    }
//};

//var box = [0, 10, 5, 1, 15];
//alert(box.sort(compare));

//function boxsort(a,b) {
//    return a - b;
//}

//var box = [1, 10, 7, 6, 21];
//alert(box.sort(boxsort));

//var objectList = new Array();
//function Persion(name, age) {
//    this.name = name;
//    this.age = age;
//}
//objectList.push(new Persion('jack', 20));
//objectList.push(new Persion('tony', 25));
//objectList.push(new Persion('stone', 26));
//objectList.push(new Persion('mandy', 23));
////按年龄从小到大排序
//objectList.sort(function (a, b) {
//    return a.age - b.age
//});
//for (var i = 0; i < objectList.length; i++) {
//    document.writeln('<br />age:' + objectList[i].age + ' name:' + objectList[i].name);
//}

//var box = ['ray', 32, 175, ];
//var box2 = box.concat('dive', '155kg');
//alert(box2);

//var box = ['a', 293, true, 3, 'object', 'ray', 6, 'c', 'asssss', 9, 001];
//var box2 = box.slice(5,8);
//alert(box2);

//var box = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//var box2 = box.splice(3, 2);
//alert(box2);

//var box = ['a', 293, true, 3, 'object', 'ray', 6, 'c', 'asssss', 9, 1];
//var box2 = box.splice(2, 5, 0, 0);
//alert(box2); 
//document.write(box);

/*
 * 时间与日期（上）
 */

//var box = new date();
//alert(box);

//alert(Date.parse('4/4/2004'));

//var box = new Date(Date.parse('4/4/2004'));
//alert(box);

//var box = new Date(1810080008000);
//alert(box);

//var box = new Date('may/23/2004');
//alert(box);

//var box = new Date(Date.UTC(2007, 10));
//alert(box);

//var box2 = new Date(Date.UTC(2007, 10, 5, 17, 22, 90));
//alert(box2);

/*
 * 时间与日期（下）
 */

//var box = new Date();
//document.write(box + '<br/>');
//document.write(typeof box + '<br/><br/>');
//document.write('toString:&nbsp;&nbsp;&nbsp;' + box.toString() + '<br/>');
//document.write(typeof box.toString() + '<br/><br/>');
//document.write('toLocaleString:&nbsp;&nbsp;&nbsp;' + box.toLocaleString() + '<br/>');
//document.write(typeof box.toLocaleString() + '<br/><br/>');
//document.write('valueOf:&nbsp;&nbsp;&nbsp;' + box.valueOf() + '<br/>');
//document.write(typeof box.valueOf() + '<br/><br/>');

//var box = new Date();
//document.write(box + '<br/>');
//document.write(typeof box + '<br/><br/>');

//document.write('toString:&nbsp;&nbsp;&nbsp;' + box.toString() + '<br/>');
//document.write(typeof box.toString() + '<br/><br/>');
//document.write('toDateString:&nbsp;&nbsp;&nbsp;' + box.toDateString() + '<br/>');
//document.write(typeof box.toDateString() + '<br/><br/>');
//document.write('toTimeString:&nbsp;&nbsp;&nbsp;' + box.toTimeString() + '<br/>');
//document.write(typeof box.toTimeString() + '<br/><br/>');

//document.write('toLocaleString:&nbsp;&nbsp;&nbsp;' + box.toLocaleString() + '<br/>');
//document.write(typeof box.toLocaleString() + '<br/><br/>');
//document.write('toLocaleDateString:&nbsp;&nbsp;&nbsp;' + box.toLocaleDateString() + '<br/>');
//document.write(typeof box.toLocaleDateString() + '<br/><br/>');
//document.write('toLocaleTimeString:&nbsp;&nbsp;&nbsp;' + box.toLocaleTimeString() + '<br/>');
//document.write(typeof box.toLocaleTimeString() + '<br/><br/>');

//document.write('toUTCString:&nbsp;&nbsp;&nbsp;' + box.toUTCString() + '<br/>');
//document.write(typeof box.toUTCString() + '<br/><br/>');

//document.write('valueOf:&nbsp;&nbsp;&nbsp;' + box.valueOf() + '<br/>');
//document.write(typeof box.valueOf() + '<br/><br/>');

//var box = new Date();
//document.write(box + '<br/><br/>');
//document.write(box.getTime() + '<br/><br/>');
//box.setTime(11);
//document.write(box + '<br/><br/>');

//document.write(box + '<br/><br/>');
//document.write(box.getFullYear() + '<br/><br/>');
//box.setFullYear(2014);
//document.write(box + '<br/><br/>');

//document.write(box.toLocaleString() + '<br/><br/>');
//alert(box.getMonth() + 1);
//box.setMonth(5);
//document.write(box.toLocaleString() + '<br/><br/>');

//var box = new Date();
//alert(box.getUTCHours());

/*
 * 正则表达式（1）
 */

//var box = new RegExp('box','ig');
//alert(box);

//var box2 = /box/igm;
//alert(box2);

//var pattem =/box/i;
//var str = 'Box';
//alert(pattem.test(str));

//alert(/box/i.test('box'));

//var pattem =/box/i;
//var str = 'this is a Box';
//alert(pattem.test(str));

//var pattem = /box/i;
//var str = 'this is a Box';
//alert(pattem.exec(str));

/*
 * 正则表达式（2）
 */

//var pattermMatch = /box/ig;
//var str = 'there are boxes,but they are not a great box';
////alert(str.match(pattermMatch));
////alert(typeof str.match(pattermMatch));
//var strResult = str.match(pattermMatch);
//alert(strResult);

//var pattermSearch = /box/i;
//var str = 'there are boxes,but they are not a great box';
//alert(str.search(pattermSearch));

//var pattermReplace = /box/ig,
//    str = 'there are boxes,but they are not a great box';
//alert(str.replace(pattermReplace, 'Ray'));

//var pattermSplit = /box/ig,
//    str = 'this is a box! it is a box too!';
//alert(str.split(pattermSplit));
//alert(typeof str.split(pattermSplit));

//var pattern = /box/ig,
//    str = 'this is a box! it is a box too!';
//pattern.test(str);
//alert(RegExp['$&']);

//var pattern = /google/igm;
//var str = 'google,google,google';
//pattern.test(str);
//alert(pattern.lastIndex);

/*
 * 正则表达式（3）
 */

//var patterm = /g..gle/;
//var str = 'gnmgle';
//alert(patterm.test(str));

//var patterm = /g.*gle/;
//var str = 'gnmgle';
//alert(patterm.test(str));

//var patterm = /^[^0-9]*oogle/;
//var str = 'aaoogle';
//alert(patterm.test(str));

//var patterm = /^\W+oogl\D$/;
//var str = '))oogle';
//alert(patterm.test(str));

//var patterm = /^[0-9]{9,9}$/;
//var str = '123456789';
//alert(patterm.test(str));

/*
 * 正则表达式（4）
 */

//var patterm = /go\sogle/;
//var str = 'go ogle';
//alert(patterm.test(str));

//var patterm = /go\sogle\b/;
//var str = 'go ogle';
//alert(patterm.test(str));

//var patterm = /go\sogle\b/;
//var str = 'go ogle';
//alert(patterm.test(str));

//var patterm = /go\sogle\b|^bing$|soso/;
//var str = 'bing';
//alert(patterm.test(str));

//var patterm = /(go\sogle|bing|soso){2,5}$/;
//var str = 'go oglego ogle';
//alert(patterm.test(str));

//var patterm = /^this\sis\sa\s(.*)$/;
//var str = 'this is a google';
//patterm.test(str);
//alert(RegExp.$1);

//var patterm = /^this\sis\sa\s(.*)$/;
//var str = 'this is a google';
//document.write(str.replace(patterm, '<strong>$1</strong>'));

//var patterm = /(.*)\s(.*)/;
//var str = 'baidu google';
//document.write(str.replace(patterm, '$2&nbsp;$1'));

//var patterm = /[a-z]/;
//var str = 'google';
//document.write(str.replace(patterm,'1'));

//var p = /8(.*?)8/g;
//var str = '8google8 8google8 8google8'
//document.write(str.replace(p,'<b style="color:red;">$1</b>'));

//var p = /8([^8]*)8/;
//var str = '8google8 8google8 8google8'
//document.write(str.replace(p,'baidu'));

//var pattern = /^[a-z]+\s[0-9]{4}$/;
//var str = 'google 2012';
//alert(pattern.exec(str));    //返回一个包含字符串的数组

//var pattern = /^([a-z]+)\s([0-9]{4})$/; //使用了分组
//var str = 'google 2012';
//var a = pattern.exec(str);
//alert(a.length);
//alert(a[0]);
//alert(a[1]);
//alert(a[2]);

//var str = '123abc';
//var pattern = /(\d+)([a-z])/; //这个叫捕获性分组，所有的分  组都捕获返回
//alert(pattern.exec(str)); 

//var str = '123abc';
//var pattern = /(?:\d+)(?:[a-z])/; //这个叫非捕获性分组，只要在你不需要捕获的那个分组前加上'?:'
//alert(pattern.exec(str)); 
 

//var pattern = /(a?(b?(c?)))/;
//var a = 'abc';
//var str = pattern.exec(a);
//alert(str.length);
//alert(pattern.exec(a));
//alert(a[0]); //匹配到整个字符串abc
//alert(a[1]); //匹配到第1个分组(a?(b?(c?)))
//alert(a[2]); //匹配到第2个分组(b?(c?))
//alert(a[3]); //匹配到第3个分组(c?)

//var pattern = /([a-z]+(?=gle))/; //goo后面必须跟着gle才捕获
//str = 'google';
//alert(pattern.exec(str));

//var str = ']';
//var pattern = /\]/;  //用'\'来转义正则里面的特殊字符
//alert(pattern.exec(str));

//var pattern = /^\d+/mg; //限定了首匹配，并开启换行模式
//var str = '1.baidu\n2.goole\n3.bing';
//var result = str.replace(pattern, '#'); //将数字替换成'#'
//alert(result);

//检查邮政编码
//var str = 'this is 224000'; //规则是必须6位，必须数字，第一位不为0
//var pattern = /^[1-9][0-9]{5}$/;
//alert(pattern.test(str));

//检查文件压缩包
//var str = '12-+3.zip'; //文件名：字母、数字，然后 . zip/gz/rar/7z
//var pattern = /^[\w\-\+]+\.zip|gz|rar|7z/;
//alert(pattern.test(str));

//验证简单电子邮件名称
//var str = 'rayalienkisss_sdoods.sdccs-sdsd@gmail.com';
////var pattern = /^[\w\-\+\=]+[\@][\w]+[\.][\w]+/;
//var pattern = /^([\w\.\-\+\=])+@([\w\.\-])+\.([\w\.])+$/;
//alert(pattern.test(str));

//function ae() {
//    var sum = 0;
//    for (var i = 0; i < arguments.length; i++) {
//        sum = sum + arguments[i];
//    };
//    return sum;
//};
//alert(ae(1,2,1));

//var box = function (num1, num2) {
//    return num1 + num2;
//}
//alert(box(1, 2));
//alert(typeof box);

//function box1(box2, num1) {
//    return box2 + num1;
//};
//function box2(num2) {
//    return num2 + 10;
//};
//var result = box1(box2(15), 10);
//alert(result);

//function box1(box2, num1) {
//    return box2(num1) + num1;
//};
//function box2(num2) {
//    return num2 + 10;
//};
//var result = box1(box2, -7);
//alert(result); 

//function box(num) {
//    if (num <= 1) {
//        return 1;
//    } else {
//        return num * arguments.callee(num - 1);
//    }
//};

//alert(box(4)); 

//this.color = 'red'
//var box = {
//    color: 'blue',
//    sayColor : function() {
//        document.write( .color);
//    }
//};

//alert(this.color);
//box.sayColor();

//window.color = 'red';

//function sayColor() {
//    alert(this.color);
//}

//sayColor();

//var box = {
//    color: 'blue',
//};

//box.getSayColor = sayColor;

//box.getSayColor();

//function box(name,age) {
//    alert(age + name + arguments[2]);
//}
//box('ray',32,'aaa');

function box(a,b) {
    return a + b;
};

function box2(a, b) {
    return box.apply(this,[a,b]);
};

alert(box2(1, 2));
