// 只需一個參數，如果參數等於true則測試通過
QUnit.test("ok test", function (assert) {
    // test success
    assert.ok(true, "true succeeds");
    assert.ok("non-empty", "non-empty string succeeds");
    assert.ok("1", "1 string succeeds");

    // test false
    assert.ok(false, "false fails");
    assert.ok(0, "0 fails");
    assert.ok(NaN, "NaN fails");
    assert.ok("", "empty string fails");
    assert.ok(null, "null fails");
    assert.ok(undefined, "undefined fails");
});