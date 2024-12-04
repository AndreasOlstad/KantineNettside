

document.addEventListener("DOMContentLoaded", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");
  let darkModeIcon = document.getElementById("darkMode-icon");
  let menuIcon = document.getElementById("menu-icon");
  let navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.offsetHeight;
      let sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        let activeLink = document.querySelector(
          `header nav a[href*="${sectionId}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  });

  darkModeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeIcon.classList.toggle("bx-sun");
  });

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });

  // Close menu on link click (for mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
      }
    });
  });
});

window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }




// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut   } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxILJVkgKXOVkL5axzSViHJ_1ee0AOo5M",
  authDomain: "nettside-kantine.firebaseapp.com",
  projectId: "nettside-kantine",
  storageBucket: "nettside-kantine.firebasestorage.app",
  messagingSenderId: "726592314686",
  appId: "1:726592314686:web:6a93b0d24319cdd6b8206f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    document.getElementById("login-form").style.display = "none";
    document.getElementById("logout-form").style.display = "block";
    console.log("Innlogging vellykket:", userCredential.user);
  } catch (error) {
    console.error("Innloggingsfeil:", error);
  }
};

window.logout = async function () {
  try {
    await signOut(auth);
    document.getElementById("login-form").style.display = "block";
    document.getElementById("logout-form").style.display = "none";
    console.log("Utlogging vellykket");
  } catch (error) {
    console.error("Utloggingsfeil:", error);
  }
};

// document.querySelector("#submitt").addEventListener("click", function() {
  // document.getElementById("varenavn").value;
  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
//   document.write("test")
  
// })

/*window.myFunction = function () {
  try {
    let varenavn = document.getElementById("varenavn").value;
    let pris = document.getElementById("pris").value;
    let beskrivelse = document.getElementById("beskrivelse").value;


    const docRef = await addDoc(collection(db, "varer"), {
      varenavn: varenavn,
      pris: pris,
      beskrivelse: beskrivelse
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}; */

window.myFunction = async function () {
  try {
    let varenavn = document.getElementById("varenavn").value;
    let pris = document.getElementById("pris").value;
    let beskrivelse = document.getElementById("beskrivelse").value;

    // Validering av input
    if (!varenavn || !pris || !beskrivelse) {
      alert("Vennligst fyll ut alle feltene!");
      return;
    }

    // Legg til dokument i Firestore
    const docRef = await addDoc(collection(db, "varer"), {
      varenavn: varenavn,
      pris: parseFloat(pris), // Sørg for at pris er et tall
      beskrivelse: beskrivelse
    });
    console.log("Document written with ID: ", docRef.id);
    alert("Varen er lagt til!");
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Det oppsto en feil ved lagring av varen.");
  }
};


