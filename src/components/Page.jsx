function Page({ title, index, content, currentSelected, focus }) {
  const selected = currentSelected === index;

  return (
    <section
      className={`page-container ${selected && "page-container-expand"}`}
      data-index={index}
      onClick={() => focus(index)}
    >
      <h1 className={`page-title ${selected && "hide"}`}>{title}</h1>
      <div className={`page-content-overlay ${selected && "hide"}`} />
      {content}
    </section>
  );
}

export default Page;
