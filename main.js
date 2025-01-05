function foo(arg) {
    return arg();
}

function bar() {
    console.log('bar');
}

foo(bar);

const foo1 = function (arg) {
    return arg;
};

foo1(1);

// 기본값 매개변수
function foo2(arg) {
    console.log(arg);
}

foo2();

function foo3(arg, ...rest) {
    console.log(rest); // (arguments);
}

foo3(1, 2, 3, 4);

// 함수 생성
function foo4() {
    console.log('foo4');
};

foo4();

const foo5 = function() {
    console.log('foo5');
};

foo5();

const foo6 = new Function("console.log('foo6')");

foo6();

const foo7 = () => { console.log('foo7') };

foo7();

(function foo8() {
    console.log('foo8')
})();

function foo9 (arg) {
    if(arg++ === 3) return;

    console.log(arg)
    foo9(arg);
}

foo9(1);

function foo10 (arg) {
    function bar() {
        console.log(arg);
    }
    bar();
}

foo10(1);

function foo11 (arg) {
    arg();
}

foo11(() => {
    console.log(1);
});
