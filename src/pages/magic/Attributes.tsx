export const Attributes = () => {
  return (
    <section>
        <br />
        <div className="grid">
            <p>
                Magic attributes are used instead of the basic attributes to make checks,
                where the used skill is the corresponding magic ability.
            </p>

            <p>
                Other important values are Source Points and Channel Capacity. The first is used to pay 
                the cost of magic, while the second states how many Source Points can be spent per 
                round. This means that larger effects take more rounds to complete. It is possible to 
                cross that threshold, but then an equal amount of d6 is rolled. Each failure means 1 point 
                damage to the caster.
            </p>
        </div>
    </section>
  )
}

