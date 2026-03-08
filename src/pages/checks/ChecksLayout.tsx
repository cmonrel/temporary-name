import { Attribute_Checks } from "./Attribute_Checks"
import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"
import { Helping } from "./Helping"
import { Skill_Checks } from "./Skill_Checks"

export const Checks = () => {
  return (
    <section className="page">
        <header>
            <h2 className="page-title">Checks</h2>
            <p className="page-subtitle">Resolve actions with skill, risk, and fate.</p>
        </header>
        <div className="grid">
            <CollapsiblePanel title="Skill Check" subtitle="Example: <FIN> lockpicking + 1 (2)
                -> Picking a lock with tools that give a bonus of +1, against a 
                lock with difficulty 2.">
                <Skill_Checks />
            </CollapsiblePanel>

            <CollapsiblePanel title="Attribute check" subtitle="Example: <> ()
                -> .">
                <Attribute_Checks />
            </CollapsiblePanel>
            
            <CollapsiblePanel title="Helping">
                <Helping />
            </CollapsiblePanel>
        </div>
    </section>
  )
}
