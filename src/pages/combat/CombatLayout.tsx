import { Combat_Actions } from "./Combat_Actions"
import { Combat_Conditions } from "./Combat_Conditions"
import { Combat_Rounds } from "./Combat_Rounds"
import { Combat_Rules } from "./Combat_Rules"
import { Damage_Types } from "./Damage_Types"
import { Main_Actions } from "./Main_Actions"
import { Side_Actions } from "./Side_Actions"

import './Combat.css'
import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"

export const Combat = () => {
  return (
    <div className="page">
        <h1 className="page-title">Combat</h1>
        <p className="page-subtitle">Clash of blades, spells and survival.</p>

        <div className="combat-grid">
            <CollapsiblePanel title="Rounds" subtitle="A round represents around 3 seconds of combat. Each character has one 
                main action and up to two side actions.">
                <Combat_Rounds />
            </CollapsiblePanel>

            <CollapsiblePanel title="Actions" subtitle="These are the general actions that can be chosen. They are explained in detail later.">
                <Combat_Actions />
            </CollapsiblePanel>

            <CollapsiblePanel title="Rules of combat">
            {/* TODO: Poner todo lo de dentro de aqui en paneles. Revisar las reglas*/}
                <Combat_Rules />
            </CollapsiblePanel>

            <CollapsiblePanel title="Main Actions" subtitle="In the following table the points in the left column indicate the number of actions (and 
                therefore, combat rounds) needed to complete the action. Long actions can be paused, but the 
                progress might disappear based on the action.">
                <Main_Actions />
            </CollapsiblePanel>

            <CollapsiblePanel title="Side actions" subtitle="It is possible to choose up to two different side actions.">
                <Side_Actions />
            </CollapsiblePanel>

            <CollapsiblePanel title="Conditions">
                <Combat_Conditions />
            </CollapsiblePanel>

            <CollapsiblePanel title="Damage types" subtitle="Some enemies have a resistance or even immunity to a damage type. A resistance halves the damage, while an immunity prevents it 
            completely. A weakness to a damage type doubles the damage. Psychic damage is a mechanic for the influence of extremely disturbing experiences and is explained in more detail in Wounds, Healing and Sanity.">
                <Damage_Types />
            </CollapsiblePanel>
        </div>
    </div>
  )
}

