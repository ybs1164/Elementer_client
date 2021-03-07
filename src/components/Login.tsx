import { useEffect, useState } from 'react';
import { Button, Row, Col, Input, Typography } from 'antd';
import socket from '../Connect';

const { Title } = Typography;

function Login(props: any) {
  const [nickname, setNickname] = useState("");
  const [isConnect, setConnect] = useState(false); 

  const nameSet = (evt: any) => {
    setNickname(evt.target.value);
  }

  const serverJoin = () => {
    setConnect(true);
    socket.emit("login", nickname);
  }
  
  useEffect(() => {
    socket.on("accepted", () => {
      console.log("connect success");
      props.changeScene();
    });

  }, []);

  return (
    <Row justify="center" align="middle" style = {{height:"100vh"}}>
      <Col span={8}>
        <Title>
          원소술사
        </Title>
        <Input 
          style={{margin: '50px 0 0 0'}}
          placeholder="Nickname"
          onChange={evt => nameSet(evt)}
        />
        <Button 
          onClick={serverJoin} 
          style={{margin: '50px 0 0 0'}} 
          type="primary"
          disabled={isConnect}
          block
        >Join</Button>
      </Col>
    </Row>
  );
}

export default Login;