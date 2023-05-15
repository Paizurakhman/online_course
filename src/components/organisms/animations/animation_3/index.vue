<template>
  <div class="animation-block">
    <canvas id="canvas1" width="800" height="400">
      <div class="dialog-container">
        <dialog id="sw01-dialog">
          <form>
            <h2>Switch-01 Configuration</h2>
            <div id="interface1">
              <label for="lan1">FastEthernet 0/1 - VLAN:</label>
              <select id="lan1" autocomplete="off">
                <option value="">Select VLAN</option>
                <option value="vlan110|green">VLAN 110</option>
                <option value="vlan120|blue">VLAN 120</option>
                <option value="vlan130|orange">VLAN 130</option>
              </select>
            </div>
            <div id="interface2">
              <label for="lan2">FastEthernet 0/2 - VLAN:</label>
              <select id="lan2" autocomplete="off">
                <option value="">Select VLAN</option>
                <option value="vlan110|green">VLAN 110</option>
                <option value="vlan120|blue">VLAN 120</option>
                <option value="vlan130|orange">VLAN 130</option>
              </select>
            </div>
            <div id="interface3">
              <label for="lan3">FastEthernet 0/3 - VLAN:</label>
              <select id="lan3" autocomplete="off">
                <option value="">Select VLAN</option>
                <option value="vlan110|green">VLAN 110</option>
                <option value="vlan120|blue">VLAN 120</option>
                <option value="vlan130|orange">VLAN 130</option>
              </select>
            </div>
            <div>
              <label>FastEthernet 0/4 - TRUNK</label>
              <p></p>
              <label>FastEthernet 0/5 - TRUNK</label>
              <p></p>
            </div>
            <div>
              <button class="btn-cancel" type="cancel" onclick="this.closest('dialog').close('close')">
                Close
              </button>
              <button type="button" class="btn-ok">OK</button>
            </div>
          </form>
        </dialog>
        <dialog id="sw02-dialog">
          <form>
            <h2>Switch-02 Configuration</h2>
            <div id="interface4">
              <label for="lan4">FastEthernet 0/1 - VLAN:</label>
              <select id="lan4" autocomplete="off">
                <option value="">Select VLAN</option>
                <option value="vlan110|green">VLAN 110</option>
                <option value="vlan120|blue">VLAN 120</option>
                <option value="vlan130|orange">VLAN 130</option>
              </select>
            </div>
            <div id="interface5">
              <label for="lan5">FastEthernet 0/2 - VLAN:</label>
              <select id="lan5" autocomplete="off">
                <option value="">Select VLAN</option>
                <option value="vlan110|green">VLAN 110</option>
                <option value="vlan120|blue">VLAN 120</option>
                <option value="vlan130|orange">VLAN 130</option>
              </select>
            </div>
            <div id="interface6">
              <label for="lan6">FastEthernet 0/3 - VLAN:</label>
              <select id="lan6" autocomplete="off">
                <option value="">Select VLAN</option>
                <option value="vlan110|green">VLAN 110</option>
                <option value="vlan120|blue">VLAN 120</option>
                <option value="vlan130|orange">VLAN 130</option>
              </select>
            </div>
            <div>
              <label>FastEthernet 0/4 - TRUNK</label>
              <p></p>
              <label>FastEthernet 0/5 - TRUNK</label>
              <p></p>
            </div>
            <div>
              <button class="btn-cancel" type="cancel" onclick="this.closest('dialog').close('close')">
                Close
              </button>
              <button type="button" class="btn-ok">OK</button>
            </div>
          </form>
        </dialog>
      </div>
    </canvas>
  </div>
</template>

<script>
import {onMounted} from "vue";

export default {
  name: "animation_3",
  setup() {
    onMounted(() => {
      const canvas = document.getElementById('canvas1');
      const ctx = canvas.getContext('2d');
      const CNV_WIDTH = canvas.width = 800;
      const CNV_HEIGHT = canvas.height = 400;

      const topologyImage = new Image();
      topologyImage.src = new URL(`./img/h4cker.png`, import.meta.url)
      const saveImg = new Image();
      saveImg.src = new URL('./img/save.png', import.meta.url)
      const firImg = new Image();
      firImg.src = new URL('./img/firew.png', import.meta.url)
      const bloImg = new Image();
      bloImg.src = new URL('./img/blocked.png', import.meta.url)


      const sw01 = {
        x: CNV_WIDTH/3.22,
        y: CNV_HEIGHT/5.20,
        width: 75,
        height: 75,

      };

      const sw02 = {
        x: CNV_WIDTH/1.69,
        y: CNV_HEIGHT/5.20,
        width: 75,
        height: 75,

      };

// Dialog elements
      const sw01Dialog = document.getElementById('sw01-dialog');
      const s2Dialog = document.getElementById('sw02-dialog');
      const interface1 = document.getElementById('interface1');
      const interface2 = document.getElementById('interface2');
      const interface3 = document.getElementById('interface3');
      const interface4 = document.getElementById('interface4');
      const interface5 = document.getElementById('interface5');
      const interface6 = document.getElementById('interface6');
      let vlanof1_1 = "";
      let vlanof1_2 = "";
      let vlanof1_3 = "";
      let vlanof2_1 = "";
      let vlanof2_2 = "";
      let vlanof2_3 = "";



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

        // Check if click is inside sw01 and hasn't been clicked yet
        if (
            mouseX >= sw01.x &&
            mouseX <= sw01.x + sw01.width &&
            mouseY >= sw01.y &&
            mouseY <= sw01.y + sw01.height &&
            track == true
        ) {
          // Show block dialog
          sw01Dialog.showModal();
          // track false since a Dialog is open
          track=false;
          // If the click is on block dialog

          interface1.querySelector('select').addEventListener('change', function() {
            let selectedOption = document.getElementById("lan1").value;
            let [vlanT, colorT] = selectedOption.split("|");
            vlanof1_1 = vlanT;
            colorof1 = colorT;
          });

          // store the selected VLAN value for interface 2
          interface2.querySelector('select').addEventListener('change', function() {
            let selectedOption = document.getElementById("lan2").value;
            let [vlanT, colorT] = selectedOption.split("|");
            vlanof1_2 = vlanT;
            colorof2 = colorT;
          });

          // store the selected VLAN value for interface 3
          interface3.querySelector('select').addEventListener('change', function() {
            let selectedOption = document.getElementById("lan3").value;
            let [vlanT, colorT] = selectedOption.split("|");
            vlanof1_3 = vlanT;
            colorof3 = colorT;
          });
          sw01Dialog.querySelector('.btn-ok').addEventListener('click', function() {
            // do something with the selected VLAN values
            console.log(`Selected VLAN for fa0/1: ${vlanof1_1}`);
            console.log(`Selected VLAN for fa0/2: ${vlanof1_2}`);
            console.log(`Selected VLAN for fa0/3: ${vlanof1_3}`);
            sw01Dialog.close();
          });

        }
        else if (
            mouseX >= sw02.x &&
            mouseX <= sw02.x + sw02.width &&
            mouseY >= sw02.y &&
            mouseY <= sw02.y + sw02.height &&
            track == true
        ) {
          s2Dialog.showModal();
          track = false;

          interface4.querySelector('select').addEventListener('change', function() {
            let selectedOption = document.getElementById("lan4").value;
            let [vlanT, colorT] = selectedOption.split("|");
            vlanof2_1 = vlanT;
            colorof4 = colorT;
          });

          // store the selected VLAN value for interface 2
          interface5.querySelector('select').addEventListener('change', function() {
            let selectedOption = document.getElementById("lan5").value;
            let [vlanT, colorT] = selectedOption.split("|");
            vlanof2_2 = vlanT;
            colorof5 = colorT;
          });

          // store the selected VLAN value for interface 3
          interface6.querySelector('select').addEventListener('change', function() {
            let selectedOption = document.getElementById("lan6").value;
            let [vlanT, colorT] = selectedOption.split("|");
            vlanof2_3 = vlanT;
            colorof6 = colorT;
          });
          s2Dialog.querySelector('.btn-ok').addEventListener('click', function() {
            // do something with the selected VLAN values
            console.log(`sw-02 :# Selected VLAN for fa0/1: ${vlanof2_1}`);
            console.log(`sw-02 :# VLAN for fa0/2: ${vlanof2_2}`);
            console.log(`sw-02 :# VLAN for fa0/3: ${vlanof2_3}`);
            s2Dialog.close();
          });

        }
        //Check if all the dialogs are closed
        else if ( sw01Dialog.open == false && s2Dialog.open == false && track == false){
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

// From pc2
      let pcno_2_X = 0;

// From pc3
      let pcno_3_X = 0;
      let pcno_3_Y = 0;

// From pc1
      let pcno_1_X = 0;
      let pcno_1_Y = 0;

// From pc2
      let pcno_5_X = 0;

// From pc3
      let pcno_4_X = 0;
      let pcno_4_Y = 0;

// From pc1
      let pcno_6_X = 0;
      let pcno_6_Y = 0;


// Speeds
      const speed = 0.3;
      const fadeSPEED = 0.009;


// Fade vars
      let fadeFromFireW = 0;
      let fadeFrom4 = 0;
      let fadeFrom5 = 0;
      let fadeFrom6 = 0;
      let fadeFromComp = 0;
      let fadeFromCompB = 0;
      let fadeFromHack = 0;
      const noFade = 1;

      let colorof1 = 'black';
      let colorof2 = 'black';
      let colorof3 = 'black';
      let colorof4 = 'black';
      let colorof5 = 'black';
      let colorof6 = 'black';

// Main animation Loop
      function animate(){
        ctx.globalAlpha = 1;
        ctx.clearRect(0,0,CNV_WIDTH,CNV_HEIGHT);
        ctx.drawImage(topologyImage, (CNV_WIDTH - topologyImage.width)/2, (CNV_HEIGHT - topologyImage.height)/2);

        //ctx.fillRect(sw01.x,sw01.y,sw01.width,sw01.height);
        //ctx.fillRect(sw02.x,sw02.y,sw02.width,sw02.height);
        // sw01 to Internet Object
        if (pcno_2_X > -116){
          pcno_2_X = pcno_2_X - speed;
          drawCircleFade(ctx,CNV_WIDTH/6-pcno_2_X,CNV_HEIGHT/3.35 , 7,colorof2,'black',2,fadeFromFireW);
          fadeFromFireW = fadeFromFireW + fadeSPEED;
        }
        else{
          pcno_2_X = 0
          fadeFromFireW = 0
        }
        ctx.globalAlpha = 1;

        // Bob PC to sw01 Object
        if (pcno_3_X >= 0 && pcno_3_X < 62){
          pcno_3_X = pcno_3_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+pcno_3_X,CNV_HEIGHT/1.6 -50, 7,colorof3,'black',2,fadeFromComp);
          fadeFromComp = fadeFromComp + fadeSPEED;
        }
        else if (pcno_3_X >= 62 && pcno_3_Y > -80 ){
          pcno_3_Y = pcno_3_Y - speed;
          drawCircleFade(ctx,CNV_WIDTH/6+pcno_3_X,CNV_HEIGHT/1.6+pcno_3_Y-50, 7,colorof3,'black',2,noFade);
        }
        else if (pcno_3_Y <= -80 && pcno_3_X < 116){
          pcno_3_X = pcno_3_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+pcno_3_X,CNV_HEIGHT/1.6+pcno_3_Y-50, 7,colorof3,'black',2,noFade);
        }
        else{
          pcno_3_X = 0;
          pcno_3_Y = 0;
          fadeFromComp = 0;
        }
        ctx.globalAlpha = 1;
        // Alice PC to sw01 Object
        if (pcno_1_X >= 0 && pcno_1_X < 62 && pcno_3_X > 40){
          pcno_1_X = pcno_1_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+pcno_1_X,CNV_HEIGHT/3.35-80, 7,colorof1,'black',2,fadeFromCompB);
          fadeFromCompB = fadeFromCompB + fadeSPEED;
        }
        else if (pcno_1_X >= 62 && pcno_1_Y < 80){
          pcno_1_Y = pcno_1_Y + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+pcno_1_X,CNV_HEIGHT/3.35+pcno_1_Y-80, 7,colorof1,'black',2,noFade);
        }
        else if (pcno_1_Y >= 80 && pcno_1_X < 116 ){
          pcno_1_X = pcno_1_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+pcno_1_X,CNV_HEIGHT/3.35+pcno_1_Y-80, 7,colorof1,'black',2,noFade);
        }
        else{
          pcno_1_X = 0;
          pcno_1_Y = 0;
          fadeFromCompB = 0;
        }
        ctx.globalAlpha = 1;

        if (pcno_5_X < 113){
          pcno_5_X = pcno_5_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/1.2-pcno_5_X,CNV_HEIGHT/3.35 , 7,colorof5,'black',2,fadeFrom5);
          fadeFrom5 = fadeFrom5 + fadeSPEED;
        }
        else{
          pcno_5_X = 0
          fadeFrom5 = 0
        }
        ctx.globalAlpha = 1;
        if (pcno_6_X <= 0 && pcno_6_X > -62){
          pcno_6_X = pcno_6_X - speed;
          drawCircleFade(ctx,CNV_WIDTH/1.2+pcno_6_X,CNV_HEIGHT/1.6 -50, 7,colorof6,'black',2,fadeFrom6);
          fadeFrom6 = fadeFrom6 + fadeSPEED;
        }
        else if (pcno_6_X <= -62 && pcno_6_Y > -80){
          pcno_6_Y = pcno_6_Y - speed;
          drawCircleFade(ctx,CNV_WIDTH/1.2+pcno_6_X,CNV_HEIGHT/1.6+pcno_6_Y-50, 7,colorof6,'black',2,noFade);
        }
        else if (pcno_6_Y <= -80 && pcno_6_X > -113){
          pcno_6_X = pcno_6_X - speed;
          drawCircleFade(ctx,CNV_WIDTH/1.2+pcno_6_X,CNV_HEIGHT/1.6+pcno_6_Y-50, 7,colorof6,'black',2,noFade);
        }
        else{
          pcno_6_X = 0;
          pcno_6_Y = 0;
          fadeFrom6 = 0;
        }
        ctx.globalAlpha = 1;
        if (pcno_4_X <= 0 && pcno_4_X > -62 && pcno_6_X < -30){
          pcno_4_X = pcno_4_X - speed;
          drawCircleFade(ctx,CNV_WIDTH/1.2+pcno_4_X,CNV_HEIGHT/3.35-80, 7,colorof4,'black',2,fadeFrom4);
          fadeFrom4 = fadeFrom4 + fadeSPEED;
        }
        else if (pcno_4_X <= -62 && pcno_4_Y < 80){
          pcno_4_Y = pcno_4_Y + speed;
          drawCircleFade(ctx,CNV_WIDTH/1.2+pcno_4_X,CNV_HEIGHT/3.35+pcno_4_Y-80, 7,colorof4,'black',2,noFade);
        }
        else if (pcno_4_Y >= 80 && pcno_4_X > -113 ){
          pcno_4_X = pcno_4_X - speed;
          drawCircleFade(ctx,CNV_WIDTH/1.2+pcno_4_X,CNV_HEIGHT/3.35+pcno_4_Y-80, 7,colorof4,'black',2,noFade);
        }
        else{
          pcno_4_X = 0;
          pcno_4_Y = 0;
          fadeFrom4 = 0;
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