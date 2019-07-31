var n1 = 10;

function fun1() {
    var n2 = 20;
    function fun2() {
        var n3 = 30;
        console.log(n1)
    }
    fun2();
}

fun1()