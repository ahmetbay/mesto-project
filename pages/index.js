const editButton = document.querySelector("button[aria-label=edit-profile]")
const popup = document.querySelector(".popup")
const popupCloseButton = document.querySelector("button[aria-label=close-modal]")
const popupOpenedClass = "popup_opened"

editButton.addEventListener("click", function () {
  popup.classList.add(popupOpenedClass)
})

popupCloseButton.addEventListener("click", function () {
  popup.classList.remove(popupOpenedClass)
})
