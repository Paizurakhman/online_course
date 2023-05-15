<template>
  <div class="animation-block">
    <canvas id="canvas1" width="800" height="400">
      <div class="dialog-container">
        <dialog id="web-dialog" width="200" height="200">
          <form method="dialog">
            <label for="ip-address">FireWall Web Interface</label>
            <button type="submit" id="showLogsbutton">Check Logs</button>
            <button type="submit" id="addarulebutton">Add a Security Rule</button>
          </form>
        </dialog>
        <dialog id="block-dialog" width="200" height="200">
          <form method="dialog">
            <label for="ip-address">Enter an IP Address to block:</label>
            <input type="text" id="ip-address" required>
            <button type="submit">Block</button>
            <button type="cancel" onclick="this.closest('dialog').close('close')">Close</button>
          </form>
        </dialog>
        <dialog id="logs-dialog" width="200" height="200">
          <h2>Logs</h2>
          <ul>
            <li>Log 1</li>
            <li>Log 2</li>
            <li>Log 3</li>
          </ul>
          <button type="cancel" onclick="this.closest('dialog').close('close')">Close</button>
        </dialog>
        <dialog id="bob-dialog" width="200" height="200">
          <form method="dialog">
            <h2 style="text-align:center;">Network Information of Bob</h2>
            <div style="font-size:90%;">
              <table style="text-align:left; border-collapse: collapse;" border="1">
                <tr>
                  <th>IP Address: </th>
                  <th>192.168.1.10</th>
                </tr>
                <tr>
                  <th>Subnet Mask: </th>
                  <th>255.255.255.0</th>
                </tr>
                <tr>
                  <th>Default Gateway: </th>
                  <th>192.168.1.254</th>
                </tr>
                <tr>
                  <th>DNS server: </th>
                  <th>8.8.8.8</th>
                </tr>
              </table>
            </div>
            <button type="cancel" onclick="this.closest('dialog').close('close')">Close</button>
          </form>
        </dialog>
        <dialog id="ali-dialog" width="200" height="200">
          <form method="dialog">
            <h2 style="text-align:center;">Network Information of Alice</h2>
            <div style="font-size:90%;">
              <table style="text-align:left; border-collapse: collapse;" border="1">
                <tr>
                  <th>IP Address: </th>
                  <th>192.168.1.9</th>
                </tr>
                <tr>
                  <th>Subnet Mask: </th>
                  <th>255.255.255.0</th>
                </tr>
                <tr>
                  <th>Default Gateway: </th>
                  <th>192.168.1.254</th>
                </tr>
                <tr>
                  <th>DNS server: </th>
                  <th>8.8.8.8</th>
                </tr>
              </table>
            </div>
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
  name: "animation_1",
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

// Define bob computer
      const computerBob = {
        x: CNV_WIDTH/19,
        y: CNV_HEIGHT/1.90,
        width: 75,
        height: 75,
      };

// Define alice computer
      const computerAli = {
        x: CNV_WIDTH/19,
        y: CNV_HEIGHT/5.20,
        width: 75,
        height: 75,
      };

// Define firewall object
      const firewall = {
        x: CNV_WIDTH/3.05,
        y: CNV_HEIGHT/3.05,
        width: 100,
        height: 100,
      };

// Define malicious actor object
      const maliciousActor = {
        blocked: false,
        ip: '93.240.46.99',
      };

// Log list
      let logs = [
        { sourceIP: '192.168.1.10', destinationIP: '208.65.153.238', destinationPort: 'HTTPS/443', action: 'Allowed'},
        { sourceIP: '77.240.44.222', destinationIP: '192.168.1.9', destinationPort: 'SMTP/587', action: 'Allowed'},
        { sourceIP: '93.240.46.99', destinationIP: '192.168.1.10', destinationPort: 'SSH/22', action: 'Allowed'},
        { sourceIP: '192.168.1.9', destinationIP: '8.8.8.8', destinationPort: 'DNS/53', action: 'Allowed'},
      ];

// Dialog elements
      const blockDialog = document.getElementById('block-dialog');
      const webDialog = document.getElementById('web-dialog');
      const logsDialog = document.getElementById('logs-dialog');
      const bobDialog = document.getElementById('bob-dialog');
      const aliDialog = document.getElementById('ali-dialog');
      const openBlockButton  = document.getElementById('addarulebutton');
      const openLogsButton  = document.getElementById('showLogsbutton');

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

        // Check if click is inside firewall and hasn't been clicked yet
        if (
            mouseX >= firewall.x &&
            mouseX <= firewall.x + firewall.width &&
            mouseY >= firewall.y &&
            mouseY <= firewall.y + firewall.height &&
            track == true
        ) {
          // Show block dialog
          webDialog.showModal();
          // track false since a Dialog is open
          track=false;
          // If the click is on block dialog
          openBlockButton.onclick = function(){
            webDialog.close();
            blockDialog.showModal();
            // Focus on element
            document.getElementById('ip-address').focus();
          }

          openLogsButton.onclick = function(){
            webDialog.close();
            logsDialog.showModal();
            // Display the first two logs
            const log1 = logs[currentLogIndex];
            const log2 = logs[(currentLogIndex + 1) % logs.length];
            //create an InnerHTML for LOGS
            const logsContent = `
 				<h3 style="text-align:center;">FireWall Traffic</h3>
				<table style="text-align:center; border-collapse: collapse;" border="1">
				 <tr>
				    <th>Source IP</th>
				    <th>Destination IP</th>
				    <th>Destination Port</th>
				    <th>Action</th>
				  </tr>
				  <tr>
				    <td>${log1.sourceIP}</td>
				    <td>${log1.destinationIP}</td>
				    <td>${log1.destinationPort}</td>
				    <td>${log1.action}</td>
				  </tr>
				  <tr>
				    <td>${log2.sourceIP}</td>
				    <td>${log2.destinationIP}</td>
				    <td>${log2.destinationPort}</td>
				    <td>${log2.action}</td>
				 </tr>
				</table>
				<button style="float:right" type="cancel" onclick="this.closest('dialog').close('close')">Close</button>
    		`;
            logsDialog.innerHTML = logsContent;

            if (intervalId) {
              clearInterval(intervalId);
            }
            //Cycle through the logs
            intervalId = setInterval(function () {
              currentLogIndex = (currentLogIndex + 1) % logs.length;
              const log1 = logs[currentLogIndex];
              const log2 = logs[(currentLogIndex + 1) % logs.length];
              const logsContent = `
			  <h3 style="text-align:center;">FireWall Traffic</h3>
				<table style="text-align:center; border-collapse: collapse;" border="1">
				 <tr>
				    <th>Source IP</th>
				    <th>Destination IP</th>
				    <th>Destination Port</th>
				    <th>Action</th>
				  </tr>
				  <tr>
				    <td>${log1.sourceIP}</td>
				    <td>${log1.destinationIP}</td>
				    <td>${log1.destinationPort}</td>
				    <td>${log1.action}</td>
				  </tr>
				  <tr>
				    <td>${log2.sourceIP}</td>
				    <td>${log2.destinationIP}</td>
				    <td>${log2.destinationPort}</td>
				    <td>${log2.action}</td>
				 </tr>
				</table>
				<button style="float:right" type="cancel" onclick="this.closest('dialog').close('close')">Close</button>
				`;
              logsDialog.innerHTML = logsContent;
            }, intervalSpeed);
          }

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
        }
        //Click on Alice PC
        else if (
            mouseX >= computerAli.x &&
            mouseX <= computerAli.x + computerAli.width &&
            mouseY >= computerAli.y &&
            mouseY <= computerAli.y + computerAli.height &&
            track == true
        ) {
          aliDialog.showModal();
          track = false;
        }

        //Check if all the dialogs are closed
        else if ((logsDialog.open == false && blockDialog.open == false ) && webDialog.open == false && bobDialog.open == false && aliDialog.open == false && track == false){
          track=true;
        }

        else if (webDialog.open) {
          // Check if click is outside dialog element and close dialog
          const dialogRect = webDialog.getBoundingClientRect();
          if (
              mouseX < dialogRect.left ||
              mouseX > dialogRect.right ||
              mouseY < dialogRect.top ||
              mouseY > dialogRect.bottom
          ) {
            webDialog.close();
            track = true;
          }
        }
      });

// Add event listener for dialog submit
      blockDialog.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get IP address from input field
        const ipAddress = document.getElementById('ip-address').value.trim();

        // Block malicious actor with specified IP address
        if (ipAddress === maliciousActor.ip) {
          maliciousActor.blocked = true;
          logs[2].action = 'Blocked';
          console.log(`Blocked malicious IP address: ${maliciousActor.ip}`);
        }


        // Close dialog
        blockDialog.close();
        track = true;
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

// From FireWall
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

        //ctx.fillRect(computerAli.x,computerAli.y,computerAli.width,computerAli.height);

        // FireWall to Internet Object
        if (intc_X > -83){
          intc_X = intc_X - speed;
          drawCircleFade(ctx,CNV_WIDTH/2.12-intc_X,CNV_HEIGHT/2.179 , 7,'green','green',2,fadeFromFireW);
          fadeFromFireW = fadeFromFireW + fadeSPEED;
        }
        else{
          intc_X = 0
          fadeFromFireW = 0
        }
        ctx.globalAlpha = 1;

        // Bob PC to FireWall Object
        if (bobc_X >= 0 && bobc_X < 56){
          bobc_X = bobc_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+bobc_X,CNV_HEIGHT/1.6, 7,'green','green',2,fadeFromComp);
          fadeFromComp = fadeFromComp + fadeSPEED;
        }
        else if (bobc_X >= 56 && bobc_Y > -50){
          bobc_Y = bobc_Y - speed;
          drawCircleFade(ctx,CNV_WIDTH/6+bobc_X,CNV_HEIGHT/1.6+bobc_Y, 7,'green','green',2,noFade);
        }
        else if (bobc_Y <= -50 && bobc_X < 121){
          bobc_X = bobc_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+bobc_X,CNV_HEIGHT/1.6+bobc_Y, 7,'green','green',2,noFade);
        }
        else{
          bobc_X = 0;
          bobc_Y = 0;
          fadeFromComp = 0;
        }

        // Alice PC to FireWall Object
        if (alic_X >= 0 && alic_X < 56){
          alic_X = alic_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+alic_X,CNV_HEIGHT/3.35, 7,'green','green',2,fadeFromComp);
        }
        else if (alic_X >= 56 && alic_Y < 50){
          alic_Y = alic_Y + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+alic_X,CNV_HEIGHT/3.35+alic_Y, 7,'green','green',2,noFade);
        }
        else if (alic_Y >= 50 && alic_X < 121){
          alic_X = alic_X + speed;
          drawCircleFade(ctx,CNV_WIDTH/6+alic_X,CNV_HEIGHT/3.35+alic_Y, 7,'green','green',2,noFade);
        }
        else{
          alic_X = 0;
          alic_Y = 0;
        }
        ctx.globalAlpha = 1;

        // Hacker to User Pc
        // Check if the H4Ck3R has been blocked
        if (maliciousActor.blocked == false){
          if (redc_X > -80){
            redc_X = redc_X - speed;
            drawCircleFade(ctx,CNV_WIDTH/1.2+redc_X,CNV_HEIGHT/2.179 , 7,'red','red',2,fadeFromHack);
            fadeFromHack = fadeFromHack + fadeSPEED;
          }
          else if(redc_X >= -80.5){
            fadeFromHack = 0;
            redc_X = redc_X - speed;
          }
          else if (redc_X <= -80 && redc_X > -170 ){
            redc_X = redc_X - speed;
            drawCircleFade(ctx,CNV_WIDTH/1.48+redc_X,CNV_HEIGHT/2.179 , 7,'red','red',2,fadeFromHack);
            fadeFromHack = fadeFromHack + fadeSPEED;
          }
          else if (redc_X >= -170.5){
            fadeFromHack = 0;
            redc_X = redc_X - speed;
          }
          else if (redc_X <= -170 && redc_X > -229){
            redc_X = redc_X - speed;
            drawCircleFade(ctx,CNV_WIDTH/1.9+redc_X,CNV_HEIGHT/2 , 7,'red','red',2,fadeFromHack);
            fadeFromHack = fadeFromHack +fadeSPEED;
          }
          else if (redc_X <= -229 && redc_Y < 49){
            redc_Y = redc_Y + speed;
            drawCircleFade(ctx,CNV_WIDTH/1.9+redc_X,CNV_HEIGHT/2+redc_Y , 7,'red','red',2,noFade);
          }
          else if (redc_Y >= 49 && redc_X >= -290){
            redc_X = redc_X - speed;
            drawCircleFade(ctx,CNV_WIDTH/1.9+redc_X,CNV_HEIGHT/2+redc_Y , 7,'red','red',2,noFade);
          }
          else {
            redc_X = 0;
            redc_Y = 0;
            fadeFromHack = 0;
          }
        }
        else{

          ctx.drawImage(bloImg,630, 140, 160, 80);
          ctx.drawImage(saveImg,140,60)
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