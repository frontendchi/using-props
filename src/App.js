import './tailwind.css'
import Button from './components/Button'

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-4">
      <Button>
       default
      </Button>
      <Button variant="danger">
        danger
      </Button>
      <Button variant="warning">
        warning
      </Button>
      <Button variant="success">
        success
      </Button>
    </div>
  );
}

export default App;
