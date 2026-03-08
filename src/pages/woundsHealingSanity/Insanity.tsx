import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"
import { Insanity_Level1 } from "./Insanity_Level1"
import { Insanity_Level2 } from "./Insanity_Level2"
import { Insanity_Level3 } from "./Insanity_Level3"
import { Insanity_Level4 } from "./Insanity_Level4"
import { Insanity_Level5 } from "./Insanity_Level5"
import { Insanity_Level6 } from "./Insanity_Level6"

export const Insanity = () => {
  return (
    <section>
        <br />
        <div className="grid">
            <p>
                Each new level in Insanity brings a mental disorder for the character. Beginning from small ticks at level one, it can 
                come to hallucinations and finally total madness. The detailed effect of Insanity can be chosen by the DM and 
                player or rolled randomly on the following tables with a D20.
            </p>
            <p>
                Sanity can be recovered by a successful check in psychology (made by the therapist) during a 10-minute therapy session in a safe 
                environment. The difficulty is the current level of insanity +1. The Quality of the check represents the points of Sanity 
                that are regained.
            </p>
            <p>
                The level of Insanity can only be lowered by a longer psychological treatment and is left to role play.
            </p>

            <CollapsiblePanel title="Insanity - Level 1">
                <Insanity_Level1 />
            </CollapsiblePanel>

            <CollapsiblePanel title="Insanity - Level 2">
                <Insanity_Level2 />
            </CollapsiblePanel>

            <CollapsiblePanel title="Insanity - Level 3">
                <Insanity_Level3 />
            </CollapsiblePanel>

            <CollapsiblePanel title="Insanity - Level 4">
                <Insanity_Level4 />
            </CollapsiblePanel>

            <CollapsiblePanel title="Insanity - Level 5">
                <Insanity_Level5 />
            </CollapsiblePanel>

            <CollapsiblePanel title="Insanity - Level 6">
                <Insanity_Level6 />
            </CollapsiblePanel>
        </div>

    </section>
  )
}

