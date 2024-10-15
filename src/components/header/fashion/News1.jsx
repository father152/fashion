import React from "react";
import "./news1.css";

function News(props) {
  return (
    <div className="news">
      <div>
        <span className="title">{props.title}</span>
      </div>
      <div>
        <span className="name">{props.name}</span>
      </div>
      <img className="pic" src={props.image} alt={props.names} />
      <div>
        <span className="description">{props.description}</span>
      </div>
    </div>
  );
}

const News1 = () => {
  return (
    <div>
      <News
        title="New News"
        name="Now sport"
        image={
          "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fHww"
        }
        description="Step into a new era of analytics with the Alteryx AI Platform. Empower your organization with automated data preparation, AI-powered analytics, and approachable machine learning — all with embedded governance and security. Welcome to the future of data-driven decisions for every user, every team, every step of the way."
      />
      <News
        title="Old News"
        name="Now weather"
        image={
          "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fHww"
        }
        description="Step into a new era of analytics with the Alteryx AI Platform. Empower your organization with automated data preparation, AI-powered analytics, and approachable machine learning — all with embedded governance and security. Welcome to the future of data-driven decisions for every user, every team, every step of the way."
      />
    </div>
  );
};

export { News1 };
