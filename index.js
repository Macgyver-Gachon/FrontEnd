function checkOnlyOne(element) {
  const checkboxes = document.getElementsByName("sex");

  checkboxes.forEach((cb) => {
    cb.checked = false;
  });

  element.checked = true;
}
