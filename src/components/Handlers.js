export const scrollToHandler = (id) => {
  const yOffset = (id) => {
    switch (id) {
      case "section-about":
        return -100;
      case "section-projects":
        return 0;
      case "section-contact":
        return 0;
      default:
        return 0;
    }
  };

  const element = document.getElementById(id);
  const y =
    element.getBoundingClientRect().top + window.pageYOffset + yOffset(id);
  window.scrollTo({ top: y, behavior: "smooth" });
};
