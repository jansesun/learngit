(function() {
	var fs = require('fs'),
		libraryName = process.argv[2].toUpperCase(),
		tmpl = [
			'//inherit <%libraryName%>',
			'if(window.<%libraryName%>) {',
			'\t(function(){',
			'\t\tvar _<%libraryName%> = <%libraryName%>, i;',
			'\t\twindow.<%libraryName%>_ = function() {',
			'\t\t\tfor(i in _<%libraryName%>) {',
			'\t\t\t\tif(!<%libraryName%>[i]) {',
			'\t\t\t\t\t<%libraryName%>[i] = _<%libraryName%>[i];',
			'\t\t\t\t}',
			'\t\t\t}',
			'\t\t};',
			'\t}());',
			'}',
			'//your codes go here',
			'//inherit <%libraryName%>',
			'if(window.<%libraryName%>_) {',
			'\t<%libraryName%>_();',
			'}'
	].join('\n');
	if(!libraryName) {
		console.error('Please don\'t forget your library name');
	} else {
		fs.mkdir('out', function(err) {
			fs.writeFile('./out/' + libraryName.toLowerCase() + '.js', tmpl.replace(/<%libraryName%>/g, libraryName), function(err) {
				if(!err) {
					console.log('library ' + libraryName + ' generated successfully');
				} else {
					console.log(err);
				}
			});
		});
	}
}());

