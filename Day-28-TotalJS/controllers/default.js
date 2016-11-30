exports.install = function() {
	F.route('/', view_index);
	// or
	// F.route('/');
};

function view_index() {
	var self = this;
	self.view('index');
}