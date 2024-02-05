import './tailwind.css'
import Button from './components/Button'

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-4">
      <Button text="yazdır butonu" />
      <Button text="yazdır butonu" variant="danger"/>
      <Button text="yazdır butonu" variant="warning"/>
      <Button text="yazdır butonu" variant="success"/>
    </div>
  );
}

export default App;
