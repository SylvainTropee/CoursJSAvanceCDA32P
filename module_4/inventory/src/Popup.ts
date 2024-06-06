export class Popup {

    static show(content: string) {

        const popupContainer = document.createElement('div')
        popupContainer.className = "popup-container"

        const popupContent = document.createElement('div')
        popupContent.className = "popup-content"

        popupContainer.addEventListener('click', function () {
            //si je clic sur le container je supprime la modal
            this.remove()
        })

        document.body
            .appendChild(popupContainer)
            .appendChild(popupContent).innerHTML = content
    }


}