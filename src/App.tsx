import { useEffect, useState } from 'react';
import Login from './components/Login';
import RoomList from './components/RoomList';
import Game from './components/Game';
import background from './background.png';

function App() {
  const [gameScene, changeScene] = useState(0); // gameScene = 0: Login, 1: RoomList, 2: Game

  const nextScene = () => {
    changeScene(gameScene + 1);
  }

  useEffect(() => {
    //console.log("hello, there?");
  }, [gameScene]);

  return (
    <div style={{
      backgroundSize: "cover",
      backgroundImage: `url(${background})` }}>
        {(gameScene == 0)? (<Login changeScene={nextScene}/>):(
         (gameScene == 1)? (<RoomList changeScene={nextScene}/>):(<Game />))}
    </div>
  );
}

export default App;
