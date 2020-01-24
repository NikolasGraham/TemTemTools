import React, {useEffect, useState} from 'react';

export const useTypeCalculator = () => {

    const [effectiveTypes, setEffectiveTypes] = useState();
    const [typeOne, setTypeOne] = useState();
    const [typeTwo, setTypeTwo] = useState();

    const attackingBonus = {
        neutral: {
            neutral: 1,
            fire: 1,
            water: 1,
            nature: 1,
            electric: 1,
            earth: 1,
            mental: 0.5,
            wind: 1,
            digital: 1,
            melee: 1,
            crystal: 1,
            toxic: 1
        },
        fire: {
            neutral: 1,
            fire: 0.5,
            water: 0.5,
            nature: 2,
            electric: 1,
            earth: 0.5,
            mental: 1,
            wind: 1,
            digital: 1,
            melee: 1,
            crystal: 2,
            toxic: 1
        },
        water: {

        },
        nature: [

        ],
        electric: [

        ],
        earth: [

        ],
        mental: [

        ],
        wind: [

        ],
        digital: [

        ],
        melee: [

        ],
        crystal: [

        ],
        toxic: [

        ]
    };
    const defendingBonus = {
        neutral: {
            name: "neutral",
            neutral: 1,
            fire: 1,
            water: 1,
            nature: 1,
            electric: 1,
            earth: 1,
            mental: 2,
            wind: 1,
            digital: 1,
            melee: 1,
            crystal: 1,
            toxic: 1
        },
        fire: {
            name: "fire",
            neutral: 1,
            fire: 0.5,
            water: 2,
            nature: 0.5,
            electric: 1,
            earth: 2,
            mental: 1,
            wind: 1,
            digital: 1,
            melee: 1,
            crystal: 1,
            toxic: 1
        },
        water: {
            name: "water",
            neutral: 1,
            fire: 0.5,
            water: 0.5,
            nature: 2,
            electric: 2,
            earth: 0.5,
            mental: 1,
            wind: 1,
            digital: 1,
            melee: 1,
            crystal: 1,
            toxic: 2
        },
        nature: {
            name: "nature",
            neutral: 1,
            fire: 2,
            water: 0.5,
            nature: 0.5,
            electric: 0.5,
            earth: 0.5,
            mental: 1,
            wind: 1,
            digital: 1,
            melee: 1,
            crystal: 1,
            toxic: 2
        },
        electric: {
            name: "electric",
            neutral: 1,
            fire: 1,
            water: 1,
            nature: 1,
            electric: 0.5,
            earth: 2,
            mental: 1,
            wind: 0.5,
            digital: 1,
            melee: 1,
            crystal: 2,
            toxic: 1
        },
        earth: {
            name: "earth",
            neutral: 1,
            fire: 0.5,
            water: 2,
            nature: 2,
            electric: 0.5,
            earth: 1,
            mental: 1,
            wind: 2,
            digital: 1,
            melee: 2,
            crystal: 0.5,
            toxic: 0.5
        },
        mental: {
            name: "mental",
            neutral: 0.5,
            fire: 1,
            water: 1,
            nature: 1,
            electric: 2,
            earth: 1,
            mental: 1,
            wind: 1,
            digital: 2,
            melee: 0.5,
            crystal: 2,
            toxic: 1
        },
        wind: {
            name: "wind",
            neutral: 1,
            fire: 1,
            water: 1,
            nature: 1,
            electric: 2,
            earth: 0.5,
            mental: 1,
            wind: 0.5,
            digital: 1,
            melee: 1,
            crystal: 1,
            toxic: 1
        },
        digital: {
            name: "digital",
            neutral: 1,
            fire: 1,
            water: 2,
            nature: 1,
            electric: 2,
            earth: 1,
            mental: 1,
            wind: 1,
            digital: 2,
            melee: 1,
            crystal: 1,
            toxic: 0.5
        },
        melee: {
            name: "melee",
            neutral: 1,
            fire: 1,
            water: 1,
            nature: 1,
            electric: 1,
            earth: 1,
            mental: 2,
            wind: 1,
            digital: 2,
            melee: 0.5,
            crystal: 1,
            toxic: 1
        },
        crystal: {
            name: "crystal",
            neutral: 1,
            fire: 2,
            water: 1,
            nature: 1,
            electric: 0.5,
            earth: 2,
            mental: 0.5,
            wind: 1,
            digital: 1,
            melee: 2,
            crystal: 1,
            toxic: 0.5
        },
        toxic: {
            name: "toxic",
            neutral: 1,
            fire: 1,
            water: 0.5,
            nature: 0.5,
            electric: 1,
            earth: 1,
            mental: 1,
            wind: 2,
            digital: 1,
            melee: 1,
            crystal: 1,
            toxic: 0.5
        }
    };

    useEffect(() => {
        effectiveTypingSetter();
    }, [typeOne, typeTwo]);

    const effectiveTypingSetter = () => {
        console.log("SettingEffectiveTypes");
        if (typeOne !== undefined && typeTwo !== undefined) {
            setEffectiveTypes({
                neutral: typeOne.neutral * typeTwo.neutral,
                fire: typeOne.fire * typeTwo.fire,
                water: typeOne.water * typeTwo.water,
                nature: typeOne.nature * typeTwo.nature,
                electric: typeOne.electric * typeTwo.electric,
                earth: typeOne.earth * typeTwo.earth,
                mental: typeOne.mental * typeTwo.mental,
                wind: typeOne.wind * typeTwo.wind,
                digital: typeOne.digital * typeTwo.digital,
                melee: typeOne.melee * typeTwo.melee,
                crystal: typeOne.crystal * typeTwo.crystal,
                toxic: typeOne.toxic * typeTwo.toxic
            })
        } else if (typeOne !== undefined) {
            setEffectiveTypes(typeOne);
        }
    };

    return {
        attackingBonus,
        defendingBonus,
        effectiveTypes,
        typeOne,
        setTypeOne,
        typeTwo,
        setTypeTwo
    }

};