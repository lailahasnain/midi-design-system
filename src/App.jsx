import Button from './components/Button/Button'
import './components/Button/Button.css'

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button hierarchy="primary" size="md">Primary</Button>
      <Button hierarchy="secondary" size="md">Secondary</Button>
      <Button hierarchy="tertiary" size="md">Tertiary</Button>
    </div>
  )
}

export default App