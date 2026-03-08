import { useNavigate } from "react-router";

import "./HomePage.css"

export const HomePage = () => {
  const navigate = useNavigate();

    return (
    <div className="page">
      <h1 className="page-title">Temporary-Name</h1>
      <p className="page-subtitle">Choose your omen.</p>

      <div className="panel-wrapper">

        <div className="grid cols-3">
          <section className="panel panel-button" onClick={() => navigate("/character-creation")}>
            <h2 className="panel-title">Create Character</h2>
            <p className="panel-subtitle">Forge a name from shadow.</p>
          </section>

          <section className="panel panel-button" onClick={() => navigate("/checks")}>
            <h2 className="panel-title">Checks</h2>
            <p className="panel-subtitle">Resolve actions with skill, risk, and fate.</p>
          </section>

          <section className="panel panel-button" onClick={() => navigate("/items-influence")}>
            <h2 className="panel-title">Items and Influence</h2>
            <p className="panel-subtitle">Equipment, wealth and the power of reputation.</p>
          </section>

          <section className="panel panel-button" onClick={() => navigate("/combat")}>
            <h2 className="panel-title">Combat</h2>
            <p className="panel-subtitle">Clash of blades, spells and survival.</p>
          </section>

          <section className="panel panel-button" onClick={() => navigate("/wounds-healing-sanity")}>
            <h2 className="panel-title">Wounds, Healing and Sanity</h2>
            <p className="panel-subtitle">Track the body, mend the mind and endure the horrors.</p>
          </section>

          <section className="panel panel-button" onClick={() => navigate("/arguments")}>
            <h2 className="panel-title">Arguments</h2>
            <p className="panel-subtitle">The pen is mightier than the sword.</p>
          </section>

          <section className="panel panel-button" onClick={() => navigate("/opponents")}>
            <h2 className="panel-title">Opponents</h2>
            <p className="panel-subtitle">Enemies, creatures and dangers that stalk the world.</p>
          </section>

          <section className="panel panel-button" onClick={() => navigate("/checks")}>
            <h2 className="panel-title">Crafting</h2>
            <p className="panel-subtitle">Create tools, weapons and wonders with skill and time.</p>
          </section>

          <section className="panel panel-button" onClick={() => navigate("/crafting")}>
            <h2 className="panel-title">Magic</h2>
            <p className="panel-subtitle">Spells, relics, forbidden lore.</p>
          </section>
        </div>
      </div>
    </div>
  );
}