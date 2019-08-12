function Tinybar() {
  const el = document.createElement('div')
  el.className = 'tinybar'
  el.style = 'background:#e2e8f0;height:0;position:fixed;left:0;right:0;top:0;transition:height .3s ease-in;width:100%;z-index:9999'

  const bar = document.createElement('div')
  bar.style = 'background:#90cdf4;height:100%;transition:width .2s ease-out;width:0'

  el.appendChild(bar)
  document.body.appendChild(el)

  return {
    go: function(number) {
      el.style.height = '2px'

      if (number > 0) {
        bar.style.width = `${number}%`
      }

      if (number >= 100) {
        bar.style.width = `100%`
        el.style.height = 0
        setTimeout(() => bar.style.width = 0, 400)
      }
    }
  }
}

export default Tinybar
