import firebase from "../utility/firebase";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        console.warn("token", data);
      });
  }, []);
  return (
    <div>
      <h1>Shivam</h1>
    </div>
  );
}
