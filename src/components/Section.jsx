function Section({ children, onSubmit }) {
  return (
    <section>
      {children[0]}
      <form onSubmit={onSubmit}>
        {children.slice(1)}
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Section;
