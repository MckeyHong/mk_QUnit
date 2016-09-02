QUnit.test("assert.async() test", function (assert) {
    var done  = assert.async(),
        input = $('#test-input').focus();
    setTimeout(function () {
        assert.equal(document.activeElement, input[0], 'Input was focused');
        done();
    });
});

QUnit.test( "two async calls", function( assert ) {
    assert.expect(2);

    var done1 = assert.async(),
        done2 = assert.async();

    setTimeout(function () {
        assert.ok(true, 'test resumed from async operation 1');
        done1();
    }, 500);
    setTimeout(function () {
        assert.ok(true, 'test resumed from async operation 2');
        done2();
    }, 150);
});

QUnit.test('multiple call done()', function (assert) {
    assert.expect(3);
    var done = assert.async(3);

    setTimeout(function () {
        assert.ok(true, 'first call done.');
        done();
    }, 500);

    setTimeout(function () {
        assert.ok(true, 'second call done.');
        done();
    }, 500);

    setTimeout(function () {
        assert.ok(true, 'third call done.');
        done();
    }, 500);
});