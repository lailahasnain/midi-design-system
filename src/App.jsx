import SymptomCard from './components/SymptomCard/SymptomCard'

function App() {
  return (
    <div className="symptom-card-page">
      <SymptomCard
        onContinue={(selected) => console.log('Continue:', selected)}
        onSkip={() => console.log('Skipped')}
      />
    </div>
  )
}

export default App