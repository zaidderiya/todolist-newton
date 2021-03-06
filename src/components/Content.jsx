import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Task from "./Task";

function Content() {
  const [selectedTab, setSelectedTab] = useState("INBOX");
  return (
    <section className="content">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Task selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </section>
  );
}

export default Content;
