const firebaseConfig = {
    apiKey: "AIzaSyBMAx6pvDphJPd2RUYuvKOHuRSvayUlfNQ",
    authDomain: "mathmatters-129b4.firebaseapp.com",
    projectId: "mathmatters-129b4",
    storageBucket: "mathmatters-129b4.appspot.com",
    messagingSenderId: "177571392849",
    appId: "1:177571392849:web:ce950af4e60a15f736b770",
    measurementId: "G-JZC2N6T4GG"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");

// make sure that data is going to firestore
//collectionName = "test runs";
//docName = "test run 2";
//data = { myName: "Dan Stille", class: "Web Development" };
//db.collection(collectionName).doc(docName).set(data);
//console.log("data: " + data);
//alert(docName + " saved to database!!");

function buttonclicked() {
  const affirmations = [
    "I am confident in my abilities", "I believe in myself", "I am strong.", "I am capable of achieving my goals.", "I am resilient.", "I am worthy of success.", "I am deserving of success.", "I am strong.", "I am beautiful.", "I am worthy of being respected", "I can determine my future.", "I am in control", "I am amazing.", "I trust my journey.", "I can do hard things.", "I am enough", "I am proud of myself.", "I am brave.", "I can control my thoughts and responses.", "I trust myself.", "I trust me inuition.", "I honor my emotions.", "My mind and body are worthy of rest.", "It is okay to set boundaries.", "I visualize my success.", "I am grateful.", "I am a good friend.", "I am empathetic and show empathy."
  ];
  const number = Math.floor(Math.random() * affirmations.length);
  alert(affirmations[number]);
};

function createForm() {
  console.log("createForm called");
  var First_Name = document.getElementById("First_Name").value;
  var Last_Name = document.getElementById("Last_Name").value;
  var Period1_2 = document.getElementById("1_2").value;
  var Period3_4 = document.getElementById("3_4").value;
  var Period8_9 = document.getElementById("8_9").value;
  var Email = document.getElementById("Email").value;
  var call_yes = document.getElementById("reach_out_yes").value;
  var call_no = document.getElementById("reach_out_no").value;
  var seat = document.getElementById("seat").value;
  var HW = document.getElementById("HW").value;
  var too_fast = document.getElementById("too_fast").value;
  var quiz = document.getElementById("quiz").value;
  var test = document.getElementById("test").value;
  var other = document.getElementById("other").value;
  var Comments = document.getElementById("info").value;
  var N2K = document.getElementById("N2K").value;

var formData = {
  timestamp: Date.now(),
  First_Name: First_Name,
  Last_Name: Last_Name,
  Period1_2: Period1_2,
  Period3_4: Period3_4,
  Period8_9: Period8_9,
  Email: Email,
  reach_out_yes: call_yes,
  reach_out_no: call_no,
  seat: seat,
  HW: HW,
  too_fast: too_fast,
  quiz: quiz,
  test: test,
  other: other,
  info: Comments,
  comments: N2K,
};

var formJSON = JSON.stringify(formData);
console.log("formJSON: " + formJSON);
 // db.collection("forms").doc("Jill").set(data);
  db.collection("forms").doc(formData.Last_Name + formData.First_Name).set(formData);
return formData;
};

function saveForm() {
  console.log("saveForm() called");

  var formData = createForm();
  db.collection("forms").doc(formData.Last_Name + formData.First_Name).set(formData);
  alert("Thank you for your submission!");
}

