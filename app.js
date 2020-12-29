
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC6mcRkdcTp-X_oRdSoQmlXFiyYSPp1xJk",
    authDomain: "chatapp-eb42a.firebaseapp.com",
    projectId: "chatapp-eb42a",
    storageBucket: "chatapp-eb42a.appspot.com",
    messagingSenderId: "868169854598",
    appId: "1:868169854598:web:0bea5f6eaef3b77af32b07",
    measurementId: "G-2GVF9TD3Q8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();



let addData = () => {

    db.collection("orders").add({
        customerName: document.getElementById("uinput").value,
        address: "324 Street,Karachi.",
        orderTitle: "Khoya",
        phoneNumber: "03422497984",
        additionComments: "",
        qtyKg: 2,
        date: new Date().getTime(),
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}



db.collection("orders")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
                document.getElementById("data").innerHTML = JSON.stringify(change.doc.data());
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });
