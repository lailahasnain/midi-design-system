import './SelectablePill.css';

const CheckIcon = () => (
  <svg
    className="selectable-pill__check"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 7L5.5 10L11.5 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SelectablePill({ label, selected = false, onChange }) {
  const handleClick = () => {
    onChange?.(!selected);
  };

  return (
    <button
      type="button"
      className={`selectable-pill${selected ? ' selectable-pill--selected' : ''}`}
      aria-pressed={selected}
      onClick={handleClick}
    >
      {selected && <CheckIcon />}
      <span className="selectable-pill__label">{label}</span>
    </button>
  );
}
