export const Crafting_Checks = () => {
  return (
    <section>
        <br />
        <div className="grid">
            <p>
                Simple items require only one check against the desired physical level of the item. If the 
                check fails, half of the materials used are wasted beyond recovery. A new check can be 
                attempted with the addition of new materials.
            </p>
            <p>
                Complex items have three phases. In the case of enchanted items, there are four.
            </p>

            <h4>Preparation phase</h4>
            <p>
                Preparing the basic materials and drafting a concept for the item. Having a recipe can 
                give you a bonus here, while the tools and workshop cannot. The crafting checks if rolled 
                against the desired physical value of the item. The bonus or penalty for the selected 
                materials are taken into account here. The Quality of this check counts as a bonus or 
                penalty for the production phase.
            </p>

            <div className="grid">
                <h4>Production phase</h4>
                <p>
                    Here, the raw parts of the item are created. Another crafting check is rolled against the 
                    physical value of the item. The bonus or penalty for the workshop or tools is taken into 
                    account here as well as the Quality of the preparation phase. The Quality of a successful 
                    check counts as a bonus in the refinement phase. A Quality of 2 or more raises the achieved 
                    physical value by 1.
                </p>
                <p>
                    Failing this phase by more than two points means that half of the used materials are wasted 
                    the rest can be recovered for a new try. No item is produced. Failing by one or two points 
                    reduces the achieved physical value by that amount.
                </p>

            </div>

            <div className="grid">
                <h4>Enchantment phase (optional)</h4>
                <p>
                    For creating enchanted items, you need someone (or yourself) to perform the feat of magic 
                    that you want to imprint onto the item. This person rolls a check against the enchantment 
                    value. If this check fails, you can either decide to use the Grade as a new enchantment value 
                    or they can roll again with a penalty of the Grade of failure. The enchantment value will 
                    then be set to this grade. You can also use a stored version of the spell (depending on 
                    setting and ultimately on the DM).
                </p>
                <p>
                    Now roll a check with your enchantment skill against the enchantment value. If you fail, you 
                    can try again with a penalty of the grade of failure. A second fail means you cannot try again 
                    and the item will not be enchanted.
                </p>
                <p>
                    In addition to the enchantment itself, the item needs a gem of sufficient quality to power the 
                    enchantment. Recommended rule of thumb: a gem can hold source points equal to two times its 
                    item level. They have to be recharged by transferring source points from the character to the 
                    gem and cannot be taken back. In case of potions and other one-use items, no gem is needed. 
                </p>
            </div>

            <div className="grid">
                <h4>Refinement phase</h4>
                <p>
                    Now all parts are assembled, and the item can be refined. The difficulty for this check is 2, 
                    the Quality of the check will be the achieved artistry value of the item.
                </p>
                <p>
                    Remember to add the bonus/penalty from the production phase. The player can also add valuable 
                    material (gold, jewels) to get a bonus for the check (up to +3, decided by DM).
                </p>
            </div>
        </div>
    </section>
  )
}

