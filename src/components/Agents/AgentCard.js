import React from "react";
import "./agentStyle.css";

function AgentCard({ agentImg, agentName, agentStar, agentReviews }) {
  return (
    <div className="agentCard">
      <div class="card">
        <img src={agentImg} alt="Agent Image" />
        <div class="card-content">
          <div class="agent-name">{agentName}</div>
          <div className="ratings">
            {Array.from({ length: agentStar }, (_, index) => (
              <span key={index}>&#9733;</span>
            ))}
            {Array.from({ length: 5 - agentStar }, (_, index) => (
              <span key={index}>&#9734;</span>
            ))}
          </div>
          <div class="review">{agentReviews} Reviews</div>
          <button className="texturedbutton">View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default AgentCard;
