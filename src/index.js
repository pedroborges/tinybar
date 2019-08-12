function Tinybar(customId) {
  let el, bar, isMounted

  function mount() {
    el = document.createElement('div')
    bar = document.createElement('div')

    if (customId) {
      el.id = customId
    } else {
      el.style = 'background:#e2e8f0;height:2px;width:100%;position:fixed;left:0;right:0;top:0;transition:height .3s;z-index:10000'
      bar.style = 'background:#90cdf4;height:100%;width:0;transition:width .2s ease-out'
    }

    el.addEventListener('transitionend', ({ target }) => {
      if (target === el) {
        isMounted = !document.body.removeChild(target)
      }
    })

    el.appendChild(bar)
    isMounted = document.body.appendChild(el)
  }

  return {
    go: function(number) {
      if (! isMounted) {
        mount()
      }

      if (number > 0) {
        bar.style.width = `${number}%`
      }

      if (number >= 100) {
        bar.style.width = `100%`
        el.style.height = 0
      }
    }
  }
}

export default Tinybar
