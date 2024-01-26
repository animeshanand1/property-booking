import React from "react";
import AgentCard from "./AgentCard";

function AgentLists() {
  return (
    <div className="agentListMain">
      <h2 className="headText">Some Nearby Agents</h2>
      <hr />
      <div className="agentGridContainer">
        <div className="agentGrid">
          <AgentCard
            agentImg="images/img_rectangle21.png"
            agentName="Ravi Kumar"
            agentStar={3}
            agentReviews="112"
          />
          <AgentCard
            agentImg="images/img_rectangle21.png"
            agentName="Kavi Kumar"
            agentStar={4}
            agentReviews="312"
          />
          <AgentCard
            agentImg="images/img_rectangle21.png"
            agentName="Kavi Kumar"
            agentStar={4}
            agentReviews="312"
          />
          <AgentCard
            agentImg="images/img_rectangle21.png"
            agentName="Kavi Kumar"
            agentStar={4}
            agentReviews="312"
          />
          <AgentCard
            agentImg="images/img_rectangle21.png"
            agentName="Kavi Kumar"
            agentStar={4}
            agentReviews="312"
          />
        </div>
      </div>
    </div>
  );
}

export default AgentLists;
