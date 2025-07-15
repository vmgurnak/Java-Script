/** События мыши:       События указателя:
 * mousemove           * pointermove
 * mousedown           * pointerdown
 * mouseup             * pointerup
 * mouseover           * pointerover
 * mouseout            * pointerout
 * mouseenter          * pointerenter
 * mouseleave          * pointerleave
                       * pointercancel
                       * gotpointercapture
                       * lostpointercapture
 **/

const boxElement = document.querySelector('.box')

boxElement.addEventListener('pointerdown', (event) => {
  console.log(event)
})
