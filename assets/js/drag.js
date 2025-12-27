// Tutorial: https://tahazsh.com/blog/seamless-ui-with-js-drag-to-reorder-example

/***********************
 *      Variables       *
 ***********************/

let listContainer

let draggableItem

let pointerStartX
let pointerStartY

let itemsGap = 0

let items = []

let prevRect = {}

/***********************
 *    Helper Functions   *
 ***********************/

function getAllItems() {
  if (!items?.length) {
    items = Array.from(listContainer.querySelectorAll('.js-item'))
  }
  return items
}

function getIdleItems() {
  return getAllItems().filter((item) => item.classList.contains('is-idle'))
}

function isItemAbove(item) {
  return item.hasAttribute('data-is-above')
}

function isItemToggled(item) {
  return item.hasAttribute('data-is-toggled')
}

/***********************
 *        Setup        *
 ***********************/

function setup() {
  listContainer = document.querySelector('.js-list')

  if (!listContainer) return

  listContainer.addEventListener('mousedown', dragStart)
  listContainer.addEventListener('touchstart', dragStart)

  document.addEventListener('mouseup', dragEnd)
  document.addEventListener('touchend', dragEnd)
}

/***********************
 *     Drag Start      *
 ***********************/

function dragStart(e) {
  if (e.target.classList.contains('js-drag-handle')) {
    draggableItem = e.target.closest('.js-item')
  }

  if (!draggableItem) return

  pointerStartX = e.clientX || e.touches?.[0]?.clientX
  pointerStartY = e.clientY || e.touches?.[0]?.clientY

  setItemsGap()
  disablePageScroll()
  initDraggableItem()
  initItemsState()
  prevRect = draggableItem.getBoundingClientRect()

  document.addEventListener('mousemove', drag)
  document.addEventListener('touchmove', drag, { passive: false })
}

function setItemsGap() {
  if (getIdleItems().length <= 1) {
    itemsGap = 0
    return
  }

  const item1 = getIdleItems()[0]
  const item2 = getIdleItems()[1]

  const item1Rect = item1.getBoundingClientRect()
  const item2Rect = item2.getBoundingClientRect()

  itemsGap = Math.abs(item1Rect.right - item2Rect.left)
}

function disablePageScroll() {
  document.body.style.overflow = 'hidden'
  document.body.style.touchAction = 'none'
  document.body.style.userSelect = 'none'
}

function initItemsState() {
  getIdleItems().forEach((item, i) => {
    if (getAllItems().indexOf(draggableItem) > i) {
      item.dataset.isAbove = ''
    }
  })
}

function initDraggableItem() {
  draggableItem.classList.remove('is-idle')
  draggableItem.classList.add('is-draggable')
}

/***********************
 *        Drag         *
 ***********************/

function drag(e) {
  if (!draggableItem) return

  e.preventDefault()

  const clientX = e.clientX || e.touches[0].clientX
  const clientY = e.clientY || e.touches[0].clientY

  const pointerOffsetX = clientX - pointerStartX
  const pointerOffsetY = clientY - pointerStartY

  draggableItem.style.transform = `translate(${pointerOffsetX}px, ${pointerOffsetY}px)`

  updateIdleItemsStateAndPosition()
}

function updateIdleItemsStateAndPosition() {
  const draggableItemRect = draggableItem.getBoundingClientRect()
  const draggableItemX = draggableItemRect.left + draggableItemRect.width / 2

  // Update state
  getIdleItems().forEach((item) => {
    const itemRect = item.getBoundingClientRect()
    const itemX = itemRect.left + itemRect.width / 2
    if (isItemAbove(item)) {
      if (draggableItemX <= itemX) {
        item.dataset.isToggled = ''
      } else {
        delete item.dataset.isToggled
      }
    } else {
      if (draggableItemX >= itemX) {
        item.dataset.isToggled = ''
      } else {
        delete item.dataset.isToggled
      }
    }
  })

  // Update position
  getIdleItems().forEach((item) => {
    if (isItemToggled(item)) {
      const direction = isItemAbove(item) ? 1 : -1
      item.style.transform = `translateX(${
        direction * (draggableItemRect.width + itemsGap)
      }px)`
    } else {
      item.style.transform = ''
    }
  })
}

/***********************
 *      Drag End       *
 ***********************/

function dragEnd(e) {
  if (!draggableItem) return

  applyNewItemsOrder(e)
  cleanup()
}

function applyNewItemsOrder(e) {
  const reorderedItems = []

  getAllItems().forEach((item, index) => {
    if (item === draggableItem) {
      return
    }
    if (!isItemToggled(item)) {
      reorderedItems[index] = item
      return
    }
    const newIndex = isItemAbove(item) ? index + 1 : index - 1
    reorderedItems[newIndex] = item
  })

  for (let index = 0; index < getAllItems().length; index++) {
    const item = reorderedItems[index]
    if (typeof item === 'undefined') {
      reorderedItems[index] = draggableItem
    }
  }

  reorderedItems.forEach((item) => {
    listContainer.appendChild(item)
  })
  
  draggableItem.style.transform = ''

  requestAnimationFrame(() => {
    const rect = draggableItem.getBoundingClientRect()
    const xDiff = prevRect.x - rect.x
    const currentPositionX = e.clientX || e.changedTouches?.[0]?.clientX
    const currentPositionY = e.clientY || e.changedTouches?.[0]?.clientY

    const pointerOffsetX = currentPositionX - pointerStartX
    const pointerOffsetY = currentPositionY - pointerStartY

    draggableItem.style.transform = `translate(${pointerOffsetX + xDiff}px, ${pointerOffsetY}px)`
    requestAnimationFrame(() => {
      unsetDraggableItem()
    })
  })
}

function cleanup() {
  itemsGap = 0
  items = []
  unsetItemState()
  enablePageScroll()

  document.removeEventListener('mousemove', drag)
  document.removeEventListener('touchmove', drag)
}

function unsetDraggableItem() {
  draggableItem.style = null
  draggableItem.classList.remove('is-draggable')
  draggableItem.classList.add('is-idle')
  draggableItem = null
}

function unsetItemState() {
  getIdleItems().forEach((item, i) => {
    delete item.dataset.isAbove
    delete item.dataset.isToggled
    item.style.transform = ''
  })
}

function enablePageScroll() {
  document.body.style.overflow = ''
  document.body.style.touchAction = ''
  document.body.style.userSelect = ''
}

/***********************
 *      Start Here     *
 ***********************/

setup()
