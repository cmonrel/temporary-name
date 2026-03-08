import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"
import { Crafting_Checks } from "./Crafting_Checks"
import { Duration } from "./Duration"
import { Materials_Tools } from "./Materials_Tools"

export const Crafting = () => {
  return (
    <section className="page">
        <header>
            <h2 className="page-title">Crafting</h2>
            <p className="page-subtitle">Create tools, weapons and wonders with skill and time.</p>
        </header>
        
        <div className="grid">
            <p>
                To craft items, brew potions, and forge weapons, crafting checks based on 
                finesse must be passed. The level of the crafted item must be determined 
                in advance.
            </p>
            <p>
                A distinction is made between simple items (e.g. knives, rope, simple clothing) 
                and complete items (e.g. enchanted weapons, sextant, healing potions, sword). The 
                general crafting skill can only be used for simple items. Simple items can only 
                have a physical value. For complex items, the corresponding crafting skill has to 
                be used (e.g. metalwork, woodwork, ceramics, glass blowing, tailoring, chemistry/
                alchemies, electronics).
            </p>
            <p>
                Complex items can also require specialised knowledge (e.g. a healing potion recipe), 
                which the character should acquire through role-playing.
            </p>
            <p>
                For enchanted objects a enchanting skill has to be used additionally.
            </p>

            <CollapsiblePanel title="Materials and tools" subtitle="For simple items, inexpensive materials are sufficient. These materials are often 
                interchangeable and should make sense for both players and the GM. Complex items, on the 
                other hand, require specific parts that are harder to replace.">
                <Materials_Tools />
            </CollapsiblePanel>

            <CollapsiblePanel title="Crafting checks" subtitle="">
            {/*TODO: Poner el contenido de dentro en paneles*/}
                <Crafting_Checks />
            </CollapsiblePanel>

            <CollapsiblePanel title="Duration" subtitle="After the process of crafting an item, there is a rule for how long it took the character to 
                accomplish that.">
                <Duration />
            </CollapsiblePanel>
        </div>
    </section>
  )
}

