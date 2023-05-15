<template>
 <div class="animation-block">
   <canvas id="canvas1" width="1000" height="1000">
     <div class="dialog-container">
       <dialog id="web-dialog">
         <h1 style="text-align:center;">DLP Web Interface</h1>
         <p>Enter words to add to the block list:</p>
         <input id="block-input" type="text" placeholder="Enter a word" style="width: 300px;">
         <button id="block-button" type="submit">Add to block list</button>
         <div class="block-list">
           <h3>Block List:</h3>
           <ul id="block-ul"></ul>
         </div>
         <button type="cancel" onclick="this.closest('dialog').close('close')">Close</button>
       </dialog>
       <dialog id="bob-dialog" width="200" height="200">
         <form method="dialog">
           <h1 style="text-align:center;">Send A Test Email</h1>
           <p>Enter your email:</p>
           <input id="check-input" type="text" placeholder="Greetings! This is a test email to test our DLP system! Isn't that great?" style="width: 500px; height: 100px;" >
           <button id="check-button" type="submit">Send an email</button>
           <p id="check-result"></p>
           <button type="cancel" onclick="this.closest('dialog').close('close')">Close</button>
         </form>
       </dialog>
     </div>
   </canvas>
 </div>
</template>

<script>
import {onMounted} from "vue";

export default {
  name: "animation_2",
  setup() {
    onMounted(() => {
      const canvas = document.getElementById('canvas1');
      const ctx = canvas.getContext('2d');
      const CNV_WIDTH = canvas.width = 800;
      const CNV_HEIGHT = canvas.height = 400;

      const topologyImage = new Image();
      topologyImage.src = new URL(`./img/h4cker.png`, import.meta.url)

// Define bob computer
      const computerBob = {
        x: CNV_WIDTH/19+91,
        y: CNV_HEIGHT/1.90-63,
        width: 75,
        height: 75,
      };

// Define dlpSystem object
      const dlpSystem = {
        x: CNV_WIDTH/3.05+105,
        y: CNV_HEIGHT/3.05+115,
        width: 100,
        height: 100,
      };

// Dialog elements
      const webDialog = document.getElementById('web-dialog');
      const bobDialog = document.getElementById('bob-dialog');
      const input = document.getElementById("block-input");
      const button = document.getElementById("block-button");
      const blockList = document.getElementById("block-ul");
      const checkDialog = document.getElementById("check-dialog");
      const checkInput = document.getElementById("check-input");
      const checkButton = document.getElementById("check-button");
      const checkResult = document.getElementById("check-result");



      let blockedWords = [];
      let blockedNumbers = [];

// Track if a dialog is already open
      let track = true;

// For SetInterval
      let currentLogIndex = 0;
      let intervalId;
      let intervalSpeed = 2000;

// Event listener - mouse click
      canvas.addEventListener('click', function (event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;


        // Check if click is inside dlpSystem and hasn't been clicked yet
        if (
            mouseX >= dlpSystem.x &&
            mouseX <= dlpSystem.x + dlpSystem.width &&
            mouseY >= dlpSystem.y &&
            mouseY <= dlpSystem.y + dlpSystem.height &&
            track == true
        ) {
          // Show block dialog
          webDialog.showModal();
          // track false since a Dialog is open
          track=false;
          document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault(); // stop the form submission
            // perform the necessary checks and show the result
          });


          button.addEventListener("click", function() {
            // Get the value of the input field
            const word = input.value.trim().toLowerCase();

            // Check if the word is already in the blockedWords array and is not empty
            if (word && blockedWords.indexOf(word) === -1) {
              // Add the word to the blockedWords array
              blockedWords.push(word);

              // Clear the input field
              input.value = "";

              // Add the word to the block list with a delete button
              const li = document.createElement("li");
              li.innerHTML = `${word} <button data-word="${word}" class="delete-button">X</button>`;
              blockList.appendChild(li);

              // Add an event listener to the delete button
              const deleteButton = li.querySelector(".delete-button");
              deleteButton.addEventListener("click", function() {
                // Get the word to delete from the data-word attribute
                const wordToDelete = this.dataset.word;

                // Remove the word from the blockedWords array
                const index = blockedWords.indexOf(wordToDelete);
                if (index !== -1) {
                  blockedWords.splice(index, 1);
                }

                // Remove the li element from the block list
                this.parentNode.remove();
              });
            }
          });
          document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault(); // stop the form submission
            // perform the necessary checks and show the result
          });
          input.addEventListener("keydown", function(event) {
            // Check if the key pressed was a number
            var charCode = event.keyCode;

            if (!((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)) {
              // Prevent the default behavior of the key event
              event.preventDefault();
            }
          });



        }
        // Click on Bob PC
        else if (
            mouseX >= computerBob.x &&
            mouseX <= computerBob.x + computerBob.width &&
            mouseY >= computerBob.y &&
            mouseY <= computerBob.y + computerBob.height &&
            track == true
        ) {
          bobDialog.showModal();
          track = false;

          checkButton.addEventListener("click", function() {
            // Get the value of the input field
            const sentence = checkInput.value.trim().toLowerCase();

            // Check for bank card pattern match
            const bankCardPattern = /^\d{4}(\s?\d{4}){3}$/;
            const isBankCard = bankCardPattern.test(sentence);

            // Split the sentence into an array of words
            const words = sentence.split(" ");

            // Loop through the words and check if any of them are in the blockedWords array
            let foundBlockedWord = false;
            words.forEach(function(word) {
              const regex = new RegExp(`\\b${word}\\b`, 'i');
              if (blockedWords.some(bw => regex.test(bw))) {
                foundBlockedWord = true;
              }
            });


            // Display the result based on whether or not a blocked word or bank card was found
            if (foundBlockedWord) {
              checkResult.innerHTML = "The sentence contains a blocked word.";
            } else if (isBankCard) {
              checkResult.innerHTML = "The sentence contains a bank card number.";
            } else {
              checkResult.innerHTML = "Email sent successfully!";
            }

            // Clear the input field
            checkInput.value = "";
          });
          document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault(); // stop the form submission
            // perform the necessary checks and show the result
          });
        }

        //Check if all the dialogs are closed
        else if (webDialog.open == false && bobDialog.open == false && track == false){
          track=true;
        }

      });


      function drawCircleFade(ctx, x, y, radius, fill, stroke, strokeWidth, alpha = 0) {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
        ctx.globalAlpha = alpha
        if (fill) {
          ctx.fillStyle = fill
          ctx.fill()
        }
        if (stroke) {
          ctx.lineWidth = strokeWidth
          ctx.strokeStyle = stroke
          ctx.stroke()
        }
      }


// DYNAMIC VALUES

// From dlpSystem
      let intc_X = 0;

// From Hacker Red ball
      let redc_X = 0;
      let redc_Y = 0;
      let redstop = 0;

// From Bob
      let bobc_X = 0;
      let bobc_Y = 0;

// From Alice
      let alic_X = 0;
      let alic_Y = 0;

// Speeds
      const speed = 0.3;
      const fadeSPEED = 0.01;


// Fade vars
      let fadeFromFireW = 0;
      let fadeFromComp = 0;
      let fadeFromHack = 0;
      const noFade = 1;


// Main animation Loop
      function animate(){
        ctx.globalAlpha = 1;
        ctx.clearRect(0,0,CNV_WIDTH,CNV_HEIGHT);
        ctx.drawImage(topologyImage, (CNV_WIDTH - topologyImage.width)/2, (CNV_HEIGHT - topologyImage.height)/2);

        //ctx.fillRect(dlpSystem.x,dlpSystem.y,dlpSystem.width,dlpSystem.height);

        // dlpSystem to Internet Object
        if (intc_X > -80){
          intc_X = intc_X - speed;
          drawCircleFade(ctx,CNV_WIDTH/2.12-intc_X+91,CNV_HEIGHT/2.179-61.5, 10,'green','black',2,fadeFromFireW);
          fadeFromFireW = fadeFromFireW + fadeSPEED;
        }
        else{
          intc_X = 0
          fadeFromFireW = 0
        }
        ctx.globalAlpha = 1;

        // Bob PC to router Object
        if (bobc_X >= 0 && bobc_X < 56){
          bobc_X = bobc_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+bobc_X+91,CNV_HEIGHT/1.6-63, 7,'orange','black',2,fadeFromComp);
          fadeFromComp = fadeFromComp + fadeSPEED;
        }
        else if (bobc_X >= 56 && bobc_Y > -50){
          bobc_Y = bobc_Y - speed;
          drawCircleFade(ctx,CNV_WIDTH/6+bobc_X+91,CNV_HEIGHT/1.6+bobc_Y-63, 7,'orange','black',2,noFade);
        }
        else if (bobc_Y <= -50 && bobc_X < 142){
          bobc_X = bobc_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+bobc_X+91,CNV_HEIGHT/1.6+bobc_Y-63, 7,'orange','black',2,noFade);
        }
        else{
          bobc_X = 0;
          bobc_Y = 0;
          fadeFromComp = 0;
        }

        // Alice PC to router Object
        if (alic_X >= 0 && alic_X < 56){
          alic_X = alic_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+alic_X+91,CNV_HEIGHT/3.35-63, 7,'green','black',2,fadeFromComp);
        }
        else if (alic_X >= 56 && alic_Y < 50){
          alic_Y = alic_Y + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+alic_X+91,CNV_HEIGHT/3.35+alic_Y-63, 7,'green','black',2,noFade);
        }
        else if (alic_Y >= 50 && alic_X < 142){
          alic_X = alic_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+alic_X+91,CNV_HEIGHT/3.35+alic_Y-63, 7,'green','black',2,noFade);
        }
        else{
          alic_X = 0;
          alic_Y = 0;
        }

        requestAnimationFrame(animate);
      }

// Call animation
      animate();
    })
  }
}
</script>

<style scoped lang="scss" src="./index.scss">

</style>