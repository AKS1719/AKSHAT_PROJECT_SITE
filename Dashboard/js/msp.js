
// const hourEl = document.getElemenhan tById("pm");

var e;
var seekbar;


function Seeking()
{
    var seekbar = document.getElementById('seekbar');
    seekbar.value = 0;
    var audio = document.getElementById("audio");

    function setupSeekbar() {
        seekbar.min = audio.startTime;
        seekbar.max = audio.startTime + audio.duration;
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
    }
    seekbar.onchange = seekAudio;
    audio.ontimeupdate = updateUI;
    audio.addEventListener('durationchange', setupSeekbar);
    audio.addEventListener('timeupdate', updateUI);
}
function myfunc(parameter)
{
    e1.innerHTML = `
    <audio hidden class="audio-tg" autoplay controls src="/Dashboard/music/${parameter}.mp3" type="audio/mp3" id="audio"></audio>
    <input type="range" step="any" id="seekbar"></input>
    <p>
        <button type="button" onclick="audio.play();">Play</button>
        <button type="button" onclick="audio.pause();">Pause</button>
        <button type="button" onclick="audio.currentTime = 0;"><< Rewind</button>
    </p>
`; 
    Seeking();
}


window.onload = function()
{
    e1 = document.getElementById("pm");
    e1.innerHTML="choose one track to play";
}

