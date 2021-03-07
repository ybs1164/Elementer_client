import { useEffect, useState } from 'react';
import ether from './image/ether.png';
import air from './image/air.png';
import water from './image/water.png';
import soil from './image/soil.png';
import fire from './image/fire.png';

interface MagicInfo {
    name: string;
    needElements: number[];
    description: string;
}

const magicCard = {
    width: "12vw",
    height: "18vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "#ffffff",
    border: "3px solid #000000",
    borderRadius: "5px",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none"
};

const miniCard = {
    width: "6vw",
    height: "9vw",
}

const commentCard = {
    position: "relative",
    zIndex: "3"
}

const elementStyle = {
    maxWidth: "5vw",
    maxHeight: "5vw",
}

const getImage = (type: number) => {
    switch (type) {
        case 0:
            return ether;
        case 1:
            return air;
        case 2:
            return water;
        case 3:
            return soil;
        case 4:
            return fire;
        default:
            return "";
    }
}

// card.id : magicList[card.id].name
function MagicCard(card: any) {
    const [isEnable, setEnable] = useState(false);

    const [cardMin, setCardMin] = useState(card.isMin);
    const [isComment, Commented] = useState(false);

    const mouseHover = () => {
        if (cardMin) {
            setCardMin(false);
            Commented(true);
        }
    }

    const mouseLeave = () => {
        if (isComment) {
            Commented(false);
            setCardMin(true);
        }
    }

    return (
        <div onMouseOver={mouseHover} onMouseLeave={mouseLeave} style={{...card.style, ...magicCard, ...(cardMin && miniCard), ...(isComment && commentCard)}}>
            <p style={{fontSize: (cardMin? "0.88vw":"1.8vw"), textAlign:"center", margin: 0}}>
                {magicList[card.id].name}
            </p>
            <div style={{display: "flex", justifyItems: "center", alignItems: "center"}}>
                {(!cardMin && magicList[card.id].needElements.length>0) && 
                    <p style={{fontSize: "0.88vw", textAlign: "center", margin: 3}}>
                        필요 원소
                    </p>
                }
                {magicList[card.id].needElements.map((element, index:number) => {
                    return <img style={{...elementStyle, position:"relative", left: "3vw", marginLeft: "-4vw"}} src={getImage(element)}/>
                })}
            </div>
            {!cardMin &&
                <span style={{fontSize: "1vw"}}>
                    {magicList[card.id].description}
                </span>
            }
        </div>
    )
}

const magicList: MagicInfo[] = [
    {
        name: "익스플로전",
        needElements: [4, 4],
        description:
`적에게 3 데미지를 줍니다.

공기 원소가 있다면 파괴하고 파괴한 공기 하나 당 피해량이 2배가 됩니다.

불 원소를 대기에 추가합니다.`
    },
    {
        name: "토네이도",
        needElements: [1, 1, 1],
        description:
`적에게 6 데미지를 줍니다.

공기 원소를 대기에 추가합니다.`
    },
    {
        name: "윈드 에로우",
        needElements: [1, 1],
        description:
`적에게 3 데미지를 줍니다.

대기에 공기 원소 1장 추가.
대기에 흙 원소 1장 파괴합니다.`
    },
    {
        name: "에어 컴프레서",
        needElements: [1, 1],
        description:
`적에게 2 데미지를 줍니다.

사용한 공기 원소가 서로 붙어있었다면 피해를 8 줍니다.`
    },
    {
        name: "비구름",
        needElements: [2, 1],
        description:
`불 원소 1장 파괴.
물 원소 1장 추가.

이번 턴 물 원소를 사용하는 원소술은 피해를 2 더 줍니다.`
    },
    {
        name: "물총",
        needElements: [2],
        description:
`적에게 1 데미지를 줍니다.

사용한 물 원소가 대기 오른쪽 끝에 있다면 다시 사용할 수 있습니다.`
    },
    {
        name: "다짐",
        needElements: [],
        description:
`페이즈를 시작할 때 자신의 체력을 모두 회복합니다.`
    },
    {
        name: "나무",
        needElements: [3, 2],
        description:
`흙과 물 원소가 붙어 있어야 합니다.

체력을 3 회복합니다.
대기에 공기 원소 1장 추가합니다.`
    },
    {
        name: "연쇄",
        needElements: [],
        description:
`원소술을 사용하면 원소를 뽑아 대기에 추가합니다.`
    },
    {
        name: "만들어진 행운",
        needElements: [],
        description:
`이 카드는 한 번만 사용할 수 있습니다.
대기에서 선택한 원소 7장을 대기 덱에 추가합니다.`
    },
    {
        name: "파이어 볼",
        needElements: [4, 4],
        description:
`적에게 5 데미지를 줍니다.`
    },
    {
        name: "물폭탄",
        needElements: [2, 2, 2, 2],
        description:
`모든 적에게 8 데미지를 줍니다.`
    },
    {
        name: "프리즈",
        needElements: [1, 2, 1],
        description:
`적에게 3 데미지를 줍니다.
그 적은 다음 턴에 아무것도 하지 못합니다.`
    },
    {
        name: "방패",
        needElements: [3, 4],
        description:
`자신에게 들어오는 효과를 한 번 무효화합니다.`
    },
    {
        name: "번개",
        needElements: [4, 1],
        description:
`적에게 1 데미지를 줍니다. 

그 적의 원소술 하나를 제거합니다.`
    }
]

export default MagicCard;