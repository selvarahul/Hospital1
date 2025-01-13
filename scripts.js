document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registration-form");
    const profileSection = document.querySelector(".profile");
    if (registrationForm) {
      registrationForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const name = document.getElementById("name").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const bloodGroup = document.getElementById("blood-group").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const image = document.getElementById("image-upload").files[0];
        if (!name || !dob || !gender || !bloodGroup || !email || !phone || !address || !image) {
          alert("Please fill in all fields.");
          return;
        }
        const patientData = {
          name,
          dob,
          gender,
          bloodGroup,
          email,
          phone,
          address,
          image: URL.createObjectURL(image), // Create URL for the uploaded image
        };
  
        localStorage.setItem("patientData", JSON.stringify(patientData));
        window.location.href = "paitientprofile.html";
      });
    }
    if (profileSection) {
      const patientData = JSON.parse(localStorage.getItem("patientData"));
  
      if (patientData) {
        
        profileSection.querySelector("img").src = patientData.image;
        profileSection.querySelector(".info").innerHTML = `
          <div>Name: ${patientData.name}</div>
          <div>DOB: ${patientData.dob}</div>
          <div>Gender: ${patientData.gender}</div>
          <div>Blood Group: ${patientData.bloodGroup}</div>
          <div>Email: ${patientData.email}</div>
          <div>Phone Number: ${patientData.phone}</div>
          <div>Address: ${patientData.address}</div>
        `;
      } else {
        alert("No patient data found. Please fill out the registration form.");
        window.location.href = "patient.html";
      }
    }
  });
  