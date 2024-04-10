
// const hourEl = document.getElemenhan tById("pm");


function Seeking()
{
    
    startTime = document.getElementById("startTime");
    EndTime = document.getElementById("EndTime");
    var seekbar = document.getElementById('seekbar');
    seekbar.value = 0;
    var audio = document.getElementById("audio");

    function setupSeekbar() {
        seekbar.min = audio.startTime;
        seekbar.max = audio.startTime +audio.duration;
        min = Math.trunc(audio.duration/60);
        sec = Math.trunc(audio.duration%60)
        if(min<=9)min = "0"+min;
        if(sec<=9)sec = "0"+sec;
        EndTime.innerHTML = min+":"+sec;
    }
    audio.ondurationchange = setupSeekbar;

    function seekAudio() {
        audio.currentTime = seekbar.value;
    }

    function updateUI() {
        var lastBuffered = audio.buffered.end(audio.buffered.length-1);
        seekbar.min = audio.startTime;
        seekbar.max = lastBuffered;
        seekbar.value = audio.currentTime;
        min = Math.trunc(audio.currentTime/60);
        sec = Math.trunc(audio.currentTime%60)
        if(min<=9)min = "0"+min;
        if(sec<=9)sec = "0"+sec;
        startTime.innerHTML =min+":"+sec;
    }
    seekbar.onchange = seekAudio;
    audio.ontimeupdate = updateUI;
    audio.addEventListener('durationchange', setupSeekbar);
    audio.addEventListener('timeupdate', updateUI);
}

obj = {
    1:"Different World",
    2:"Arcade",
    3:"At My Worst",
    4:"Doraemon",
    5:"Duniya Song",
    6:"Faded",
    7:"Fallin for you",
    8:"First Kiss",
    9:"Friend Like you",
    10:"Gaddi Lambprghini",
    11:"Guitar Sikhda",
    12:"Hosanna",
    13:"I love You",
    14:"Kabhi kabhi aditi",
    15:"Kaise hua",
    16:"Kale je libas di ",
    17:"Kalla sohna nai",
    18:"Love me like you do ",
    19:"main koi aise geet gaun",
    20:"Na ja",
    21:"Pahla Pyar",
    22:"Play Date",
    23:"Qaafirana",
    24:"Raabta",
    25:"Rang Gora",
    26:"Shape of You",
    27:"Closer",
    28:"Wallian",
    29:"Zalima",
    30:"Zara sa",
}

function myfunc(parameter)
{
    var trackThubmnail = document.getElementById("trackThumbnail");
    trackThubmnail.innerHTML=`<img src="/Dashboard/thumnails/${parameter}.jpeg" height="50px" alt="">`
    e1 = document.getElementById("pm");
    e1.innerHTML = obj[parameter];
    e2.innerHTML = `
    <audio hidden class="audio-tg" autoplay controls src="/Dashboard/music/${parameter}.mp3" type="audio/mp3" id="audio"></audio>
    <div class="controls">
    <div class="seekingTime" style="display: flex;">
    <h6 id="startTime" style="margin-right: 2px;">00</h6><input type="range" name="seekbar" id="seekbar"><h6 id="EndTime" style="margin-left: 2px;">00</h6>
 </div>
               <div id="controlsBtn">
                  <button type="button" onclick="changePrev(${parameter});"><img src="/Dashboard/images/prev.png" alt=""></button>
                  <button type="button" onclick="playPause();" id="playPause"><img src="/Dashboard/images/pause.png" alt=""></button>
                  <button type="button" onclick="changeNext(${parameter});"><img src="/Dashboard/images/next.png" alt=""></button>
               </div>
            </div>
`; 
    Seeking();
}

function changeNext(parameter)
{
    if(parameter==30)
    {
        myfunc(1);
    }
    else{
        myfunc(++parameter);
    }
}

function changePrev(parameter)
{
    if(parameter==1)
    {
        myfunc(30);
    }
    else{
        myfunc(--parameter);
    }
}
function playPause()
{
    var playPause = document.getElementById("playPause");
    if(audio.paused==false)
    {
        audio.pause();
        playPause.innerHTML = `<img src="/Dashboard/images/pause.png" alt="">`
    }
    else{
        audio.play();
        playPause.innerHTML = `<img src="/Dashboard/images/play.png" alt="">`
    }
}

window.onload = function()
{
   
    e2 = document.getElementById("controls");
    document.getElementById("seekbar").value=0;
}

