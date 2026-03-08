import type { CharacterCreationProps } from "./characterCreation.functions"

export const Attributes = ({attrs} : CharacterCreationProps) => {
  return (
    <section>
        <br />
        <div className="grid">
            
            <div className="table-wrapper">
                <table className="table table--vertical table--creation">
                    <tbody>
                        <tr>
                            <th>Value</th>
                            {attrs?.map((value, i) => (
                                <td key={i}>{value.value}</td>                            
                            ))}
                        </tr>
                        <tr>
                            <th>Description</th>
                            {attrs?.map((value, i) => (
                                <td key={i}>{value.description}</td>                            
                            ))}
                        </tr>
                        <tr>
                            <th>Cost</th>
                            {attrs?.map((value, i) => (
                                <td key={i}>{value.cost}</td>                            
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}
