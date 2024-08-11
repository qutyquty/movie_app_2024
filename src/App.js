import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

//react-router-dom 6버전 부터 Routes 를 사용해야 Route 를 사용할 수 있다.
//Link to 도 다른 방법으로 해야 한다.
//그래서 <클론 코딩 영화 평점 웹서비스>를 따라하기 위해서는
//react-router-dom 5버전을 사용해야 한다.
//npm install react-router-dom@5.2.0

function App() {
  return (
    <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;