//inherit MX
if(window.MX) {
	(function(){
		var _MX = MX, i;
		window.MX_ = function() {
			for(i in _MX) {
				if(!MX[i]) {
					MX[i] = _MX[i];
				}
			}
		};
	}());
}
//your codes go here
//inherit MX
if(window.MX_) {
	MX_();
}