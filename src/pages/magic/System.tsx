export const System = () => {
  return (
    <section>
        <br />
        <div className="grid">
            <p>
                The 8 categories are:
            </p>

            <div className="bullet-attributes">
                <ul>
                    <li>Attack</li>
                    <li>Defend</li>
                    <li>Buff</li>
                    <li>Debuff</li>
                </ul>
                <ul>
                    <li>Information</li>
                    <li>Heal</li>
                    <li>Mind</li>
                    <li>Special</li>
                </ul>
            </div>

            <p>
                Each of them states so called Effect Levels, which describe the overall power and difficulty 
                of the cast magic. It includes things like Target size and Duration. It’s important to note 
                that categories are not bound to schools of magic. It doesn't matter if an attack is made 
                with ice magic, necromantic touch or something entirely else. Defining which schools of 
                magic exists, and what categories are possible to use with them is entirely up to the 
                creator of the world. 
            </p>

            <div className="panel">
                    <h2 className="panel-title">Conjuring the magic</h2>
                    <div className="grid">
                        <p>
                            After selecting an effect and its level, the character has to roll a check to see if they can 
                            summon the magic they want to. The check uses Power + {'<'}Magic skill{'>'} against the Effect 
                            Level and counts as a main action. If the Effect Level is greater than the Channel Capacity 
                            the conjuration can be split over multiple rounds, or the damage for overloading has to be 
                            rolled as stated above.
                        </p>

                        <p>
                            The cost for the spell is equal to the effect level, in case of a failure, only half of the cost 
                            has to be paid.
                        </p>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Hitting the target</h2>
                    <div className="grid">
                        <p>
                            In case the target of the magic is not in touching distance, a second check has to be 
                            rolled. This check uses Control + {'<'}Magic skill{'>'} against the Target difficulty which is 
                            almost the same as for a ranged weapon attack. The quality causes extra damage. This 
                            check counts as one side action. 
                        </p>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Concentration</h2>
                    <div className="grid">
                        <p>
                            If the duration of a spell is one round, but the caster wants to keep it going, they have to 
                            concentrate on it as their main action in each round. The cost has to be paid each round. 
                            There is no further check needed except if the target frees themselves from the effect, or 
                            the caster is hit by an attack that causes a severe wound and loses concentration. 
                            To check that they must roll on {'<'}WIL{'>'} -X (1). X is the number of severe wounds caused by 
                            the attack. On a fail, the concentration is lost. 
                        </p>
                    </div>
            </div>
        </div>
    </section>
  )
}

