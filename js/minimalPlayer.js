/*
    Jquery plugin HTML5 CSS3	
	minimalPlayer audio player version 1.0
	Creator: dasdesign
	Created: 22/4/2015
	
	browsers supported: IE10 and later,Mozilla,Safari,Chrome,Opera!	
*/
(function( $ ) {
	//create plug in name function!
	$.fn.minimalPlayer=function(options){
		
		//Create the variables needed for the player!
		var container=$(this);
		var knobWidth=0;
		var knobHeight=0;
		var audioPlayer;
		var seekEnabled=false;
		var isPlay=false;
		
		var play_svg='<path fill="#ED1C24" d="M8.3,4.9l9.9,6.5c0.8,0.5,0.8,1.7,0,2.2l-9.9,6.5C7.3,20.7,6.2,20,6.2,19V6C6.2,5,7.3,4.3,8.3,4.9z"/>';
		var pause_svg='<path fill="#ED1C24" d="M10.9,4.7H6.8c-0.3,0-0.5,0.2-0.5,0.5v14.7c0,0.3,0.2,0.5,0.5,0.5h4.1c0.3,0,0.5-0.2,0.5-0.5V5.2C11.4,4.9,11.2,4.7,10.9,4.7z"/>'+
		'<path fill="#ED1C24" d="M18.2,4.7h-4.1c-0.3,0-0.5,0.2-0.5,0.5v14.7c0,0.3,0.2,0.5,0.5,0.5h4.1c0.3,0,0.5-0.2,0.5-0.5V5.2C18.7,4.9,18.5,4.7,18.2,4.7z"/>';
		
		//Settings plugin
		var settings = $.extend({
			
			width: 50,
			height: 50,
			songs:[],
			autoStart: false,
			autoReplay: false,
			bgKnobColor:'',
			fgKnobColor:'',
			buttonColor:'',
			group: false,
			soundCloudID:'',
			
		}, options );
		
		//function initialize the player!
		function init(){
			createPlayer();
			playerEvents();
		}
		//function builsing the player!
		function createPlayer(){
			if(Modernizr.audio){				
				container.append('<div id="player"></div>');
				container.find('#player').append('<div id="knobSlider"><input class="knob" data-fgColor="'+settings.fgKnobColor+'" data-bgColor="'+settings.bgKnobColor+'" data-bColor="'+settings.buttonColor+'" data-displayInput="false" data-thickness=0.25 value="0"></div>')
				container.find('#player').append('<div id="play_pause"></div>');
				container.find('#play_pause').append('<div id="playBtn"><svg version="1.1" viewBox="0 0 25 25" preserveAspectRatio="xMinYMin slice">'+play_svg+'</svg></div>')
				.append('<div id="pauseBtn"><svg version="1.1" viewBox="0 0 25 25" preserveAspectRatio="xMinYMin meet">'+pause_svg+'</svg></div>');
				resetPlayer();
				knobWidth=settings.width;
				knobHeight=settings.height;
				container.find(".knob").knob({
						width: knobWidth,
						height: knobHeight,
						change : function(e){seekTrack();},
						released : function(e){seekStop();},
						release : function(e){seekStop();},
						clicked : function(e){seekStart();},
						hit : function(){seekStart();seekTrack();seekStop();}
				});
				var percentButton=Math.floor(settings.width*40)/100;	
				container.find('#play_pause').css({"width":percentButton+"px","height":percentButton+"px"});
				container.find("#player").append('<audio id="audio" autobuffer preload="auto"></audio>');
				audioPlayer=container.find("#audio")[0];
				container.find("#player").data("group",settings.group);
				createSongs(settings.songs);
				if(settings.autoStart){
					container.find("#audio").attr("autoplay","autoplay");
				}	
			}else{
				container.append('<div id="warning"><img src="assets/warning.png"/>Your browser not support HTML5 audio!</div>')
			}
		}
		//Function stop all players when and play one by one!
		function stopAll(target){
			if(target&&settings.autoStart){
				var startPoint=":not(:first)";
			}else{
				var startPoint="";
			}
			$("audio"+startPoint).each(function(index, element) {
				var parentPlayer=$(this).parent("#player");
				var currentStop=$(this)[0];
				if(parentPlayer.data('group')){
					currentStop.pause();
				}				
            });				
		}
		//Function check if clicked in in group
		function checkGroup(target){
			if(container.find("#player").data("group")){
				stopAll(target);
			}
		}
		//Reset player width,height!
		function resetPlayer(){
			if((settings.width && settings.height)!=null){
				container.find("#player").css({"width":settings.width+"px","height":settings.height+"px"});
			}
		}
		//Create Songs!
		function createSongs(currentTracks){
			var trackSources='';	
			for(var i=0; i<currentTracks.length; i++){				
				if(currentTracks[i]!=''){
					if(checkType(currentTracks[i])){
						creteSoundCloud(currentTracks[i]);
					}else{
						trackSources+='<source src="'+currentTracks[i]+'" type="audio/'+currentTracks[i].replace(/^.*\./, '')+'">'
					}
				}
			}	
			container.find("#audio").html(trackSources);
			audioPlayer.load();
			console.log(trackSources);
		}
		//Function check soundCloud id
		function checkType(path){
			var stringType=path.replace(/^.*\./, '')
			if(stringType!="mp3"&&stringType!="ogg"&&stringType!="wav"){
				return true;
			}else{
				return false;
			}
		}		
		//Function creteSoundCloud track path
		function creteSoundCloud(pathID){
			console.log("soundCloud...");
			var trackSources='';
			SC.initialize({
			  client_id: settings.soundCloudID
			});			
			SC.get("/tracks/"+pathID, {}, function(sound){
				trackSources+="<source src='"+sound.uri+"/stream?client_id="+settings.soundCloudID+"'>";
				container.find("#audio").html(trackSources);
				audioPlayer.load();
			});
		}
		//Function create player events!
		function playerEvents(){
			//begin loading			
			audioPlayer.addEventListener('loadstart',function(){						
				console.log("Start Player!");
				container.find(".knob").val(0).trigger('change');
				checkGroup(true);
			},false);
			//progress loading	
			audioPlayer.addEventListener('progress',function(){	
				console.log("Progress Sound!");			
			},false);
			//loaded metadata
			audioPlayer.addEventListener('loadedmetadata',function(){
				console.log("data loaded!");				
			},false);	
			//first frame load complete
			audioPlayer.addEventListener('timeupdate',updateRunTime,false);
			audioPlayer.addEventListener('play',playToPause,false);
			audioPlayer.addEventListener('pause',pauseToPlay,false);
			audioPlayer.addEventListener('ended',onEndPlayNext,false);
			
			container.find("#play_pause").on("click",playPauseAudio);			
			//error events  
			container.find("audio").on("error",errorSound);
			container.find("source").on("error",errorSound);
		}
		//Function return error sign!
		function errorSound(e){
			console.log("Error Loading/Playing Sound!");
			container.find('#play_pause').html('<img src="assets/warning.svg"/>');
			container.find("#play_pause").off("click");
			container.find("#play_pause").on("click",function(){
				alert("Error Loading Sound!");	
			});
		}
		//Function play pause button!
		function playPauseAudio(e){			
			if(audioPlayer.paused){
				checkGroup();
				audioPlayer.play();
			}else if(audioPlayer.played){
				audioPlayer.pause();
			}
		}
		//Play next track when ends previous track playing	
		function onEndPlayNext(){
			if(settings.autoReplay){
				audioPlayer.play();
				playToPause();
			}else{
				container.find(".knob").val(0).trigger('change');
				pauseToPlay();	
			}
		}
		//function manage the play to pause action when track stop playing
		function playToPause(){
			isPlay=true;
			container.find("#playBtn").css({"display":"none"});
			container.find("#pauseBtn").css({"display":"block"});
		}
		//function play the pause to play action when track start playing
		function pauseToPlay(){
			isPlay=false;
			container.find("#playBtn").css({"display":"block"});
			container.find("#pauseBtn").css({"display":"none"});
		}
		//Function update time song duration!
		function updateRunTime(){
			if(!seekEnabled && isPlay){	
				currentSeek=Math.floor((this.currentTime/this.duration)*100);			
				container.find(".knob").val(currentSeek).trigger('change');
			}
		}
		//function when start seek track bar
		function seekStart(){
			seekEnabled=true;	
		}
		//function when stop seek track bar
		function seekStop(){
			seekEnabled=false;					
		}
		//function when bar seeked with mouse
		function seekTrack(){
			if(seekEnabled){
				audioPlayer.currentTime=(container.find(".knob").val()/100)*audioPlayer.duration;
			}
		}
		init();
	}
})( jQuery );