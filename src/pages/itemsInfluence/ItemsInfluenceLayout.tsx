import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"
import { Influence } from "./Influence"
import { Item_Values } from "./Item_Values"
import { Obstruction } from "./Obstruction"

export const ItemsInfluence = () => {
  return (
    <section className="page">
        <header>
            <h2 className="page-title">Items and Influence</h2>
            <p className="page-subtitle">Equipment, wealth and the power of reputation.</p>
        </header>

        <h3> How to aquire items </h3>
        
        <div className="grid">
            <p>
                Each item in the game is represented by a card that shows the level
                and the effect of the item. There's no hard maximum of cards, but it should
                make sense, and the GM can give a penalty for checks if a character carries
                many items.
            </p>

            <CollapsiblePanel title="Influence" subtitle="Instead of money, each character has influence, which represents social status, 
                money and connections. To be able to buy/borrow/get an item the character has 
                to have an influence of at least the level of the item. Purchasing an item of 
                the same level as the influence should happen rarely or else the level of
                influence will decrease. Finding treasures or doing favours increases influence.
                Influence is a very vague rule, so it's important that GM and players cooperate 
                and solve it in roleplay.">
                <Influence />
            </CollapsiblePanel>

            <CollapsiblePanel title="Item values (TBD)">
                <Item_Values />
            </CollapsiblePanel>

            <CollapsiblePanel title="Obstruction penalty">
                <Obstruction />
            </CollapsiblePanel>
        </div>
    </section>
  )
}