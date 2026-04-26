import { useState } from 'react';
import Button from '../Button/Button';
import SelectablePill from '../SelectablePill/SelectablePill';
import './SymptomCard.css';

const SYMPTOMS = [
  'Brain fog',
  'Fatigue',
  'Hot flashes',
  'Mood changes',
  'Sleep issues',
  'Weight changes',
];

const LeafIcon = () => (
  <svg
    className="symptom-card__header-icon"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7 1.5C7 1.5 2.5 4 2.5 8C2.5 10.5 4.5 12.5 7 12.5C9.5 12.5 11.5 10.5 11.5 8C11.5 4 7 1.5 7 1.5Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M7 12.5V7M7 7L4.5 4.5M7 7L9.5 4.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SymptomCard({ onContinue, onSkip }) {
  const [selected, setSelected] = useState([]);

  const toggle = (label) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  return (
    <div className="symptom-card" role="region" aria-label="Symptom check-in">
      <header className="symptom-card__header">
        <LeafIcon />
        <span className="symptom-card__label">Check-in</span>
      </header>

      <div className="symptom-card__body">
        <h2 className="symptom-card__title">
          Select the symptoms you're experiencing
        </h2>
        <p className="symptom-card__subtitle">
          Choose all that apply. We'll use this to personalize your care plan
          and match you with the right clinician.
        </p>
      </div>

      <div className="symptom-card__pills" role="group" aria-label="Symptoms">
        {SYMPTOMS.map((symptom) => (
          <SelectablePill
            key={symptom}
            label={symptom}
            selected={selected.includes(symptom)}
            onChange={() => toggle(symptom)}
          />
        ))}
      </div>

      <div className="symptom-card__footer">
        <Button
          hierarchy="primary"
          size="md"
          className="symptom-card__continue"
          onClick={() => onContinue?.(selected)}
        >
          Continue
        </Button>
        <Button
          hierarchy="link-gray"
          size="md"
          onClick={() => onSkip?.()}
        >
          Skip for now
        </Button>
      </div>
    </div>
  );
}
