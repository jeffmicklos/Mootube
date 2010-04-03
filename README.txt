<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<head>
	<title>Mootube by Jeff Micklos</title>
	
	<!--*******************************************************-->
    <!-- This is the class needs both Core & More to run --> 
	<script type="text/javascript" src="http://onwebtape.com/js/mootools-1.2.3-core-yc.js"></script>
	<script type="text/javascript" src="http://onwebtape.com/js/mootools-1.2.3.1-more.js"></script>
	<script type="text/javascript" src="mootube.js"></script>
	<!--*******************************************************-->

	<script type="text/javascript">
	
	window.addEvent('domready',function() {
	
		// *******************************************************
    	// This is where we instantiate the class, the only param is an object.
    	// Here we are telling it to look for links WHICH have the rel="mootube" and once it is found, remove the link.
    	// The third parameter is the URL to make your AJAX request, this request will get data from YouTube. 
		var moostance = new Mootube({
			which: 'mootube',
			removeLink: false,
			controller: 'http://api.onwebtape.com/mootube/controller.php'
			});
		// *******************************************************
		
	});
	
	
	</script>
	
	</head>
	<body>
	
	<!--*******************************************************-->
    <!-- Just tie rel="mootube" onto any Youtube links and you will be good! --> 
	<a href="http://www.youtube.com/watch?v=GoLJJRIWCLU" rel="mootube">Jigsaw</a>
	<br />
	<a href="http://api.onwebtape.com/mootube/mootube.zip" class="outsidelink">Download the code!</a>
	<!--*******************************************************-->
	
	</body>
</html>