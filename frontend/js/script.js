function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const song = `Let's go (yeah, yeah, Neeko, you made that motherfuckin' beat? Ah, nah) You know it's Baby, nigga, hahaha Hah (Oh Lord, Jetson made another one), ha She wanna fuck with me, but I don't got the time (mmh, mmh) I just hopped off a private plane and went and hopped on 85 (yeah) Go call my chauffeur, bitch, 'cause I don't like to drive We in Suburbans back to back and we gon' fill 'em up with vibes (let's go) Fill 'em with vibes (yeah), get in and ride (yeah, yeah) And no, a nigga not blind (uh-uh) But I keep the stick and I'm firin' (bitch) I ain't met a nigga in life That's fuckin' with me, say he did, then he lyin' (mmh, mmh) Got so many vibes stuffed in the car We can fuck them hoes six at a time (no cap) I make them hoes say, "That nigga so fine" (ooh) "Girl, he got the dick you can feel in your spine" (yeah) Yeah, that what they say about Baby You know that them bitches don't play about Baby Baby should go run for president Look what God did, took his time with me (yeah, yeah) Got a red and white hoe like a peppermint (ooh) Book the hotel, take the vibes in She gon' fuck me and fuck on my brethren (uh) My brother 'nem, havin' three hoes in the king size I ain't finished yet (mmh), get another bitch (mmh) Got her ridin' dick and screamin', "Yeehaw" (mmh, mmh, mmh, mmh) Make me proud, girl, you a cowgirl (huh?) Did a handstand, I'm like, "Wow, girl" (okay, okay) Got me fuckin' her upside-down (ooh, mmh), baow, baow Yeah, we goin' dumb, say she wanna cum (mmh) I'm lookin' like, "When?" She lookin' like, "Now" Some more came in, say they want it too I tagged in my brother, bitch, I'm out (bye), I know She wanna fuck with me, but I don't got the time (mmh, mmh, yeah) I just hopped off a private plane and went and hopped on 85 (yeah) Go call my chauffeur, bitch, 'cause I don't like to drive We in Suburbans back to back and we gon' fill 'em up with vibes (let's go) She wanna fuck on me, but I don't got the time (mmh, mmh) I just hopped off a private plane and went and hopped on 85 (yeah) Go call my chauffeur, bitch, 'cause I don't like to drive We in Suburbans back to back and we gon' fill 'em up with vibes (look) Let's get on a jet (yeah), come give me some neck (yeah, yeah) She ain't pickin' up (huh?), and her nigga just called, she gon' send him a text I don't need no doc', bitch, you know I'm a dog, better send me the vet Ever made you a million? I tell 'em, "Riddle me that, " ain't offended me yet My bitch drink Bacardi, I'm in this bitch feelin' like 'Set (okurr), quarter mil' on my neck One-point-two on the crib, four hundred thou' on the whip, dickin' down your lil' bitch I'm 'bout to go buy me a coupe (Zoom) Pull up, make the doors raise the roof (yeah) Louis V army fatigue (yes, sir) Hop out with a pole like a troop (yeah, get in there) Baby Ray Allen from three (swish) You leave me open, I shoot (baow, baow) We like Martin and Pam at the hotel (uh) We kickin' hoes out, get the boot (mmh) These hoes catchin' bodies, they 'bout it (yeah) We having new vibes in the lobby (new vibes) That's wherever we go, ain't no problem (no problem) I just told a bitch no, she was childish (bye) Pulled up like She wanna fuck with me, but I don't got the time (mmh, mmh) I just hopped off a private plane and went and hopped on 85 (yeah) Go call my chauffeur, bitch, 'cause I don't like to drive We in Suburbans back to back and we gon' fill 'em up with vibes`;
const songArray = song.split(" ");
const num = Math.floor(Math.random() * 2);
const background = document.getElementById("background");
if (num === 0) {
  background.innerHTML += `<video autoplay width="${
    window.innerWidth
  }" height="${window.innerHeight}" loop id="vid"> <source src="vid${Math.floor(
    Math.random() * 4
  )}.mp4" type="video/mp4" /> </video>`;
  document.querySelector("html").addEventListener("click", function () {
    document.getElementById("vid").play();
  });
} else {
  document.querySelector("html").addEventListener("click", function () {
    const audio = document.querySelector("audio");
    audio.play();
  });
  background.innerHTML += `<img src="img${Math.floor(
    Math.random() * 5
  )}.png" alt"da baby1!!!" width="${window.innerWidth}" height="${
    window.innerHeight
  }">`;
}
async function changeTitle() {
  for (let i = 0; i < songArray.length; i++) {
    document.title = songArray[i];
    await sleep(250);
  }
}
changeTitle();
