export default function Button({ onClick, variant, children }) {
  return (
    <button onClick={onClick} className={`btn ${variant}`}>
      {children}
    </button>
  );
}
