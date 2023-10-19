const deleteActionList = document.querySelectorAll(".delete-action");
if (deleteActionList.length) {
  deleteActionList.forEach((deleteAction) => {
    deleteAction.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Bạn có chắc chắn?")) {
        const form = e.target.nextElementSibling;
        form.submit();
      }
    });
  });
}
