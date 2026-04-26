import { useState } from 'react'
import Button from './components/Button/Button'
import SelectablePill from './components/SelectablePill/SelectablePill'
import SymptomCard from './components/SymptomCard/SymptomCard'

const symptoms = ['Brain fog', 'Hot flashes', 'Fatigue', 'Poor sleep', 'Low mood', 'Headaches']

function App() {
  const [selected, setSelected] = useState([])

  const toggle = (label) => {
    setSelected(prev =>
      prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]
    )
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', fontFamily: 'DM Sans, sans-serif' }}>

      {/* 1 - Buttons */}
      <h3 style={{ marginBottom: '16px' }}>Buttons</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
        <Button hierarchy="primary" size="md">Primary</Button>
        <Button hierarchy="secondary" size="md">Secondary</Button>
        <Button hierarchy="tertiary" size="md">Tertiary</Button>
      </div>

      {/* 2 - Pills */}
      <h3 style={{ marginBottom: '16px' }}>Selectable Pills</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
        {symptoms.map(symptom => (
          <SelectablePill
            key={symptom}
            label={symptom}
            selected={selected.includes(symptom)}
            onChange={() => toggle(symptom)}
          />
        ))}
      </div>

      {/* 3 - Symptom Card */}
      <h3 style={{ marginBottom: '16px' }}>Symptom Card</h3>
      <SymptomCard
        onContinue={(selected) => console.log('Continue:', selected)}
        onSkip={() => console.log('Skipped')}
      />

    </div>
  )
}

export default App