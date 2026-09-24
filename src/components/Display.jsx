function Display({ children, onClick }) {
  return (
    <section className="display">
      {children}
      <button type="button" onClick={onClick}>Edit</button>
    </section>
  )
}

export default Display;
