////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Copyright © 2015, Marrion Stepehen Egling
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if ((msg.from === 'content') && (msg.instruction === 'showPageAction')) {
        chrome.pageAction.show(sender.tab.id);
    }
    else if((msg.from === 'content') && (msg.instruction === 'hidePageAction')) {
		chrome.pageAction.hide(sender.tab.id);
    }
    else if((msg.from === 'content') && (msg.instruction === 'save')) {
		localStorage.setItem(msg.name, msg.content);
	}
	else if((msg.from === 'content') && (msg.instruction === 'remove')) {
		localStorage.removeItem(msg.name);
	}
	else if((msg.from === 'content') && (msg.instruction === 'search')) {
		sendResponse({content: localStorage.getItem(msg.name)}); 
	}
	else if((msg.from === 'content') && (msg.instruction === 'getFeatured')) {
		for(var i=0, len=localStorage.length; i<len; i++) {
			var key = localStorage.key(i);
			var value = localStorage[key];
			if(value == localStorage.getItem(localStorage.getItem('zzzzzfeatureditem576'))){
			sendResponse({content: i});
			}
			else if(i==localStorage.length-1){
				sendResponse({content: null});
			}
		}
		//Zero Entries
		if(localStorage.key(0)== null){
			sendResponse({content: null});
		}
	}
	else if((msg.from === 'content') && (msg.instruction === 'next')) {
		if((msg.num<0)&&(localStorage.length!=0)){
			var num = localStorage.length+msg.num;
			if(localStorage.getItem('zzzzzfeatureditem576') != null){num = localStorage.length+msg.num-1;}else{num = localStorage.length+msg.num;}
			while((num)<0){
				if(localStorage.getItem('zzzzzfeatureditem576') != null){
					num=localStorage.length+num-1;
					if((localStorage.length==1)&&(localStorage.getItem('zzzzzfeatureditem576') != null)) break;
				}
				else{
					num=localStorage.length+num;
					if((localStorage.length==1)&&(localStorage.getItem('zzzzzfeatureditem576') != null)) break;
				}
			}
			sendResponse({content: localStorage.getItem(localStorage.key(num)), respNum: num});
		}
		else{sendResponse({content: localStorage.getItem(localStorage.key(msg.num)), respNum: msg.num});} 
	}
	else if((msg.from === 'content') && (msg.instruction === 'saveFeatured')) {
		
		localStorage.setItem('zzzzzfeatureditem576', msg.content);
	}
	else if((msg.from === 'content') && (msg.instruction === 'removeFeatured')) {
		
		localStorage.removeItem('zzzzzfeatureditem576');
	}
});