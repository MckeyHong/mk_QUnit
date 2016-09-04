// 同propEqual使用方法，只是變為當actual !== expected為測試通過(不嚴謹)
QUnit.test("notPropEqual test", function (assert) {
    function Foo (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    Foo.prototype.doA = function () {};
    Foo.prototype.doB = function () {};
    Foo.prototype.bar = 'prototype';

    var foo = new Foo(1, "2", []);
    var bar = new Foo("1", 2, {});
    assert.notPropEqual(foo, bar, "Properties values are strictly compared.");
});