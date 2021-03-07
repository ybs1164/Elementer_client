import { useState } from 'react';
import ether from './image/ether.png';
import air from './image/air.png';
import water from './image/water.png';
import soil from './image/soil.png';
import fire from './image/fire.png';
import background from '../../background.png';

const cardStyle = {
    width: "6vw",
    height: "9vw",
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    border: "1px solid #000000",
    borderRadius: "5px",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none"
};

const cardBackground = {
    background: `url(${background})`,
    backgroundSize: "cover"
}

const elementStyle = {
    maxWidth: "100%",
    maxHeight: "100%"
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

// 선택 가능하게
function ElementCard(card: any) {
    return (
        <div style={{...card.style, ...cardStyle, ...(card.type==-1 && cardBackground)}}>
            <img style={elementStyle} src={getImage(card.type)}/>
        </div>
    )
}

export default ElementCard;