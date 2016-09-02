// 使用 == 比較符，只可比較基本型別
QUnit.test('a test', function (assert) {
    assert.equal( 1, '1', 'String \'1\' and number 1 have the same value');
});

QUnit.test('equal test', function (assert) {
  assert.equal(0, 0, 'Zero, Zero; equal succeeds');
  assert.equal('', 0, 'Empty, Zero; equal succeeds');
  assert.equal('', '', 'Empty, Empty; equal succeeds');

  assert.equal('three', 3, 'Three, 3; equal fails');
  assert.equal(null, false, 'null, false; equal fails');
});