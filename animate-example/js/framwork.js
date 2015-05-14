
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
