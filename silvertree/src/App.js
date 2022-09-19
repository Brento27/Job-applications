import Button from './components/Button';

function App() {
  const colours = ['green', 'red', 'yellow', 'blue', 'purple'];
  return (
    <div>
      <Button colours={colours} />
    </div>
  );
}

export default App;
