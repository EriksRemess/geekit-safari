safari.application.addEventListener("popover", function(){
	var iframes = document.getElementsByTagName('iframe')
	if(typeof iframes != "undefined"){
		for(var i = iframes.length; i-- > 0;){
			var iframe = iframes[i]
			iframe.parentNode.removeChild(iframe)
		}
	}
	try {
		document.getElementsByTagName('img')[0].style.display = "block"
		var tab = safari.application.activeBrowserWindow.activeTab
		document.body.innerHTML += '<iframe src="https://geekli.st/link/modal/?url='+escape(tab.url)+'&title='+escape(tab.title)+'" scrolling="no"></iframe>'
		document.getElementsByTagName('iframe')[0].addEventListener('load', function(){
			document.getElementsByTagName('iframe')[0].className += "loaded"
			document.getElementsByTagName('img')[0].style.display = "none"
		})
	} catch(e){}
	document.getElementsByTagName('a')[0].addEventListener('click', function(){
		safari.self.hide()
	})
}, true)