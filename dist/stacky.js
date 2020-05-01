class Stacky {
  constructor(stackySelector=`header`) {
    this.headers = document.querySelectorAll(stackySelector)
    this.headerArray = []
  }

  init() {
    let i = 0
    let j = this.headers.length - 1

    this.headers.forEach(header => {
      header.setAttribute(`data-stacky-id`, `${i}`)
      header.setAttribute(`data-stacky-top`, `${i}`)
      header.setAttribute(`data-stacky-bottom`, `${j}`)
      this.headerArray.push({
        el: header,
        id: i,
        orderTop: i,
        orderBottom: j,
        parent: header.parentElement,
        height: header.clientHeight,
        position: '',
        offsetTop: header.clientHeight * i,
        offsetBottom: header.clientHeight * j
      })
      i++
      j--
    })

    window.addEventListener(`scroll`, el => {
      this.headerArray.forEach(element => {
        this.updateStack(element)
      })
    })
  }

  updateStack(element) {
    let position = ``
    const headerEl = document.querySelector(`[data-stacky-id="${element.id}"]`)
    const rect = headerEl.parentElement.getBoundingClientRect()
    const top = rect.top

    if (top - (headerEl.clientHeight * element.orderTop) <= 0) {
      position = `top`
    } else if (top + (headerEl.clientHeight * (element.orderBottom + 1)) >= document.documentElement.clientHeight) {
      position = `bottom`
    }

    if (position) {
      if (position === `top`) {
        element.position = `top`
        headerEl.style.position = `fixed`
        headerEl.style.top = `${element.offsetTop}px`
        headerEl.style.bottom = ``
        headerEl.parentElement.style.paddingTop = `${element.height}px`
      } else if (position === `bottom`) {
        element.position = `bottom`
        headerEl.style.position = `fixed`
        headerEl.style.top = ``
        headerEl.style.bottom = `${element.offsetBottom}px`
        headerEl.parentElement.style.paddingTop = `${element.height}px`
      }
    } else {
      headerEl.style.position = ``
      headerEl.style.top = ``
      headerEl.style.width = ``
      headerEl.parentElement.style.paddingTop = ``
    }
  }
}
