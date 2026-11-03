"use client";

import { useState } from "react";

const featureContent = {
  users: {
    title: "Ahid empowers users to discover and connect with trusted brands nearby",
    items: [
      "Discover verified brands near you.",
      "View galleries of products and services.",
      "Explore by category and proximity.",
      "Trust verified marks with confidence.",
    ],
  },
  brands: {
    title: "Ahid helps brands get discovered and build trust with local customers",
    items: [
      "Showcase your business with a trusted profile.",
      "Reach people searching by category and location.",
      "Track engagement and customer interest.",
      "Earn visibility through verification.",
    ],
  },
};

type Mode = keyof typeof featureContent;

export default function FeatureTabs() {
  const [mode, setMode] = useState<Mode>("users");
  const config = featureContent[mode];

  return (
    <>
      <div className="tabs" aria-label="User or brand feature selector">
        <button type="button" className={mode === "users" ? "is-active" : undefined} onClick={() => setMode("users")}>
          For users
        </button>
        <button type="button" className={mode === "brands" ? "is-active" : undefined} onClick={() => setMode("brands")}>
          For brands
        </button>
      </div>

      <div className="feature-card">
        <div>
          <h3 id="feature-title">{config.title}</h3>
        </div>
        <div className="feature-list" id="feature-list">
          {config.items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
}
