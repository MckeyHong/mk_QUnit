// 期望預測結果
QUnit.test("a test", function (assert) {
    assert.expect(2);

    function calc (x, operation) {
        return operation(x);
    }

    var result = calc(2, function (x) {
        assert.ok(true, "calc() calls operation function");
        return x * x;
    });

    assert.equal(result, 4, "2 squared equals 4");
});