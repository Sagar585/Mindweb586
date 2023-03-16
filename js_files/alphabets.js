var words = document.getElementById("spelling");
function spell(spells) {
  words.innerText = spells;
}

function a() {
  let a = document.getElementById("AlphaA");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");
  
  if ("speechSynthesis" in window) {
      
      let demo = document.getElementById("AlphaA");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("A; for; Apple");
          speechSynthesis.speak(msg);
          spell("A For APPLE");
          target1.innerHTML = "<img src=../assets/alphabets/A-img/apple.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/A-img/Aeroplane.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=../assets/alphabets/A-img/Arrow.jpg width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function b() {
  let a = document.getElementById("AlphaB");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaB");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("B; for; Ball");
          speechSynthesis.speak(msg);
          spell("B For BALL");
          target1.innerHTML = "<img src=../assets/alphabets/B-img/ball width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/B-img/bird width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/B-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function c() {
  let a = document.getElementById("AlphaC");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaC");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("C; for; Cat");
          speechSynthesis.speak(msg);
          spell("C For CAT");
          target1.innerHTML = "<img src=../assets/alphabets/C-img/cat.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/C-img/cow.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/C-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function d() {
  let a = document.getElementById("AlphaD");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaD");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("D; for; Dog");
          speechSynthesis.speak(msg);
          spell("D For DOG");
          target1.innerHTML = "<img src=../assets/alphabets/D-img/dog.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/D-img/doll width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/D-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function e() {
  let a = document.getElementById("AlphaE");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaE");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("E; for; Elephant");
          speechSynthesis.speak(msg);
          spell("E For ELEPHANT");
          target1.innerHTML = "<img src=../assets/alphabets/E-img/elephant.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/E-img/egg.png width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/E-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function f() {
  let a = document.getElementById("AlphaF");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");
  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaF");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("F; for; Fish");
          speechSynthesis.speak(msg);
          spell("F For FISH");
          target1.innerHTML = "<img src=../assets/alphabets/F-img/fish.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/F-img/fan.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/F-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function g() {
  let a = document.getElementById("AlphaG");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaG");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("G; for; Grapes");
          speechSynthesis.speak(msg);
          spell("G For GRAPES");
          target1.innerHTML = "<img src=../assets/alphabets/G-img/grapes.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/G-img/goat.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/G-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function h() {
  let a = document.getElementById("AlphaH");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaH");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("H; for; Hen");
          speechSynthesis.speak(msg);
          spell("H For HEN");
          target1.innerHTML = "<img src=../assets/alphabets/H-img/hen.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/H-img/horse.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/H-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function i() {
  let a = document.getElementById("AlphaI");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaI");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("I; for; Ice-cream");
          speechSynthesis.speak(msg);
          spell("I For ICE-CREAM");
          target1.innerHTML = "<img src=../assets/alphabets/I-img/ice-cream.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/I-img/ink.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/I-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function j() {
  let a = document.getElementById("AlphaJ");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaJ");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("J; for; Joker");
          speechSynthesis.speak(msg);
          spell("J For JOKER");
          target1.innerHTML = "<img src=../assets/alphabets/J-img/joker.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/J-img/jug.png width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/J-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function k() {
  let a = document.getElementById("AlphaK");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaK");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("K; for; Kite");
          speechSynthesis.speak(msg);
          spell("K For KITE");
          target1.innerHTML = "<img src=../assets/alphabets/K-img/kite.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/K-img/kangaroo.png width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/K-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function l() {
  let a = document.getElementById("AlphaL");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaL");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("L; for; Lion");
          speechSynthesis.speak(msg);
          spell("L For LION");
          target1.innerHTML = "<img src=../assets/alphabets/L-img/lion.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/L-img/lamp.png width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/L-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function m() {
  let a = document.getElementById("AlphaM");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaM");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("M; for; Mango");
          speechSynthesis.speak(msg);
          spell("M For MANGO");
          target1.innerHTML = "<img src=../assets/alphabets/M-img/mango.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/M-img/monkey.png width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/M-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function n() {
  let a = document.getElementById("AlphaN");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaN");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("N; for; Net");
          speechSynthesis.speak(msg);
          spell("N For NET");
          target1.innerHTML = "<img src=../assets/alphabets/N-img/net.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/N-img/neck.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/N-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function o() {
  let a = document.getElementById("AlphaO");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaO");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("O; for; Orange");
          speechSynthesis.speak(msg);
          spell("O For ORANEG");
          target1.innerHTML = "<img src=../assets/alphabets/O-img/orange.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/O-img/owl.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/O-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function p() {
  let a = document.getElementById("AlphaP");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaP");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("P; for; Parrot");
          speechSynthesis.speak(msg);
          spell("P For PARROT");
          target1.innerHTML = "<img src=../assets/alphabets/P-img/parrot.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/P-img/pen.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/P-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function q() {
  let a = document.getElementById("AlphaQ");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaQ");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("Q; for; Queen");
          speechSynthesis.speak(msg);
          spell("Q For QUEEN");
          target1.innerHTML = "<img src=../assets/alphabets/Q-img/queen.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/Q-img/question-mark.png width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/Q-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function r() {
  let a = document.getElementById("AlphaR");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaR");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("R; for; Rabbit");
          speechSynthesis.speak(msg);
          spell("R For RABBIT");
          target1.innerHTML = "<img src=../assets/alphabets/R-img/rabbit.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/R-img/robot.png width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/R-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function s() {
  let a = document.getElementById("AlphaS");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaS");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("S; for; Sun");
          speechSynthesis.speak(msg);
          spell("S For SUN");
          target1.innerHTML = "<img src=../assets/alphabets/S-img/sun.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/S-img/steel.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/S-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function t() {
  let a = document.getElementById("AlphaT");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaT");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("T; for; Table");
          speechSynthesis.speak(msg);
          spell("T For TABLE");
          target1.innerHTML = "<img src=../assets/alphabets/T-img/table.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/T-img/top.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/T-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function u() {
  let a = document.getElementById("AlphaU");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaU");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("U; for; Umbrella");
          speechSynthesis.speak(msg);
          spell("U For UMBRELLA");
          target1.innerHTML = "<img src=../assets/alphabets/U-img/umbrella.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/U-img/unicorn.webp width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/U-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function v() {
  let a = document.getElementById("AlphaV");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");
  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaV");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("V; for; Van");
          speechSynthesis.speak(msg);
          spell("V For VAN");
            target1.innerHTML = "<img src=../assets/alphabets/V-img/van.png width=250px height=250px/>";
            target2.innerHTML = "<img src=../assets/alphabets/V-img/violin.png width=200px height=200px/>";
            target3.innerHTML ="<img src=Images/V-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function w() {
  let a = document.getElementById("AlphaW");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaW");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("W; for; Watch");
          speechSynthesis.speak(msg);
          spell("W For WATCH");
          target1.innerHTML = "<img src=../assets/alphabets/W-img/watch4.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/W-img/wire.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/W-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function x() {
  let a = document.getElementById("AlphaX");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaX");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("X; for; Xmas-Tree");
          speechSynthesis.speak(msg);
          spell("X For XMAS-TREE");
          target1.innerHTML = "<img src=../assets/alphabets/X-img/xmas-tree.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/X-img/xylophone.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/X-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function y() {
  let a = document.getElementById("AlphaY");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaY");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("Y; for; Yatch");
          speechSynthesis.speak(msg);
          spell("Y For YATCH");
          target1.innerHTML = "<img src=../assets/alphabets/Y-img/yatch.jpg width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/Y-img/yak.webp width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/Y-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}

function z() {
  let a = document.getElementById("AlphaZ");
  let target1 = document.getElementById("image1");
  let target2 = document.getElementById("img2");
  let target3 = document.getElementById("img3");

  
  if ("speechSynthesis" in window) {
      let demo = document.getElementById("AlphaZ");
      demo.onclick = () => {
          let msg = new SpeechSynthesisUtterance("Z; for; Zebra");
          speechSynthesis.speak(msg);
          spell("Z For ZEBRA");
          target1.innerHTML = "<img src=../assets/alphabets/Z-img/zebra.png width=250px height=250px/>";
          target2.innerHTML = "<img src=../assets/alphabets/Z-img/zip.jpg width=200px height=200px/>";
          target3.innerHTML ="<img src=Images/Z-img/ width=200px height=200px />";
    };
  }
  console.log("Clicked on a button");
}
