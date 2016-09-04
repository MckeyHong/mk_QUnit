// 同strictEqual使用方法，只是變為當actual !== expected為測試通過
QUnit.test("a test in notStrictEqual", function (assert) {
    assert.notStrictEqual(1, "1", "String '1' and number 1 have the same value but not the same type");
    assert.notStrictEqual(2, "2", "String '2' and number 2 have the same value but not the same type");
});