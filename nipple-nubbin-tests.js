
Tinytest.add('Can I name a wizard?', function (test) {
	var name = RPGNames({ type: 'wizard' });
  test.equal(typeof name, "string");
  test.isTrue(name && name.length > 0, "Name has no length");
});

Tinytest.add('Can I name a dragon?', function (test) {
	var name = RPGNames({ type: 'dragon' });
  test.equal(typeof name, "string");
  test.isTrue(name && name.length > 0, "Name has no length");
});

Tinytest.add('Can I name a dragon wizard?', function (test) {
	var name = RPGNames({ type: 'all' });
  test.equal(typeof name, "string");
  test.isTrue(name && name.length > 0, "Name has no length");
});

Tinytest.add('Can I name a dragon wizard from cached options?', function (test) {
	var name = RPGNames();
  test.equal(typeof name, "string");
  test.isTrue(name && name.length > 0, "Name has no length");
});

Tinytest.add('Can I NOW name a thing that does not exist?', function (test) {
	var name = RPGNames({ type: 'does not exist' });
	//will use already loaded settings
  test.equal(typeof name, "string");
  test.isTrue(name && name.length > 0, "Name has no length");
});

Tinytest.add('Can I name from a custom source array?', function (test) {
	var name = RPGNames({ type: 'custom', source: ['bob','dave'] });
  test.equal(typeof name, "string");
  //because no similar parts, should always be one or the other
  test.isTrue(name === "bob" || name === "dave", "Name does not match dave or bob");
});