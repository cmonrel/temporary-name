import { Attributes } from "./Attributes"
import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"
import { Effects } from "./Effects"
import { Rituals } from "./Rituals"
import { Spells } from "./Spells"
import { System } from "./System"

import "./Magic.css"

export const Magic = () => {
  return (
    <section className="page">
      <header >
        <h2 className="page-title">Magic</h2>
        <p className="page-subtitle">Spells, relics, forbidden lore.</p>
      </header>

      <div className="grid">
        <p className="warning">
          This chapter is currently under construction! We apologise for the inconvenience and 
          invite you to check out one of our other amazing sections instead! 
        </p>
        
        <p>
          Magic is the core of every fantasy world. But often in Pen and Paper systems, it devolves 
          into keeping track of a lot of different rules and mechanics, searching for the right spell 
          description of the perfect spell to use. 
          In these rules, the goal is to make magic magical again while remaining easily 
          accessible.
        </p>

          <CollapsiblePanel title="Magic attributes" subtitle="There are two important magic attributes: Power and Control.">
            <Attributes />
          </CollapsiblePanel>

          <CollapsiblePanel title="The free magic system" subtitle="The effects of magic are divided into 8 categories">
            <System />
          </CollapsiblePanel>

          <CollapsiblePanel title="Effects" subtitle="Detailed description of possible Effects follows.">
            <Effects />
          </CollapsiblePanel>

          <CollapsiblePanel title="Rituals" subtitle="">
            <Rituals />
          </CollapsiblePanel>

          <CollapsiblePanel title="Spells" subtitle="Some worlds only offer spells">
            <Spells />
          </CollapsiblePanel>
      </div>
    </section>
  )
}

