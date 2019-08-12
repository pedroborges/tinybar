function Tinybar(customId) {
  let el, bar, isMounted

  function mount() {
    el = document.createElement('div')
    if (customId) {
      el.id = customId
    } else {
      el.style = 'background:#e2e8f0;height:2px;position:fixed;left:0;right:0;top:0;transition:height .3s ease-in;width:100%;z-index:9999'
    }
    el.addEventListener('transitionend', ({ target }) => {
      if (target === el) {
        isMounted = !document.body.removeChild(target)
      }
    })

    bar = document.createElement('div')
    if (! customId) {
      bar.style = 'background:#90cdf4;height:100%;transition:width .2s ease-out;width:0'
    }

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
