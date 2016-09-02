// 使用 === 比較符，可比較基本型別與 object, array, regular expression, date, function
QUnit.test('deepEqual test', function (assert) {
    var unitData = {foo: 'bar'};
    // unit success
    assert.deepEqual(unitData, {foo: 'bar'}, 'Two objects can be the same in value');
    // unit error
    assert.deepEqual(unitData, {foo: 'bar2'}, 'Two objects can be the same in value');
});