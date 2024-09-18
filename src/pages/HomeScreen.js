import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./HomeScreen.css";

const HomeScreen = () => {
  // Updated sample data for couples with real wedding photos
  const couples = [
    {
      id: 1,
      name: "John & Jane",
      story:
        "John and Jane met in college and have been inseparable ever since. Their love story is one of adventure and shared dreams.",
      photos: [
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 2,
      name: "Alice & Bob",
      story:
        "Alice and Bob found each other through mutual friends and have been together for 5 years. They love traveling and exploring new places.",
      photos: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 3,
      name: "Emily & Jack",
      story:
        "Emily and Jack met at a concert and instantly hit it off. They share a deep love for music and have attended countless concerts together.",
      photos: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1525328810826-02ebe16c5ea1?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 4,
      name: "Olivia & Liam",
      story:
        "Olivia and Liam have known each other since high school. Their love story is a beautiful journey of growing up and growing together.",
      photos: [
        "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562949580-abe5a124edec?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543107669-3353084464e6?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 5,
      name: "Sophia & James",
      story:
        "Sophia and James met through a mutual love for cooking. They enjoy creating new recipes together and sharing meals with friends and family.",
      photos: [
        "https://images.unsplash.com/photo-1513725673171-537bab934235?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522093536318-41f07f34ef86?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 6,
      name: "Charlotte & Henry",
      story:
        "Charlotte and Henry were childhood neighbors who fell in love over the years. Their relationship is built on a strong foundation of friendship.",
      photos: [
        "https://images.unsplash.com/photo-1525739728490-30e0e1c2e468?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 7,
      name: "Mia & Lucas",
      story:
        "Mia and Lucas met at a charity event and bonded over their shared passion for helping others. Their love is driven by their kind hearts and generosity.",
      photos: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 8,
      name: "Ava & Ethan",
      story:
        "Ava and Ethan met through a blind date set up by friends. Their connection was instant, and they have been together ever since.",
      photos: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1525328810826-02ebe16c5ea1?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 9,
      name: "Isabella & Alexander",
      story:
        "Isabella and Alexander met at a bookstore and bonded over their love for literature. Their love story is filled with beautiful moments of shared readings and deep conversations.",
      photos: [
        "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562949580-abe5a124edec?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543107669-3353084464e6?w=800&auto=format&fit=crop",
      ],
    },
    {
      id: 10,
      name: "Amelia & Michael",
      story:
        "Amelia and Michael met at a marathon, and their relationship has been a long and steady race to the finish line. They support each other through every challenge.",
      photos: [
        "https://images.unsplash.com/photo-1513725673171-537bab934235?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522093536318-41f07f34ef86?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&auto=format&fit=crop",
      ],
    },
  ];

  return (
    <div className="home-screen">
      <Navigation />
      {/* Added iframe for external website */}
      <div className="iframe-container">
        <iframe
          src="https://cwe.yookos.com/"
          title="External Website"
          width="100%"
          height="100%"
          style={{ border: "none", minHeight: "100vh", width: "100vw" }} // Adjusts iframe size to cover the entire screen height
        />
      </div>
    </div>
  );
};

export default HomeScreen;
