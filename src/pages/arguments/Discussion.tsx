import { Arguments_level } from "./Arguments_level"
import { Phases_Discussion } from "./Phases_Discussion"

export const Discussion = () => {
  return (
    <section>
      <br />
        <div className="grid">
          <p>
            At the start of each discussion, the goal of each party has to be defined. Then 
            Discussion points are dealt with by the DM. This offers the option to represent 
            unbalanced starting points. It's way harder to convince someone to take a risk 
            for something you want if you offer nothing in return. Another option is that one 
            The party has a bonus on all rolls. Like a royal would have in an argument against someone 
            of lower standing.
          </p>
          <p>
            So each party has a set of discussion points that will be attacked by the opposing party. If they 
            fall to zero at any point, the discussion is lost. It's possible to add a limit to how many rounds can be spent arguing (eg, 10 rounds).
          </p>
          
          <section className="panel">
            <Phases_Discussion />
          </section>

          <section className="panel">
            <Arguments_level />
          </section>
        </div>
    </section>
  )
}


