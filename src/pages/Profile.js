// src/pages/Profile.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Navigation from "../components/Navigation"; // Import the Navigation component
import "./Profile.css";

const Profile = () => {
  const { currentUser } = useAuth();
  const [photoURL, setPhotoURL] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loveStory, setLoveStory] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPhotoURL(docSnap.data().photoURL || "");
        setFirstName(docSnap.data().firstName || "");
        setLastName(docSnap.data().lastName || "");
        setLoveStory(docSnap.data().loveStory || "");
      }
    };

    fetchData();
  }, [currentUser.uid]);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (photo) {
      const photoRef = ref(storage, `users/${currentUser.uid}/profile.jpg`);
      const uploadTask = uploadBytesResumable(photoRef, photo);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error("Photo upload failed:", error);
        },
        async () => {
          const photoURL = await getDownloadURL(uploadTask.snapshot.ref);
          await setDoc(
            doc(db, "users", currentUser.uid),
            { photoURL },
            { merge: true }
          );
          setPhotoURL(photoURL);
        }
      );
    }

    await setDoc(
      doc(db, "users", currentUser.uid),
      { firstName, lastName, loveStory },
      { merge: true }
    );
  };

  return (
    <div className="profile-page">
      <Navigation /> {/* Use the Navigation component */}
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-picture">
            {photoURL ? (
              <img src={photoURL} alt="Profile" className="profile-photo" />
            ) : (
              <div className="profile-placeholder">Upload Photo</div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <p className="profile-email">{currentUser.email}</p>
          </div>
          <div className="profile-names">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <form onSubmit={handleUpload}>
          <div className="form-group">
            <label>Your Love Story:</label>
            <textarea
              value={loveStory}
              onChange={(e) => setLoveStory(e.target.value)}
              placeholder="Share your love story here..."
            ></textarea>
          </div>

          <button type="submit" className="profile-button">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
