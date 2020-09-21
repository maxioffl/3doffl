// (function() {
// 	"use strict";

// 	if(typeof QuickSettings === "undefined") return;

// 	function onExampleLoaded() {
// 		brfv4Example.reinit();
// 	}
// 	function onExampleChosen() {
//   alert("1")
// 				brfv4Example.loader.loadExample(["js/examples/face_tracking/ThreeJS_example.js"], onExampleLoaded);
// 	}

// 	if(!brfv4Example.gui.exampleChooser) {

// //   var element = document.createElement('button');
  
// //   element.onclick = function () {
// //     onExampleChosen()
// //   };
  
// //   element.innerHTML = "More info";
// //     console.log(element)
// //    document.getElementById("mine").appendChild(element)

//   //i don't see contentDiv defined, but this shows the operation
  
//   var contentDiv = document.createElement('div') ;  
//   contentDiv.innerHTML = '<h2>Modal Example</h2><button id="myBtn">Open Modal</button><div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><p>Some text in the Modal..</p></div></div>'
//   var two = document.createElement('div') ; 
//   two.innnerHTML =  '</div></div>'
//   var element = document.createElement('button');
  
//   element.onclick = function () {
//     onExampleChosen();
//   };
  
//   element.innerHTML = "Tryon";
//   contentDiv.appendChild(element);
//     contentDiv.appendChild(two);
//   document.getElementById("mine").appendChild(contentDiv);
//   }
// })();