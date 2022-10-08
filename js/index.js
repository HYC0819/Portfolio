AOS.init()

var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function number2words(n){
    if (n < 20) return num[n];
    var digit = n%10;
    if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
    if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " " + number2words(n%100));
    return number2words(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + number2words(n%1000): "");
}

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

anime({
    targets: '.title:first-of-type',
    translateY: -window.innerHeight/7,
    delay: 1500
}); 

var typewriter = new Typewriter(document.getElementsByClassName("title")[1], {
    loop: false
});

setTimeout(() => {
    typewriter.typeString("My name is Ho Yun")
    typewriter.start()

}, 3000)

setTimeout(() => {
    journeyButton = document.createElement("div")
    journeyButton.textContent = "My Journey"
    journeyButton.classList.add("journey")
    journeyButton.setAttribute("data-aos", "zoom-in")
    journeyButton.setAttribute("data-aos-duration", "1500")
    document.body.appendChild(journeyButton)

    var animation = anime({
        targets: '.journey',
        translateX: 1*window.innerWidth,
        translateY: -1*window.innerHeight,
        delay: function (el, i) { return i * 100; },
        duration: 500,
        direction: 'alternate',
        loop: false,
        autoplay: false,
        easing: 'easeInOutQuad',
        complete: function(anim) {
            anime({
                delay: 500,
                targets: ".wiper",
                translateX: -window.innerWidth,
                duration: 2000,
                easing: 'easeInOutQuad',
                complete: function(anim2) {
                    document.body.style.backgroundColor = "orange"
                    document.body.innerHTML = ""
                }
            })
        }
    });
    
    
    document.querySelectorAll(".journey").forEach((el)=> el.onclick = animation.play);
}, 6000)