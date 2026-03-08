export const Opponents = () => {
  return (
    <section className="page">
        <header>
            <h2 className="page-title">Opponets (TBD)</h2>
            <p className="page-subtitle">Enemies, creatures and dangers that stalk the world.</p>
        </header>
        <div className="grid">
            <p>
                Most enemies are described by a level that describes their overall strength. When 
                a character fights the enemy, the enemy level represents the difficulty of the checks. 
                Sometimes the enemy must roll dice (e.g. during a ranged attack or argument), in that 
                situation, the game master rolls twice as many dice as the level.
            </p>
            <p>
                Item bonuses and penalties (e.g. from wounds) are divided by two (rounded down) and added 
                to the level, if relevant for an action.
            </p>
            <p>
                Special enemies can have base attributes and skills like a character. It's easier to use 
                the level as a generic base start and list 3-6 skills that are most important. Special enemies 
                can use item bonuses and penalties as usual. When they fight a character, the DM rolls the 
                dice and the number of successes is the difficulty for the player.
            </p>
        </div>
    </section>
  )
}

