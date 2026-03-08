import { Blood_Points } from "./Blood_Points"
import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"
import { Healing } from "./Healing"
import { Insanity } from "./Insanity"
import { Wound_Threshold } from "./Wound_Threshold"

export const WoundHeallingSanity = () => {
  return (
    <section>
        <header>
            <h2 className="page-title">Wounds, Healing and Sanity</h2>
            <p className="page-subtitle">Track the body, mend the mind and endure the horrors.</p>
        </header>

        <div className="grid">
            <CollapsiblePanel title="Light and serious wounds, wound threshold" subtitle="Damage points translate directly to light wounds on the hit body part. If the wound threshold 
                is reached at the body part, one severe wound is suffered (and the light wounds are reset). If a part 
                has three serious wounds, the limb is lost, in case of head and torso, this means instant death.">
                <Wound_Threshold />
            </CollapsiblePanel>

            <CollapsiblePanel title="Blood points">
                <Blood_Points />
            </CollapsiblePanel>

            <CollapsiblePanel title="Treating wounds and healing" subtitle="Treating serious wounds removes the suffered penalty and prevents unconsciousness. But treated wounds still count 
                towards the maximum per body part before it is lost.">
                <Healing />
            </CollapsiblePanel>

            <CollapsiblePanel title="Sanity" subtitle="Sanity represents the character's state of mind. Losing sanity can be the result of attacks or failed WIL checks when 
                seeing horrible things. If the sanity reaches 0 at any point, the character gets a level of Insanity.">
                <Insanity />
            </CollapsiblePanel>
        </div>
    </section>
  )
}

