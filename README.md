## Nipplejs Meteor Package

Wraps [nippleJS](http://yoannmoinet.github.io/nipplejs/): A virtual joystick for touch capable interfaces.

I added a simple watch-function over the nipplejs events base (just to move some Meteor-friendly code over).

### Simple Usage

```javascript
//render on your outermost template
Template.layout.onRendered(function() {
	// will bind to the body and trigger every 300ms of force > 1.
	new Nipple().watch(function(data) {
		// data: { x: -1/0/1, y: -1/0/1, raw: nipplejsData }
		if(data.x || data.y) {
			Player.move(data.x, data.y);
			//You could: Session.set('motion', data);
		}
	});
});
```

`watch(options, function(data) { })` may also take options.
```javascript
{
	// minimum duration between updates (ms)
	minWait: 300;
	// degrees of slack on up/down/left/right (0 gives breaks at 45 degrees, no overlap)
	margin: 22.5;
	// force threshold before update (0 all -> 2 never)
	force: 1.00;
}
```

### Advanced Usage

Use the underlying nipplejs API. See [nippleJS docs](http://yoannmoinet.github.io/nipplejs/)
```javascript
var nipplejs = new Nipple(nippleOptions);
nipplejs.on('move', function(type, data) {
	//do something with data	
});
```

### Notes

Might need some cleanup if attached to a template that gets rendered many times. Not sure if/how it would work if you want multiple nipples.