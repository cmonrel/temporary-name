export const Item_Values = () => {
  return (
    <section>
      <br />
      <div className="grid">
        <p>
          The level of the item is generally split as follows:
          <ul>
            <li>Bonus for skill: +1 per level</li>
            <li>Bonus for attribute: +1 per two levels</li>
            <li>Weapon damage: 1 per level</li>
            <li>Armour/shield: 1 per three levels (per point in restriction, two points can be added up to six additional points)</li>
          </ul>
        </p>
        

        <p>
            The total item level consists of three item values:
            <ul>
              <li>Physical funtion (P-value)</li>
              <li>Enchantment (E-value) * 3</li>
              <li>Artistry (A-Value)</li>
            </ul>
        </p>
      </div>
    </section>
  )
}

