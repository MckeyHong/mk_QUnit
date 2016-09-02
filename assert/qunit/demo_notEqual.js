// 同 equal 使用方法，只是變為當actual != expected 為測試通過(不嚴謹判斷)
QUnit.test('a test', function (assert) {
    assert.notEqual(1, '2', 'String \'2\' and number 1 don\'t have the same value');
});