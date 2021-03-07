import { useState, useEffect } from 'react';
import { Row, Col, List, Input, Button, Modal } from 'antd';
import socket from '../Connect';
import { setTokenSourceMapRange } from 'typescript';

interface room {
  id: string;
  name: string;
  author: string;
}

function RoomList(props: any) {
  const [name, setValue] = useState("");
  const [roomList, setRoomList] = useState<room[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const setName = (evt: any) => {
    setValue(evt.target.value);
  }

  const newRoom = () => {
    setIsModalVisible(false);
    socket.emit('addRoom', name);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const joinRoom = (id: string) => {
    socket.emit('join', id);
  }; 


  useEffect(() => {
    socket.on('roomList', (data: any) => {
      setRoomList(data);
    });

    socket.on('gaming', () => {
      props.changeScene();
    });

    socket.emit('getRooms');
  }, []);

  return (
    <Row justify="center" style = {{height:"100vh"}}>
      <Col span={16}>
        <List
          itemLayout="horizontal"
          dataSource={roomList}
          renderItem={(item) => (
            <List.Item onClick={() => {joinRoom(item.id)}}>
              <List.Item.Meta
                title={item.name}
                description={item.author}
              />
            </List.Item>
          )}
        />
        <Button 
          onClick={showModal}
          block>
          New Room
        </Button>
        <Modal title="New Room" visible={isModalVisible} onOk={newRoom} onCancel={hideModal}>
            <p> content...</p>
            <Input 
              placeholder="Game name"
              onChange={evt => setName(evt)}/>
        </Modal>
      </Col>
    </Row>
  );
}

export default RoomList;