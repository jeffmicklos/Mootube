
// Yo, this is a Mootools class for embedding YouTube videos just by setting links to YouTube.
// I, Jeff Micklos, built it so please let me know if you need help! jeffmicklos at gmail dot com
// Feel free to check out my portfolio too, www.onwebtape.com/me

var Mootube = new Class({

	Implements: Options,
	
	options: { 
		which: 'mootube',
		removeLink: true,
		details: true,
		controller: 'controller.php'
	},
	
	initialize: function(options){
		this.setOptions(options);    		
		if(this.options.details===true) { this.getData(); }
		else { this.renderEmbed(); }
		
	},
	
	getData: function() {
		var links=$$('a[rel='+this.options.which+']'); 
		var ids='';
		var that=this;
		
		for(var i=0;i<links.length;i++){
			
			if(links[i].getProperty('href').contains('watch?v=')) { var id=links[i].getProperty('href').split('watch?v='); }
			else if(links[i].getProperty('href').contains('v/')) { var id=links[i].getProperty('href').split('v/'); }
		
			ids+=id[1]+'|';	
		
		}
		
		var myRequest = new Request({
			url: that.options.controller, 
			method: 'get', 
			onSuccess: function(responseText) { that.ajax_renderEmbed(JSON.decode(responseText)); }
		}).send('ids='+ids);
		    	
	},
	
	ajax_renderEmbed: function(object) {
	    		
		var links=$$('a[rel='+this.options.which+']');
		
		for(var i=0;i<links.length;i++){
		
			var description  = new Element('div', {id: 'mootube_description'});
			var rel=$(document.body).getElement('a[href='+links[i].getProperty('href')+']');
			
			var el = new Element('div',{'html':object[i].html}).inject(rel,'after');
			description.inject(el,'after');
			
			var descrip=
			object[i].title
			+ ' on YouTube by '
			+ object[i].author_name
			description.set('text',descrip);  
						
			if(this.options.removeLink===true) { rel.destroy(); }
		
		}
	}
});