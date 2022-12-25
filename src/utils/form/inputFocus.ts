export const handleInputFocus = (event: any) => {
  const target = event.target.closest("div");
  unActiveInputAll();

  if (target) {
    target.classList.add("active");
  }
};

export const unActiveInputAll = () => {
  Array.from(document.querySelectorAll("input")).map((e) =>
    e.classList.remove("active")
  );
};
