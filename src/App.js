import Header from './components/organisms/Header';
import Profile from './components/organisms/MainContents/Profile';
import SkillList from './components/organisms/MainContents/Skills/SkillList';
import Product from './components/organisms/MainContents/Product';
import Social from './components/organisms/MainContents/Social';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <SkillList />
      <Product />
      <Social />
    </div>
  );
}

export default App;
