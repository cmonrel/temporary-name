import type { CharacterCreationProps } from "./characterCreation.functions"

export const LevelingUp = ({values} : CharacterCreationProps) => {
  return (
    <section>
        <br />
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Creation Points (diff. to prev. level)</th>
                        <th>Max. Attribute</th>
                        <th>Max. Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {values?.map((value, i) => (
                        <tr key={i}>
                            <td>{value.level}</td>
                            <td>{value.creationPoints}</td>
                            <td>{value.maxAttr}</td>
                            <td>{value.maxSkill}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
  )
}
