export const Button = ({ text }) => {
  const styles = {
    padding : '0.5rem 1.0rem',
    fontSize : '1.0rem'
  }
  return (
    <button style={styles}>
      <p>{text}</p>
    </button>
  );
};
