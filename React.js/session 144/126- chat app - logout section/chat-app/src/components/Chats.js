import React from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

// Components
import Navbar from "./Navbar";

// Styles
import styles from "./Chats.module.css";

const Chats = () => {
  const history = useHistory();

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="a04a1867-4aad-4082-92d0-3cd401e4559f"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
