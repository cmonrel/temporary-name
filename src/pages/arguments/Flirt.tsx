export const Flirt = () => {
  return (
    <section>
      <br />
      <div className="grid">
        <p>
          The basic rules are similar to the logic-based discussion. However, instead of MIN CHA is the base 
          attribute for the checks. The DM can give the player a bonus or penalty depending on the target's 
          attitude toward the character and adapt the discussion points like above. The target's response also 
          depends on the attitude. They may flirt back, and the character finds himself drawn to the target. But 
          they may also want to coldly reject the character or ridicule them.
        </p>
        <p>
          The example offers inspiration for different styles of flirting/rejecting. You can be polite, playful, 
          sincere or superficial. Of course, you can add your own style to that!
        </p>

        <h3>Flirt</h3>
        
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <th>Quality</th>
              <th>Example</th>
            </thead>
            
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Showing off, allusion, pick-up line, polite smalltalk.
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Superficial compliments, simple jokes, relaxed body language, expressing genuine but 
                  respectful interest in superficial topics
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Genuine compliments, appropriate physical touch, playful banter, ask about personal topics
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  In-depth conversation, shared humour, genuine emotional connection, high-quality listening
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Reject</h3>
        
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Quality</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Flustered stuttering, awkward silence, laugh
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Subtle signals, change topic, make a joke
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Tell them you are not interested, try to ignore them, and try to present yourself 
                  less desirable by doing something embarrassing. 
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Politely and respectfully explain your feelings, completely destroy their self-confidence
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}


