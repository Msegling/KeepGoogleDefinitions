////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Copyright © 2015, Marrion Stepehen Egling
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var counter = 0;
var featured = null;
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    //On definition
	try {
		var GoogleLogo =  document.getElementById('lga').getElementsByTagName('img')[0];
	}
	catch(e)
	{
		var Definition =  document.getElementById('uid_0').getElementsByClassName('lr_dct_sf_h')[0];
        if (typeof(Definition) != 'undefined' && Definition != null)
        {
			//Show page_action
			chrome.extension.sendMessage({
				from:    'content',
				instruction: 'showPageAction'
			});
		
			//restrict element creation times
			var elementExists = document.getElementById("InsertedSaveButton");
			if (!elementExists){
				//Construct the button once
				var newbutton = document.createElement("button");
				newbutton.setAttribute("id","InsertedSaveButton");
				newbutton.setAttribute("style","position: absolute; z-index:500; background: #fff; font-weight: normal; float: right; right:0; margin-top: 35px; color:grey" );
				newbutton.setAttribute("class","lsbb kpbb");
				newbutton.innerText = "Save";
				document.getElementById("topstuff").appendChild(newbutton);
			}
			
			//Check if definition is stored in local storage
			chrome.extension.sendMessage({
			from:    'content',
			instruction: 'search',
			name: document.getElementById('uid_0').getElementsByTagName("span")[0].innerText}, 
			function(response){
				//If exists give user the ability to remove
				if(response.content != null){
					setButton("remove");	
				}
				//If doesnt not exist, give user the ability to save
				else{
					setButton("save");
				}
			});
		}
		else
		{
			//hide page_action
			chrome.extension.sendMessage({
			from:    'content',
			instruction: 'hidePageAction'
		});
		}
	}
		
	//On New tab
		var MostVisitedTab =  document.getElementById('most-visited');
	    if (typeof(MostVisitedTab) != 'undefined' && MostVisitedTab != null)
        {
			document.getElementById('most-visited').remove();
			
			//Add next and previous buttons
			var Next = document.createElement("div");
			Next.setAttribute("id","next");
			Next.setAttribute("class","vk_ard");
			Next.setAttribute("style","-webkit-transform: rotate(-90deg); float:right; margin-top:90px; cursor:pointer;" );
			document.getElementById('prm-pt').appendChild(Next);
			
			//request next definition
			Next.onclick = function() {		
				counter++;	
				Display(counter,'next');
			};
			
			var Previous = document.createElement("div");
			Previous.setAttribute("id","previous");
			Previous.setAttribute("class","vk_ard");
			Previous.setAttribute("style","-webkit-transform: rotate(90deg); float:left; margin-top:90px; cursor:pointer;" );
			document.getElementById('prm-pt').appendChild(Previous);
			
			//request previous definition
			Previous.onclick = function() {		
				counter--;	
				Display(counter, 'previous');
			};
			
			//Insert the definition
			var Container = document.createElement("div");
			Container.setAttribute("id","DefinitionContainer57");
			document.getElementById('prm-pt').appendChild(Container);
			//insert featured definition
			Display('featured',null);
			


			//Add the google style sheet
			var style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML = ".greybutton87{color:#E5E5E5}.bluebutton77{color:#4285F4}#prm-pt{width:800px;}#DefinitionContainer57{text-align: left; margin-top:20px; width:675px;}.vk_dgy{color:#545454 !important}.vk_gy{color:#878787 !important}.vk_lgy{color:#bababa !important}.vk_blgy{border-color:#bababa}.vk_bk{color:#212121 !important}.vk_fl a{color:#878787}.vk_fl a:hover{color:#1a0dab}.vk_ans{font-weight:lighter !important;margin-bottom:5px}.vk_ans{font-size:xx-large !important}.vk_ans.vk_long{font-size:20px !important}.vk_h{font-weight:lighter !important}.vk_h{font-size:x-large !important}.vk_sh,.vk_hs,.vk_med{font-weight:lighter !important}.vk_sh{font-size:medium !important}.vk_txt{font-weight:lighter !important}.vk_txt{font-size:small !important}._yz{font-weight:lighter !important}.vk_cdns{font-size:13px !important}._ks{font-weight:bold !important}body,.g,html,.std,.c h2,h1,#cdr_min,#cdr_max,.cpbb,.kpbb,.kprb,.kpgb,.kpgrb,.ksb{font-family:arial,sans-serif}.vk_ans,.vk_h,.vk_sh,.vk_txt,._yz{font-family:arial,sans-serif-light,sans-serif}._ks,._vm{font-family:arial,sans-serif-medium,sans-serif}.vk_c,.vk_cxp,#rhs ._CC{-webkit-box-shadow:0px 1px 4px 0px rgba(0,0,0,0.2);box-shadow:0px 1px 4px 0px rgba(0,0,0,0.2)}#rhs ._CC{border:none;margin-left:2px}.vk_c,.vk_cxp{background-color:#fff;position:relative}.vkc_np{margin-left:-20px;margin-right:-20px}._Vi,.ts ._Vi{padding-left:20px}._Wi,.ts ._Wi{padding-right:20px}.vk_pt,.ts .vk_pt{padding-top:20px}._Kid{padding-bottom:20px}.vk_c,.vk_cxp{margin-left:-8px;margin-right:-35px}.vk_c,.vk_cxp,.vk_ic{padding:20px 20px 24px}.vk_c .vk_c,.vk_c .vk_cxp{-webkit-border-radius:0;-webkit-box-shadow:none;background-color:transparent;border:0;box-shadow:none;margin:0;padding:0;position:static}.vk_cxp{padding-top:30px;padding-bottom:34px}.vk_c_cxp{margin-top:10px;margin-bottom:10px}.vk_gbb{border-bottom:1px solid #eee}.vk_gbr{border-right:1px solid #eee}.vk_gbt{border-top:1px solid #eee}.vk_cf{margin:0 -20px 0 -20px;padding:16px 20px 16px 20px}.vk_cf a,.vk_cf a:link,a.vk_cf,a.vk_cf:link{color:#878787}ol li{list-style:none}.vk_cf a:hover,a.vk_cf:hover{color:#1a0dab}.vk_slic{display:inline-block;margin-top:-3px;margin-right:16px;position:relative;height:24px;width:24px;vertical-align:middle}.vk_sli,.vk_slih{border:none;position:absolute;top:0;left:0;height:24px;width:24px}a:hover .vk_sli,.vk_slih{display:none}a:hover .vk_slih,.vk_sli{display:inline-block}.vk_cba{padding:10px;margin-top:10px;margin-bottom:-10px;font-size:14px !important}.vk_spc{height:16px;width:100%}.vk_ra{-webkit-transform:rotate(90deg)}.vk_arc{border-top:1px solid #ebebeb;cursor:pointer;height:0px;margin-bottom:-23px;overflow:hidden;padding:20px 0;text-align:center}.vk_ard{top:-11px}.vk_aru{bottom:-6px}.vk_ard,.vk_aru{background-color:#e5e5e5;margin-left:auto;margin-right:auto;position:relative}.vk_ard,.vk_aru{height:6px;width:64px}.vk_ard:after,.vk_ard:before,.vk_aru:after,.vk_aru:before{content:' ';height:0;left:0;position:absolute;width:0}.vk_ard:after,.vk_ard:before,.vk_aru:after,.vk_aru:before{border-left:32px solid rgba(229,229,229,0);border-right:32px solid rgba(229,229,229,0)}.vk_ard:before{border-top:16px solid #e5e5e5;top:6px}.vk_aru:before{border-bottom:16px solid #e5e5e5;bottom:6px}.vk_ard:after{top:0}.vk_ard:after{border-top:16px solid #fff}.vk_aru:after{bottom:0}.vk_aru:after{border-bottom:16px solid #fff}.vk_bk.vk_ard,.vk_bk.vk_aru{background-color:#212121}.vk_bk.vk_ard:before{border-top-color:#212121}.vk_bk.vk_aru:before{border-bottom-color:#212121}._vm{font-size:11px !important;padding:6px 8px}#center_col ._vm{margin:0 -35px 0 -8px;padding:6px 20px 0}#rhs ._vm{margin-left:2px;padding-bottom:5px;padding-top:5px}._vm,._vm a{color:#878787 !important;text-decoration:none}._vm a:hover{text-decoration:underline}._srb.vk_c{padding-top:24px;padding-bottom:20px}._srb .vk_ans{margin-bottom:0;word-wrap:break-word}._srb .vk_gy{margin-bottom:5px}._xk{background-color:#ebebeb;height:1px}.vk_tbl{border-collapse:collapse}.vk_tbl td{padding:0}.xpdclps,.xpdxpnd{overflow:hidden}.xpdclps,.xpdxpnd{-webkit-transition:max-height 0.3s}.xpdxpnd,.xpdopen .xpdclps,.xpdopen .xpdxpnd.xpdnoxpnd{max-height:0}.xpdopen .xpdxpnd{max-height:none}.xpdopen .xpdbox .xpdxpnd,.xpdopen .xpdbox.xpdopen .xpdclps{max-height:0}.xpdopen .xpdbox.xpdopen .xpdxpnd,.xpdopen .xpdbox .xpdclps{max-height:none}.xpdclose ._o0,.xpdopen ._BU{display:none}.mn-dwn-arw,._Bs{border-width:5px 4px 0 4px !important}.kno-ecr-pt{}.kno-ecr-pt{color:#000;font-family:arial,sans-serif-light,sans-serif;display:inline;font-size:30px;font-weight:normal;position:relative;-webkit-transform-origin:left top;transform-origin:left top}.shop__a{text-decoration:none}.shop__a{color:#1a0dab}.shop__a:active{color:#1a0dab}.shop__clear{clear:both}.shop__secondary,.shop__secondary:link,.shop__secondary:visited{color:#666}a.shop__secondary,.shop__a.shop__secondary{text-decoration:none}.shop__a:hover{cursor:pointer;text-decoration:underline}a.shop__secondary:hover,.shop__a.shop__secondary:hover{text-decoration:underline}#ss-box{background:#fff;border:1px solid;border-color:#c9d7f1 #36c #36c #a2bae7;left:0;margin-top:.1em;position:absolute;visibility:hidden;z-index:103}#ss-box a{display:block;padding:.2em .31em;text-decoration:none}#ss-box a:hover{background:#4d90fe;color:#fff !important}a.ss-selected{color:#222 !important;font-weight:bold}a.ss-unselected{color:#1a0dab !important}.ss-selected .mark{display:inline}.ss-unselected .mark{visibility:hidden}.lr_dct_sf_h {padding-top: 10px;}#ss-barframe{background:#fff;left:0;position:absolute;visibility:hidden;z-index:100};.lr_mh{font-size:medium}.lr_sh{margin-bottom:12px}.lr_mh{margin-bottom:15px}._yGh .lr_container{padding-bottom:0}.lr_container{padding-bottom:20px}.kp-blk .lr_container .vk_arc{margin-top:10px;margin-bottom:0}.lr_container.mod{line-height:normal}.g-blk{position:relative}.kp-blk a{text-decoration:none}.kp-blk .mod:first-child{padding-top:20px}.kp-blk ._axe .mod:first-child{padding-top:0}.kp-blk ._G1d .mod:first-child{}.kp-blk ._grf,.kp-blk .mod:not(._tN){padding-left:20px;padding-right:20px;}.kp-blk{-webkit-box-shadow:0px 1px 4px 0px rgba(0,0,0,0.2);box-shadow:0px 1px 4px 0px rgba(0,0,0,0.2)}#center_col .kp-blk{margin-left:-8px;margin-right:-35px;position:relative}#rhs .kp-blk{line-height:1.24;margin:6px -32px 0 2px}#rhs .kp-blk .mod:first-child{padding-top:15px}#rhs .kp-blk .mod:not(._tN){padding-left:15px;padding-right:15px}#rhs .g-blk.rhsvw{border:0;padding:0}.rfli .kp-blk{background:#fff;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.kp-blk .g:not(.g-blk){margin:0}hr._Xfc{background-color:rgba(0,0,0,0.1);border:0;height:1px;margin:0}.kp-blk>.vk_arc,.kp-blk>div>.vk_arc{margin:0}.kp-blk._CCd .vk_arc{margin-top:0}.kp-blk .g{margin-bottom:0}._Gjc{width:100%;text-align:right;font-size:11px !important}._Gjc a:hover{text-decoration:underline}.lr_dct_ent{padding-bottom:20px;font-size:small;word-wrap:break-word}.kp-blk .lr_dct_ent{padding-bottom:10px}.lr_dct_ent:not(:first-of-type){padding-top:20px}div.xpdxpnd>.lr_dct_ent{padding-top:20px}.lr_dct_ent_hi{font-size:small;position:relative;top:-8px}.lr_dct_ent_ph{font-size:large}._Iig{font-size:large}.lr_dct_spkr{height:16px;width:16px;margin:0px 2px 4px 5px;vertical-align:middle;display:none}.lr_dct_spkr_on,.lr_dct_spkr:hover{opacity:1.0}.lr_dct_spkr_off{opacity:0.55}.lr_dct_sf_sen{padding-top:10px}.lr_dct_sf_subsen{display:list-item;list-style-type:disc;font-size:xx-small;margin-left:25px;padding-top:5px}._Jig{font-size:small}._Kig{font-size:medium}.lr_dct_nyms_ttl{font-style:italic;vertical-align:top;white-space:nowrap}.lr_dct_more_btn{cursor:pointer;color:#1a0dab}.lr_dct_more_btn:hover,.lr_dct_more_btn:active{text-decoration:underline}.lr_dct_ths{color:black;display:list-item;font-size:xx-small;list-style-type:disc;margin-left:25px;padding-top:5px}.lr_dct_ths>div{color:#878787;font-size:small}.lr_dct_more_txt,.lr_dct_more_blk,.lr_dct_more_btn{}.lr_dct_lbl_box{background-color:#eee;display:inline-block;color:#777;padding:4px 6px;text-transform:uppercase;font-size:x-small;margin-top:-1px}.lr_dct_lbl_inl{margin-left:6px}.lr_dct_lbl_blk{margin-right:6px}.lr_dct_trns{padding-top:18px}.kp-blk .lr_dct_trns{padding-bottom:0 !important;padding-top:10px}.lr_dct_trns_h{display:inline-block}.lr_dct_trns_sel_cnt{-webkit-border-radius:0 0 2px 2px;display:inline-block;overflow:hidden;padding-left:5px;position:relative;vertical-align:middle}.lr_dct_trns_sel_browser{text-indent:5px}.lr_dct_trns_sel{-webkit-appearance:button;appearance:button;background:url(//ssl.gstatic.com/ui/v1/disclosure/grey-disclosure-arrow-up-down.png) 100% no-repeat whiteSmoke;background-position-x:166px;background-position-y:center;border:1px solid gainsboro;-webkit-border-radius:2px;border-radius:2px;font-size:13px;line-height:20px;outline:none;padding:5px 0;overflow:hidden;width:180px}.lr_dct_trns_sel:hover{background-color:#f8f8f8;border-color:#c6c6c6;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1)}.lr_dct_trns_sel:focus{border-color:#1878f0}.lr_dct_trns_sel:disabled{background-color:#fff;border-color:#f3f3f3;color:#b8b8b8}._wzh{cursor:pointer;position:absolute;z-index:9002}._Nzh,._Pzh{bottom:0;cursor:pointer;left:0;position:fixed;right:0;text-align:center;top:0;z-index:9000}._Nzh:after,._Pzh:after{content:'';display:inline-block;height:100%;vertical-align:middle}._Azh{cursor:default;display:inline-block;min-height:10px;min-width:10px;padding:0;position:relative;text-align:left;z-index:9001;vertical-align:middle}._Bzh{background-image:url(//ssl.gstatic.com/gb/images/spinner_32.gif);left:50%;position:fixed;top:50%}._nAh{background-color:rgba(0,0,0,0.8)}._oAh{background-color:rgba(245,245,245,0.85)}._wzh{height:24px;opacity:.78;right:32px;top:32px;width:24px}._wzh:hover{opacity:1}._Bzh{background-size:20px 20px;height:20px;margin-left:-10px;margin-top:-10px;width:20px}.xpdbox.xpdopen ._Axg,.xpdclose ._Bxg{display:none}._LJ{line-height:1.2;position:relative}#rhs .kp-blk ._LJ{line-height:1.24}._LJ .exp-txt-c{color:#777;font-size:16px;margin:0 15px;position:absolute}._WGh .exp-txt-c{right:0;text-align:left}._dHh .exp-txt-c{bottom:8px;left:0;right:0;}._qxg .exp-txt-c{ margin-top: -15px; left:79px}._rxg .exp-txt-c{left:0}#center_col ._WGh .exp-txt-c{top:10px}#rhs ._WGh .exp-txt-c{top:10px}._LJ._qxg .vk_ard,._LJ._qxg .vk_aru{margin-left:15px}._LJ._rxg .vk_ard,._LJ._rxg .vk_aru{margin-left:auto;margin-right:15px}._xxg ._wxg{position:absolute;left:50%;margin-left:-20px;top:-20px}.vk_arc:focus{outline:none}";
			document.getElementsByTagName('head')[0].appendChild(style);
			
		var createddonationbtn =  document.getElementById('donatebutton789');
		if (typeof(createddonationbtn) == 'undefined' || createddonationbtn == null)
		{
			var donationbtn = document.createElement('a');
			donationbtn.setAttribute("href","https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=N5R6NW7GZQC3U");
			donationbtn.setAttribute("id","donatebutton789");
			donationbtn.setAttribute("style","margin-top:-500px; position: absolute; bottom:0; right:0; margin-bottom:50px; margin-right:50px;");
			"margin-top:-500px; position: absolute; bottom:0; right:0; margin-bottom:50px; margin-right:50px;"
			donationbtn.innerHTML = "<img src='https://openmerchantaccount.com/img2/ui_donate_coffee.png' style='width:70px; height:70px;' border='0'/>";
			document.getElementsByTagName('html')[0].appendChild(donationbtn);
		}
			
		}
});

function setButton(type)
{
	var button = document.getElementById("InsertedSaveButton");
	if(type == "save"){
		//Create a save button
		button.innerText = "Save";	
		
		//Send save request
		button.onclick = function() {
			setButton("remove");			
			chrome.extension.sendMessage({
			from:    'content',
			instruction: 'save',
			name:  document.getElementById('uid_0').getElementsByTagName("span")[0].innerText,
			content: document.getElementById('uid_0').parentNode.parentNode.innerHTML});
		};
	}
	else if(type == "remove"){
		//Create a remove button
		button.innerText = "Discard";
							
		//Send remove request
		button.onclick = function() {
			setButton("save");
			chrome.extension.sendMessage({
			from:    'content',
			instruction: 'remove',
			name:  document.getElementById('uid_0').getElementsByTagName("span")[0].innerText});
		};
	}
}

function Display(inum, action)
{
	if(inum =="featured")
	{
		chrome.extension.sendMessage({
		from: 'content',
		instruction: 'getFeatured'}, 
		function(response){
			if(response.content != null){
				counter = response.content;
				featured = response.content;
				Display(response.content);
			}
			else{
				Display(0,action);
			}
			});
	}
	else{
		chrome.extension.sendMessage({
		from: 'content',
		num: inum,
		instruction: 'next'}, 
		function(response){
				var StartsCorrect = false;
				if(response.content != null){
					StartsCorrect = (response.content.slice(0, '<div class="kp-blk">'.length) == '<div class="kp-blk">');
				}
				
				if((inum == 0)&&((!StartsCorrect)||(response.content == null)))
				{
					//no definitions added
					document.getElementById('DefinitionContainer57').innerHTML = "<div class='kp-blk'><div id='uid_0' jsl='$t t-ORWJ5-27JLU;$x 0;' class='r-iPEhAZTUBqZQ xpdbox xpdclose' data-kxi='1'><div jsaction='addvideo:r.vwL2DCRsksY;openvideo:r.-nOhqZ5dyyQ' data-rtid='itF4U1eW0OPE' jsl='$t t-lKYOVJkjQo4;$x 0;' class='r-itF4U1eW0OPE'><div class='lr_container mod'><div class='lr_dct_ent' data-hveid='27'><div class='vk_ans' style='margin-bottom:0'><span data-dobid='hdw'>Getting Started</span></div><div><div><ol class='lr_dct_sf_sens'><li><div><div class='lr_dct_sf_sen vk_txt'><div style='float:left'><strong>1</strong>. </div><div style='margin-left:20px'><div class='_Jig'><div style='display:inline' data-dobid='dfn'><span>Search and save your favourite definitions on Google.</span></div></div></div></div></div></li><li><div><div class='lr_dct_sf_sen vk_txt'><div style='float:left'><strong>2</strong>. </div><div style='margin-left:20px'><div class='_Jig'><div style='display:inline' data-dobid='dfn'><span>Flip through your personal archive of saved definitions right here.</span></div></div><div style='margin-left:-13px'><ul><li class='xpdxpnd' data-mh='37' data-mhc='1' style='max-height: 0px;' aria-hidden='true'></li></ul></div></div></div></div></li><li><div><div class='lr_dct_sf_sen vk_txt'><div style='float:left'><strong>3</strong>. </div><div style='margin-left:20px'><div class='_Jig'><div style='display:inline' data-dobid='dfn'><span>Finally, use the round feature button to put your favourite definition first in line, or delete unwanted definitions with the discard cross. </span></div></div></div></div></div></li></ol></div></div></div><div class='xpdxpnd _xk vkc_np' data-mh='1px' style='max-height: 0px;' aria-hidden='true'></div></div><g-lightbox class='itF4U1eW0OPE--g9fkrfdTRw r-ivk9i6VdhPjY' jsaction='lcm_lightbox_closed:r._nThxx3Ly3Y' data-rtid='itF4U1eW0OPE' jsl='$x 1;$t t-E3TsdUH5yNI;$x 0;' data-df='false'><div jsaction='lcm_load_lightbox:r.-iuA36fg1FY;lcm_load_close_lightbox:r.WFD0SSLEXaQ;lcm_open_lightbox:r.hpaJUo6HoPo;lcm_close_lightbox:r.LbYo-7Yc6_A;r.GeNp278NnsA' data-rtid='ivk9i6VdhPjY' jsl='$x 1;'><div class='_Nzh _nAh ivk9i6VdhPjY-20H57zYdxbY' style='display:none'><div class='_Pzh' jsaction='r.j_L2KfX_GHE' data-rtid='ivk9i6VdhPjY' jsl='$x 2;' data-ved='0ahUKEwihiJmata3JAhUHPBQKHc4PAEQQ-UMIHzAA'><div class='_Bzh ivk9i6VdhPjY-rviw6i-qB2Y' style='display:none'></div></div><div class='_wzh' jsaction='r.j_L2KfX_GHE' data-rtid='ivk9i6VdhPjY' jsl='$x 3;' data-ved='0ahUKEwihiJmata3JAhUHPBQKHc4PAEQQ-EMIIDAA'></div><div class='_Azh ivk9i6VdhPjY-0078sLar460' style='display:none'><div class='_rAh lr-lightbox-content itF4U1eW0OPE-vHhAzc29eDw r-i35vbcwQ54EY' jsl='$t t-OVm_vE5V0b0;$x 0;' style='display: none;'></div></div></div></div></g-lightbox></div></div><script>(function(){var id='uid_0';var elem = document.getElementById(id);if (elem.querySelector('.xpdxpnd:not(.xpdnoxpnd):not(.xpdnoarr)')){elem.querySelector('.xpdarr').style.display = '';}else {elem.setAttribute('data-nlvc',1);}})();</script></div>";
			 }
			 else if(response.content == null){
				 	counter=0;
					Display(0,null);
			 }
			 else{
				 if(response.content.slice(0, '<div class="kp-blk">'.length) == '<div class="kp-blk">') {
					 document.getElementById('DefinitionContainer57').innerHTML = response.content; 
					if((response.respNum == featured)||(inum == featured)){Insertbtns(true);}
					else Insertbtns(false);
				 }
				 else{
					 if(action == 'next')
					 {
						 Display(inum+1,action);
					 }
					 else if(action == 'previous')
					 {
						 Display(inum-1,action);
					 }
					 //else Display(0,null);
				}
			 }
	   	});
	}

}

function Insertbtns(featured)
{
		//Add hyperlink to definition
		//Create a new definition 
		var original = document.getElementById('uid_0').getElementsByTagName('span')[0];
		var replacement = document.createElement('a');
		// Grab all of the original's attributes, and pass them to the replacement
		for(var i = 0, l = original.attributes.length; i < l; ++i){
			var nodeName  = original.attributes.item(i).nodeName;
			var nodeValue = original.attributes.item(i).nodeValue;
		
			replacement.setAttribute(nodeName, nodeValue);
		}
		// Persist contents
		replacement.innerHTML = original.innerHTML;
		// Switch
		original.parentNode.replaceChild(replacement, original);
		replacement.setAttribute("style","cursor:pointer; color:black");
		replacement.setAttribute("href","/search?q=define+"+original.innerText);
		
		//Remove redundent features
		try
		{
		document.getElementById('uid_0').childNodes[1].remove();
		document.getElementsByClassName('lr_dct_ent_ph')[0].remove();
		}catch(e){}
		
		//Create the feature and discard btns
		var discard = document.createElement("div");
		var text = document.createTextNode('╳');
		discard.appendChild(text);
		discard.setAttribute("id","discardbtn67");
		discard.setAttribute("class","greybutton87");
		discard.setAttribute("title","discard");
		discard.setAttribute("style","cursor:pointer; float: right; font-size:13px; margin-top:10px; margin-left:2px; font-weight: bold;");
		document.getElementById('uid_0').getElementsByClassName('vk_ans')[0].appendChild(discard);	
		
		var feature = document.createElement("div");
		var text = document.createTextNode('○');
		feature.appendChild(text);
		feature.setAttribute("id","featurebtn67");
		if(featured == true) {
			feature.setAttribute("class","bluebutton77");
			feature.setAttribute("title","remove feature");
		}
		else {
			feature.setAttribute("class","greybutton87");
			feature.setAttribute("title","feature");
		}
		feature.setAttribute("style","cursor:pointer; float: right" );
		document.getElementById('uid_0').getElementsByClassName('vk_ans')[0].appendChild(feature);

		document.getElementById('featurebtn67').onmouseover = function() { 
			this.className='bluebutton77';
     	};
		document.getElementById('featurebtn67').onmouseout = function() { 
			if(featured == true) feature.setAttribute("class","bluebutton77"); else feature.setAttribute("class","greybutton87");
     	};
		
		document.getElementById('discardbtn67').onmouseover = function() { 
         this.className='bluebutton77'; 
     	};
		document.getElementById('discardbtn67').onmouseout = function() { 
         this.className='greybutton87'; 
     	};
		
		featuredAddOnclick(featured, original);
		
		//remove on discard btn
		discard.onclick = function() {
			chrome.extension.sendMessage({
			from:    'content',
			instruction: 'remove',
			name:  original.innerText});
			
			//Display new definition
			Display(counter-1,previous);
		};
		
		
		
}
function featuredAddOnclick(f, o)
{
		feature =document.getElementById('featurebtn67');
		if(f == true)
		{
			feature.setAttribute("class","bluebutton77");
			feature.setAttribute("title","remove feature");
			//allow featured removal
			feature.onclick = function() {
				featured = null;	//remove featured 
				chrome.extension.sendMessage({
					from:    'content',
					instruction: 'removeFeatured',
				});
					document.getElementById('featurebtn67').onmouseover = function() { 
						this.className='bluebutton77';
					};
					document.getElementById('featurebtn67').onmouseout = function() { 
						feature.setAttribute("class","greybutton87");
					};	
			featuredAddOnclick(false, o);
			};
		}
		else
		{
			feature.setAttribute("class","greybutton87");
			feature.setAttribute("title","feature");
			//allow featured
			feature.onclick = function() {
				if(counter<0){
					//Convert counter to a positive value
					chrome.extension.sendMessage({
						from:    'content',
						num: counter,
						instruction: 'next'},
						function(response){featured = response.respNum
					});
				}
				else{featured = counter;}
				chrome.extension.sendMessage({
					from:    'content',
					instruction: 'saveFeatured',
					content: o.innerText
				});
					document.getElementById('featurebtn67').onmouseover = function() { 
						this.className='bluebutton77';
					};
					document.getElementById('featurebtn67').onmouseout = function() { 
						this.className='bluebutton77';
					};
			featuredAddOnclick(true, o);
			};
		}
}

observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});