export interface CharacterCreationProps {
    values?: Creation[];
    attrs?: AttributeMagic[];
    skills?: Skill[];
}

export interface Creation {
    level: number;
    creationPoints: number;
    maxAttr: number;
    maxSkill: number;
}

export interface Skill {
    value: number;
    description: String;
    cost: number;
}

export interface AttributeMagic {
    value: number;
    description: String;
    cost: number;
}



export const fillTable = () => {
    const tableValues: Creation[] = [
        {level: 0, creationPoints: 40, maxAttr: 3, maxSkill: 6},
        {level: 1, creationPoints: 55, maxAttr: 3, maxSkill:7},
        {level: 2, creationPoints: 64, maxAttr: 4, maxSkill: 7},
        {level: 3, creationPoints: 73, maxAttr: 4, maxSkill: 8},
        {level: 4, creationPoints: 82, maxAttr: 4, maxSkill: 8},
        {level: 5, creationPoints: 91, maxAttr: 4, maxSkill: 9},
        {level: 6, creationPoints: 100, maxAttr: 5, maxSkill: 9},
        {level: 7, creationPoints: 109, maxAttr: 5, maxSkill: 10},
        {level: 8, creationPoints: 118, maxAttr: 5, maxSkill: 10},
        {level: 9, creationPoints: 127, maxAttr: 5, maxSkill: 11},
        {level: 10, creationPoints: 136, maxAttr: 6, maxSkill: 11},
        {level: 11, creationPoints: 145, maxAttr: 6, maxSkill: 12},
        {level: 12, creationPoints: 154, maxAttr: 6, maxSkill: 12},
    ];

    return tableValues;
}

export const fillSkills = () => {
    const tableValues: Skill[] = [
        {value: 1, description: "Beginner", cost: 1},
        {value: 2, description: "Beginner", cost: 1},
        {value: 3, description: "Beginner", cost: 1},
        {value: 4, description: "Beginner", cost: 1},
        {value: 5, description: "Advanced", cost: 2},
        {value: 6, description: "Advanced", cost: 2},
        {value: 7, description: "Advanced", cost: 2},
        {value: 8, description: "Professional", cost: 3},
        {value: 9, description: "Professional", cost: 3},
        {value: 10, description: "Professional", cost: 3},
        {value: 11, description: "Genius", cost: 4},
        {value: 12, description: "Genius", cost: 4},
    ];

    return tableValues;
}

export const fillAttributesMagic = () => {
    const tableValues: AttributeMagic[] = [
        {value: 1, description: "Untalented", cost: 1},
        {value: 2, description: "Average", cost: 2},
        {value: 3, description: "Talented", cost: 3},
        {value: 4, description: "Trained", cost: 4},
        {value: 5, description: "Expert", cost: 5},
        {value: 6, description: "Genius", cost: 6},
    ];

    return tableValues;
}