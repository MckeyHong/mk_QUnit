// 同 ok() 使用方法，只是反過來，判斷第一個參數為false則測試通過
QUnit.test('notOk test', function (assert) {
    assert.notOk(false, "false succeeds");
    assert.notOk("", "empty string succeeds");
    assert.notOk(NaN, "NaN succeeds");
    assert.notOk(null, "null succeeds");
    assert.notOk(undefined, "undefined succeeds");

    assert.notOk(true, "true fails");
    assert.notOk(1, "1 fails");
    assert.notOk("not-empty", "not-empty string fails");
});