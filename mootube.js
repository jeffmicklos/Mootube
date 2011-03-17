
// Yo, this is a Mootools class for embedding YouTube videos just by setting links to YouTube.
// I, Jeff Micklos, built it so please let me know if you need help! jeffmicklos at gmail dot com
// Feel free to check out my portfolio too, www.onwebtape.com/me

var Mootube = new Class({

	Implements: Options,

	options: { 
		which: 'mootube',
		removeLink: true,
		showDetails: true,
		controller: 'controller.php'
	},

	initialize: function(options) {
		this.setOptions(options);
		this.getData();
		
	},

	getData: function() {
		var links = $$('a[rel='+this.options.which+']'),
			that = this,
			videos = [];

		for(var i=0; i < links.length; i++) {

			videos.push(links[i].getProperty('href'));

		}

		new Request({
			url: that.options.controller,
			method: 'get',
			onSuccess: function(responseText) {
				that.renderEmbed(JSON.decode(responseText));
			}
		}).send('videos=' + videos.join('|'));

	},

	enderEmbed: function(object) {

		var links = $$('a[rel='+this.options.which+']');
		
		for(var i=0;i<links.length;i++){
		
			var currentLink = $(document.body).getElement('a[href='+links[i].getProperty('href')+']');
			var el = new Element('div',{
						'html': object[i].html
					}).inject(currentLink, 'after');

			if(this.options.showDetails) {

				var description = object[i].title + ' by ' + object[i].author_name;

				new Element('div', {
					id: 'mootube_description'
				}).set('text', description).inject(el, 'after');

			} 

			if(this.options.removeLink) {
				currentLink.destroy();
			}

		}
	}
});