import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"
import { Discussion } from "./Discussion"
import { Flirt } from "./Flirt"

export const Arguments = () => {
  return (
    <section className="page">
      <header>
        <h1 className="page-title">Arguments</h1>
        <p className="page-subtitle">The pen is mightier than the sword.</p>
      </header>

      <div className="grid">        
        <p>
          This concept of arguments allows you to play a very social character, even if you 
          don't like talking that much. Let the rules guide you to verbally destroy your 
          opponents and then use the examples to put some flavour in.
        </p>

        <CollapsiblePanel title="Logic-based Discussion/Haggling">
          <Discussion />
        </CollapsiblePanel>

        <CollapsiblePanel title="Flirt, persuade">
          <Flirt />
        </CollapsiblePanel>
        
        <p className="page-subtitle">
          The inspiration for how arguments work was gained from the pen and paper rules 
          of "Pagan Pacts". Check it out for a cool Viking-style RPG.
        </p>
      </div>
    </section>
  )
}

