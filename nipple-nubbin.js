
Nipple = function(options, cb) {
	return this.init(options);
};

Nipple.prototype.watch = function(options, cb) {
	cb = (!cb && (typeof options === 'function') ? options : cb);
	options = (typeof options === 'object' && options ? options : {});

	if(cb) {
  	var minWait = options.minWait||300;
	  var margin = options.margin||22.5;
	  var force = options.force||1;

  	var lastWait = false;
	  window.nipple = new Nipple(function(type, data) {
	  	if(data.force >= force && data.angle) {
	  		var ticks = (new Date()).getTime();
	  		var waited = (lastWait ? ticks - lastWait : -1);

	  		if(!lastWait || waited > minWait) {
		  		var degree = data.angle.degree;
		  		if(degree || degree === 0) {
			  		var x = (degree < 45+margin || degree > 315-margin ? 1 : (degree > 135-margin && degree < 225+margin ? -1 : 0));
			  		var y = (degree > 45-margin && degree < 135+margin ? -1 : (degree > 225-margin && degree < 315+margin ? 1 : 0));
			  		if(x || y) {
				  		cb({ x: x, y: y, raw: data });
		  				lastWait = ticks;
				  	}
				  }
		  	}
	  	}
	  });
	}
};

Nipple.prototype.init = function(options, cb) {
	cb = (!cb && (typeof options === 'function') ? options : cb);
	options = (typeof options === 'object' && options ? options : {});

	var liveNipple = nipplejs.create(options);
	if(cb) {
		liveNipple.on('move', cb);
	}
	liveNipple.watch = this.watch.bind(this);
	return liveNipple;
};