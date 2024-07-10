// Description: This file contains the code for the type test.
str = `education is very important for everyone. it is the foundation of our future. from a young age we start learning basic skills like reading writing and math. these basic skills are essential for daily life. without the ability to read we cannot understand signs menus or books. without writing we cannot communicate effectively through letters emails or text messages. math helps us manage money cook meals and plan our time.
as we grow older education becomes more detailed. we start learning about different subjects such as science history and geography. science teaches us about the natural world from the smallest atoms to the vast universe. we learn about plants animals and the human body. history helps us understand the past and how it has shaped our present. we learn about ancient civilizations important events and influential people. geography helps us learn about different places and cultures around the world. we learn about mountains rivers and countries. each subject helps us understand the world better and prepares us for life.
education is not just about gaining knowledge. it also helps us develop critical thinking skills. these skills are important for solving problems and making good decisions. for example when we learn math we not only learn how to add and subtract but also how to approach and solve complex problems. this ability to think critically is useful in everyday life whether we are planning a budget troubleshooting a computer issue or deciding the best route to take on a trip.
education also plays a crucial role in our personal development. it helps us develop values and ethics. we learn the importance of honesty hard work and perseverance. these values are essential for success in life. honesty helps us build trust with others. hard work enables us to achieve our goals. perseverance helps us overcome challenges and setbacks. education also helps us develop social skills. in school we interact with other students and teachers. we learn how to communicate effectively and work in teams. these skills are important in the workplace and in everyday life.
higher education such as college or university opens up even more opportunities. it allows us to specialize in a particular field of interest. this can lead to a rewarding career. for example someone who studies medicine can become a doctor and help save lives. someone who studies engineering can design buildings and infrastructure that benefit society. higher education also helps us develop advanced skills and knowledge that are highly valued in the job market. this can lead to better job opportunities and higher salaries.
education also has a significant impact on society as a whole. it helps reduce poverty and inequality. when people are educated they have better job opportunities. they can earn higher incomes and provide a better quality of life for their families. education also promotes economic growth. an educated workforce is essential for a strong economy. it drives innovation and productivity. educated people are more likely to start businesses create jobs and contribute to economic development.
moreover education promotes peace and stability. it helps people understand different perspectives and reduces conflicts. educated people are more likely to participate in democratic processes and make informed decisions. they are also more likely to be tolerant and understanding of others. education helps build a more just and equitable society where everyone has the opportunity to succeed.
education is also important for health and well-being. it helps people make informed decisions about their health. for example they learn about the importance of a balanced diet and regular exercise. they also learn about the dangers of smoking and substance abuse. educated people are more likely to seek medical care when they need it. they are also more likely to support public health measures such as vaccinations. this leads to healthier communities and a better quality of life for everyone.
education also promotes gender equality. it gives everyone the chance to learn and succeed regardless of their gender. educated women are more likely to participate in the workforce and contribute to economic development. they are also more likely to have healthier families and make better decisions for their children. education empowers women and helps break the cycle of poverty and inequality.
in summary education is the key to a better life for individuals and society. it helps us gain knowledge and skills develop values and ethics and make informed decisions. it opens up opportunities for better jobs and higher incomes. it promotes peace stability and economic growth. it improves health and well-being. it promotes gender equality and empowers people. education is essential for a better future for everyone. `;

// Add event listener to the document once the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the necessary elements
  const tarea = document.querySelector(".type");
  const ins = document.querySelector(".instruction");
  const res = document.querySelector(".result");
  const wpm = document.querySelector(".wpm");
  const acc = document.querySelector(".acc");
  const hw = document.querySelector(".hwpm");
  const t = document.getElementById("time");


  tarea.setAttribute("class", "type hidden");
  // Set initial values
  let start = 0;
  let end = 0;
  let count = 60;
  let txt = "";
  let correct = 0;
  let incorrect = 0;
  let incc = 0;
  let inpp = 0;
  let worc = 0;
  let iii = 0;
  let ccc = 0;
  let twor = 0;

  // Split the text into sentences
  const sentences = str.split(".");

  // Generate the text with random sentences
  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[randomIndex];
    const words = sentence.split(" ");

    tarea.innerHTML += "<span class='sentence'>";
    for (let k = 1; k < words.length; k++) {
      const word = words[k];
      const letters = word.split("");

      tarea.innerHTML += "<span class='word'>";
      for (let j = 0; j < letters.length; j++) {
        tarea.innerHTML += `<letter class='untype'>${letters[j]}</letter>`;
      }
      if (k === words.length - 1) {
        tarea.innerHTML += "</span>";
      } else {
        tarea.innerHTML += `<letter class='untype'>\t</letter>`;
        tarea.innerHTML += "</span>";
      }
    }
    tarea.innerHTML += `<letter class='untype'>.</letter><letter class='untype'>\t</letter>`;
    tarea.innerHTML += "</span>";
  }

  // Get all the untyped letters
  const untypedLetters = document.querySelectorAll(".untype");

  // Set the first letter as active
  untypedLetters[txt.length].setAttribute("class", "untype active");

  // Function to handle key press event
  function findKeyPressed(event) {
    if (start === 1) {
      const typedChar = event.key;
      const currentChar = tarea.innerText[txt.length];

      if (typedChar === " ") {
        txt += " ";
        if (typedChar === currentChar) {
          wco();
        } else if (typedChar === " ") {
          // Handle incorrect space
          wio(1)
        } else {
          // Handle incorrect character
          wio(0);
        }
        
      } else if (typedChar.length === 1) {
        txt += typedChar;
        if (typedChar === currentChar) {
          co();
        } else {
          if (currentChar === " ") {
            io(1);
          } else {
            // Handle incorrect character
            io(0);
          }
        }
      } else if (typedChar === "Backspace") {
        // Handle backspace
        if (txt.length > 0) {
          txt = txt.slice(0, -1);

          untype();
        }
        
      } else {
        txt = txt;
      }}
    else {
      if (event.key === "Enter" && end === 0) {
        start = 1;
        starttime();
        ins.setAttribute("class", "instruction hidden");
        tarea.setAttribute("class", "type");
      }
    }
  }

  // Function to handle correct character
  function co() {
    untypedLetters[txt.length].setAttribute("class", "untype active");
    untypedLetters[txt.length - 1].setAttribute("class", "c");
  }

  // Function to handle incorrect character or space
  function io(b) {
    untypedLetters[txt.length].setAttribute("class", "untype active");
    if (b===1) {
      untypedLetters[txt.length - 1].setAttribute("class", "i wi wordi");
    } else {
      untypedLetters[txt.length - 1].setAttribute("class", "i ");
    }
  }

  // Function to handle correct word
  function wco() {
    untypedLetters[txt.length].setAttribute("class", "untype active");
    untypedLetters[txt.length - 1].setAttribute("class", "c wordc");
  }

  // Function to handle incorrect word
  function wio(b) {
    untypedLetters[txt.length].setAttribute("class", "untype active");
    if (b === 1) {
      untypedLetters[txt.length - 1].setAttribute("class", "i");
    } else {
      untypedLetters[txt.length - 1].setAttribute("class", "i");
    }
  }

  // Function to handle backspace
  function untype() {
    untypedLetters[txt.length ].setAttribute("class", "untype");
    untypedLetters[txt.length ].setAttribute("class", "untype active");
    untypedLetters[txt.length + 1].setAttribute("class", "untype");
  }

  // Function to start the timer
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

  // Function to calculate the statistics
  function cal() {
    const cw = document.querySelectorAll(`.word~.c,.word~.i`);

    for (let i = 0; i < cw.length; i++) {
      if (
        cw[i].className === "c wordc" ||
        cw[i].className === "c wordi" ||
        cw[i].className === "c wi wordi"
      ) {
        worc = worc + 1;
        if (worc > twor) {
          if (incc === 0 && inpp > 0) {
            ++correct;
          } else {
            ++incorrect;
          }
          incc = 0;
          inpp = 0;
        }
        twor = worc;
      }
      if (cw[i].className === "i") {
        ++incc;
        ++iii;
      }
      if (cw[i].className === "c") {
        ++inpp;
        ++ccc;
      }
    }
  }

  // Function to update the high score
  function highs(s) {
    if (localStorage.getItem("hwpm") < s) {
      localStorage.setItem("hwpm", s);
    }
    hw.innerHTML = localStorage.getItem("hwpm");
  }

  // Add event listener for keydown event
  document.addEventListener("keydown", findKeyPressed);
});
