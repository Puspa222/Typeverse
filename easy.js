// Description: This file contains the code for the type test.
str = `in a big, busy city, tall buildings reach up to the sky. these buildings have shiny windows that sparkle in the sunlight. the city is full of people rushing around, cars honking, and buses driving down the streets. but even in the middle of all this hustle and bustle, there are special places called parks. parks are like green islands in the sea of concrete. in the parks, there are big, old trees that give lots of shade. kids run around playing tag or swinging on swings, while grown-ups sit on benches and relax. sometimes, people bring their dogs to run and play, too.
now, let's think about the countryside, which is very different from the city. the countryside has wide, open spaces with rolling hills that go up and down like gentle waves. there are farms with red barns and white fences, where cows moo and chickens cluck. you can see fields of corn, wheat, and other crops growing tall under the sun. sometimes, there are forests with tall trees and little streams where you can hear birds singing and see squirrels scampering around.
imagine living in a cozy cottage in the countryside. these cottages are often surrounded by colorful gardens full of flowers like daisies, roses, and tulips. you might even see butterflies fluttering around and bees buzzing from flower to flower. in the evening, the sky is clear and full of twinkling stars, unlike the city where lights make it hard to see the stars.
now, let's take a trip to the beach. beaches are where the land meets the ocean. the sand is warm and golden, perfect for building sandcastles. the waves roll in and out, making a soothing sound. kids and adults love to splash in the water, surf on the waves, or just lie on the sand and soak up the sun. sometimes, you can find seashells of different shapes and colors scattered along the shore. there might be crabs scurrying sideways and seagulls flying overhead, looking for a snack.
another exciting place is the mountains. mountains are tall and majestic, with peaks that sometimes have snow on them, even in the summer. people go to the mountains to hike up the trails, breathe the fresh air, and enjoy the breathtaking views. there are also cool streams and lakes where you can fish or just dip your toes in the water. sometimes, you might spot deer, rabbits, or even a bear, if you're lucky and careful!
besides all these wonderful places, there's something amazing that connects us all: technology. technology includes things like smartphones, computers, and the internet. with a smartphone, you can call or send messages to friends and family, even if they live far away. you can also play games, listen to music, or watch videos. computers help us learn new things, do homework, and even talk to people in different countries. the internet is like a giant library where you can find information on almost anything you want to know. it's also a place where people share pictures, videos, and stories from their lives.
let's not forget about transportation. there are many ways to get from one place to another. in the city, there are buses, subways, and taxis that help people move around quickly. in the countryside, people might use cars, bikes, or even tractors to get where they need to go. for longer trips, airplanes fly high in the sky, taking people to different cities, countries, or even continents. trains also travel long distances, and some trains are super fast, zooming from one place to another in no time.
animals are another wonderful part of our world. pets like dogs and cats live with us in our homes and are like part of our families. they bring joy and companionship. in the wild, there are so many different animals, each with its own special way of living. there are fierce lions, gentle giraffes, clever dolphins, and colorful parrots. zoos and aquariums are places where we can see many of these animals up close and learn about them.
food is something everyone loves and needs. different places have different kinds of food. in the city, you can find restaurants serving food from all over the world. you might try pizza from italy, sushi from japan, tacos from mexico, or curry from india. in the countryside, you might eat fresh vegetables from the garden, milk from the cows, and eggs from the chickens. every meal is an adventure, with new flavors and dishes to try.
lastly, let's talk about seasons. there are four main seasons: spring, summer, fall, and winter. each season has its own special things to enjoy. in spring, flowers bloom, and baby animals are born. the weather gets warmer, and everything feels fresh and new. summer is hot and sunny, perfect for swimming, playing outside, and going on vacation. fall brings cooler weather, and the leaves on the trees change color to red, orange, and yellow. it's also time to harvest crops and enjoy holidays like halloween and thanksgiving. winter is cold, with snow in many places. people love to build snowmen, go sledding, and drink hot chocolate by the fire. winter holidays like christmas and hanukkah are filled with joy and celebration.
our world is full of wonderful places, amazing things, and exciting experiences. whether you're in a big city, the quiet countryside, a sunny beach, or the majestic mountains, there's always something new to see and do. technology keeps us connected, animals bring us joy, and every season offers its own special magic. life is an adventure, and there's always more to explore and enjoy. `;
let start = 0;
let end = 0;

b = str.split(".");
let text = "";
let tarea = document.querySelector(".type");
let ins = document.querySelector(".instruction");
let res = document.querySelector(".result");
tarea.setAttribute("class", "type blur");

for (i = 0; i < 15; i++) {
  let r = Math.floor(Math.random() * b.length);
  text += b[r] + ".";
  c = b[r].split(" ");
  tarea.innerHTML += "<span class='sentence'>";
  for (k = 1; k < c.length; k++) {
    d = c[k].split("");
    tarea.innerHTML += "<span class='word'>";
    for (j = 0; j < d.length; j++) {
      tarea.innerHTML += `<letter class='untype'>${d[j]}</letter>`;
    }
    if (k == c.length - 1) {
      tarea.innerHTML += "</span>";
    } else {
      tarea.innerHTML += `<letter class='untype'>\t</letter>`;
      tarea.innerHTML += "</span>";
    }
  }
  tarea.innerHTML += `<letter class='untype'>.</letter><letter class='untype'>\t</letter>`;
  tarea.innerHTML += "</span>";
}

let correct = 0;
let corr = document.querySelector(".correct");
let incorrect = 0;
let inco = document.querySelector(".incorrect");
let wpm = document.querySelector(".wpm");
let acc = document.querySelector(".acc");
let txt = "";

function findKeyPressed(event) {
  if (start == 1) {
    if (event.key === "Backspace") {
      txt = txt.slice(0, -1);
      h[txt.length].setAttribute("class", "untype active");
      h[txt.length + 1].setAttribute("class", "untype");
    } else if (event.key === " ") {
      txt += " ";
      for (i = txt.length - 1; i < txt.length; i++) {
        if (event.key === tarea.innerText[i]) {
          wco();
        } else {
          if (event.key === " ") {
            wio(0);
          } else {
            wio(1);
          }
        }
      }
    } else if (event.key.length > 1) {
      txt = txt;
    } else {
      txt += event.key;
      for (i = txt.length - 1; i < txt.length; i++) {
        if (event.key === tarea.innerText[i]) {
          co();
        } else {
          if (tarea.innerText[i] === " ") {
            io(0);
          } else {
            io(1);
          }
        }
      }
    }
  } else {
    if (event.key === "Enter" && end === 0) {
      start = 1;
      starttime();
      ins.setAttribute("class", "instruction hidden");
      tarea.setAttribute("class", "type");
    }
  }
}
let h = document.querySelectorAll(".untype");
function co() {
  h[txt.length].setAttribute("class", "untype active");
  h[txt.length - 1].setAttribute("class", "c");
}
function io(b) {
  h[txt.length].setAttribute("class", "untype active");
  if (b == 1) {
    h[txt.length - 1].setAttribute("class", "i");
  } else {
    h[txt.length - 1].setAttribute("class", "i wi wordi");
  }
}
function wco() {
  h[txt.length].setAttribute("class", "untype active");
  h[txt.length - 1].setAttribute("class", "c wordc");
  // h[txt.length-1].setAttribute("class","wc");
}
function wio(b) {
  h[txt.length].setAttribute("class", "untype active");

  if (b == 1) {
    h[txt.length - 1].setAttribute("class", "i wi");
  } else {
    h[txt.length - 1].setAttribute("class", "i wordi");
  }
}
t = document.getElementById("time");
count = 60;
function starttime() {
  const interval = setInterval(timer, 1000);
  function timer() {
    count--;
    if (count < -1) {
      clearInterval(interval);
    } else if (count === -1) {
      start = 0;
      end = 1;
      cal();
      wpm.innerHTML = correct;
      highs(correct);
      acc.innerText = parseInt((ccc * 100) / (ccc + iii)) + "%";
      res.setAttribute("class", "result update");
      tarea.setAttribute("class", "type dem hidden");
      ins.setAttribute("class", "instruction rel");
      ins.innerHTML = "Refresh the browser to restart.";
      clearInterval(interval);
    } else {
      t.innerText = count;
    }
  }
}
let hw = document.querySelector(".hwpm");
hw.innerHTML = localStorage.getItem("hwpm");
let incc = 0;
let inpp = 0;
let worc = 0;
let iii = 0;
let ccc = 0;
let twor = 0;
function cal() {

  let cw = document.querySelectorAll(`.word~.c,.word~.i`);

  for (i = 0; i < cw.length; i++) {
    if (
      cw[i].className == "c wordc" ||
      cw[i].className == "c wordi" ||
      cw[i].className == "c wi wordi"
    ) {
      worc = worc + 1;
      if (worc > twor) {
        if (incc == 0 && inpp > 0) {
          ++correct;
        } else {
          ++incorrect;
        }
        incc = 0;
        inpp = 0;
      }
      twor = worc;
    }
    if (cw[i].className == "i") {
      ++incc;
      ++iii;
    }
    if (cw[i].className == "c") {
      ++inpp;
      ++ccc;
    }
  }

 
}
function highs(s) {
  if (localStorage.getItem("hwpm") < s) {
    localStorage.setItem("hwpm", s);
  }
  hw.innerHTML = localStorage.getItem("hwpm");
}
h[txt.length].setAttribute("class", "untype active");

document.addEventListener("keydown", findKeyPressed);
