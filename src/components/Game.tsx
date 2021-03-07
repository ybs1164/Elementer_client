import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import socket from '../Connect';
import ElementCard from './Magic/elementCard';
import MagicCard from './Magic/magicCard';


function Game() {
    const [elements, setElements] = useState<number[]>([])
    const [selectIndex, selectElement] = useState<number[]>([])

    const useMagic = () => {

    };

    const toggleElement = (key: number) => {
        selectIndex.forEach((index) => {
            if (index == key) {
                selectIndex.splice(key, 1);
                return;
            }
        });
        selectIndex.push(key);
    };

    useEffect(() => {
        socket.on('elements', (elementsData: number[]) => {
            setElements(elementsData);
        });

        socket.on('playersMagics', (data: number[]) => {

        });

        socket.emit('getGame');
    }, []);

    return (
        <Row justify="center" align="middle" style = {{height:"100vh"}}>
            <div style={{display: "flex", justifyContent:"center", width: "100%"}}>
                <div style={{display:"flex", justifyContent:"center", width: "33%"}}>
                    <MagicCard id={1} isMin={true}/>
                    <MagicCard id={2} isMin={true}/>
                    <MagicCard id={3} isMin={true}/>
                </div>
                <div style={{display:"flex", justifyContent:"center", width: "33%"}}>
                    <MagicCard id={4} isMin={true}/>
                    <MagicCard id={5} isMin={true}/>
                    <MagicCard id={6} isMin={true}/>
                </div>
                <div style={{display:"flex", justifyContent:"center", width: "33%"}}>
                    <MagicCard id={7} isMin={true}/>
                    <MagicCard id={8} isMin={true}/>
                    <MagicCard id={9} isMin={true}/>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width:"100%"}}>
                <ElementCard style={{
                    margin: "0px 60px"
                }} type={-1}/>
                {elements.map((element: number, index: number) => {
                    return (<ElementCard select={toggleElement} style={{margin: "0px 2px"}} type={element} key={index}/>);
                })}
                <ElementCard style={{
                    margin: "0px 60px"
                }} type={-1}/>
            </div>
            <div style={{display: "flex", width: "100%", justifyContent: "center", }}>
                <MagicCard id={0} style={{marginRight: 10}}/>
                <MagicCard id={11} style={{marginRight: 10}}/>
                <MagicCard id={10} style={{marginRight: 10}}/>
            </div>
        </Row>
    )
}

export default Game;