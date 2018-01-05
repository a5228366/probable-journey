export default class LArea {
  constructor () {
    this.gearArea
    this.data
    this.index = 0
    this.value = [0, 0, 0]
  }
  init (params) {
    this.params = params
    this.trigger = document.querySelector(params.trigger)
    if (params.valueTo) {
      this.valueTo = document.querySelector(params.valueTo)
    }
    this.keys = params.keys
    this.type = params.type || 1
    switch (this.type) {
      case 1:
      case 2:
        break
      default:
        throw new Error('错误提示: 没有这种数据源类型')
    }
    this.bindEvent()
  }
  getData (callback) {
    let _self = this
    if (typeof _self.params.data === 'object') {
      _self.data = _self.params.data
      callback()
    } else {
      let xhr = new XMLHttpRequest()
      xhr.open('get', _self.params.data)
      xhr.onload = function (e) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
          let responseData = JSON.parse(xhr.responseText)
          _self.data = responseData.data
          if (callback) {
            callback()
          }
        }
      }
      xhr.send()
    }
  }
  bindEvent () {
    let _self = this
    // 呼出插件
    function popupArea (e) {
      _self.gearArea = document.createElement('div')
      _self.gearArea.className = 'gearArea'
      _self.gearArea.innerHTML = '<div class="area_ctrl slideInUp">' +
          '<div class="area_btn_box">' +
          '<div class="area_btn larea_cancel">取消</div>' +
          '<div class="area_btn larea_finish">确定</div>' +
          '</div>' +
          '<div class="area_roll_mask">' +
          '<div class="area_roll">' +
          '<div>' +
          '<div class="gear area_province" data-areatype="area_province"></div>' +
          '<div class="area_grid">' +
          '</div>' +
          '</div>' +
          '<div>' +
          '<div class="gear area_city" data-areatype="area_city"></div>' +
          '<div class="area_grid">' +
          '</div>' +
          '</div>' +
          '<div>' +
          '<div class="gear area_county" data-areatype="area_county"></div>' +
          '<div class="area_grid">' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>'
      document.body.appendChild(_self.gearArea)
      areaCtrlInit()
      let larea_cancel = _self.gearArea.querySelector('.larea_cancel')
      larea_cancel.addEventListener('touchstart', function (e) {
        _self.close(e)
      })
      let larea_finish = _self.gearArea.querySelector('.larea_finish')
      larea_finish.addEventListener('touchstart', function (e) {
        _self.finish(e)
      })
      let area_province = _self.gearArea.querySelector('.area_province')
      let area_city = _self.gearArea.querySelector('.area_city')
      let area_county = _self.gearArea.querySelector('.area_county')
      area_province.addEventListener('touchstart', gearTouchStart)
      area_city.addEventListener('touchstart', gearTouchStart)
      area_county.addEventListener('touchstart', gearTouchStart)
      area_province.addEventListener('touchmove', gearTouchMove)
      area_city.addEventListener('touchmove', gearTouchMove)
      area_county.addEventListener('touchmove', gearTouchMove)
      area_province.addEventListener('touchend', gearTouchEnd)
      area_city.addEventListener('touchend', gearTouchEnd)
      area_county.addEventListener('touchend', gearTouchEnd)
    }
    // 初始化插件默认值
    function areaCtrlInit () {
      _self.gearArea.querySelector('.area_province').setAttribute('val', _self.value[0])
      _self.gearArea.querySelector('.area_city').setAttribute('val', _self.value[1])
      _self.gearArea.querySelector('.area_county').setAttribute('val', _self.value[2])
      switch (_self.type) {
        case 1:
          _self.setGearTooth(_self.data)
          break
        case 2:
          _self.setGearTooth(_self.data[0])
          break
      }
    }
    // 触摸开始
    function gearTouchStart (e) {
      e.preventDefault()
      let target = e.target
      while (true) {
        if (!target.classList.contains('gear')) {
          target = target.parentElement
        } else {
          break
        }
      }
      clearInterval(target['int_' + target.id])
      target['old_' + target.id] = e.targetTouches[0].screenY
      target['o_t_' + target.id] = (new Date()).getTime()
      let top = target.getAttribute('top')
      if (top) {
        target['o_d_' + target.id] = parseFloat(top.replace(/em/g, ''))
      } else {
        target['o_d_' + target.id] = 0
      }
      target.style.webkitTransitionDuration = target.style.transitionDuration = '0ms'
    }
    // 手指移动
    function gearTouchMove (e) {
      e.preventDefault()
      let target = e.target
      while (true) {
        if (!target.classList.contains('gear')) {
          target = target.parentElement
        } else {
          break
        }
      }
      target['new_' + target.id] = e.targetTouches[0].screenY
      target['n_t_' + target.id] = (new Date()).getTime()
      let f = (target['new_' + target.id] - target['old_' + target.id]) * 30 / window.innerHeight
      target['pos_' + target.id] = target['o_d_' + target.id] + f
      target.style['-webkit-transform'] = 'translate3d(0,' + target['pos_' + target.id] + 'em,0)'
      target.setAttribute('top', target['pos_' + target.id] + 'em')
      if (e.targetTouches[0].screenY < 1) {
        gearTouchEnd(e)
      }
    }
    // 离开屏幕
    function gearTouchEnd (e) {
      e.preventDefault()
      let target = e.target
      while (true) {
        if (!target.classList.contains('gear')) {
          target = target.parentElement
        } else {
          break
        }
      }
      let flag = (target['new_' + target.id] - target['old_' + target.id]) / (target['n_t_' + target.id] - target['o_t_' + target.id])
      if (Math.abs(flag) <= 0.2) {
        target['spd_' + target.id] = (flag < 0 ? -0.08 : 0.08)
      } else {
        if (Math.abs(flag) <= 0.5) {
          target['spd_' + target.id] = (flag < 0 ? -0.16 : 0.16)
        } else {
          target['spd_' + target.id] = flag / 2
        }
      }
      if (!target['pos_' + target.id]) {
        target['pos_' + target.id] = 0
      }
      rollGear(target)
    }
    // 缓动效果
    function rollGear (target) {
      let d = 0
      let stopGear = false
      function setDuration () {
        target.style.webkitTransitionDuration = target.style.transitionDuration = '200ms'
        stopGear = true
      }
      clearInterval(target['int_' + target.id])
      target['int_' + target.id] = setInterval(function () {
        let pos = target['pos_' + target.id]
        let speed = target['spd_' + target.id] * Math.exp(-0.03 * d)
        pos += speed
        if (Math.abs(speed) > 0.1) {} else {
          let b = Math.round(pos / 2) * 2
          pos = b
          setDuration()
        }
        if (pos > 0) {
          pos = 0
          setDuration()
        }
        let minTop = -(target.dataset.len - 1) * 2
        if (pos < minTop) {
          pos = minTop
          setDuration()
        }
        if (stopGear) {
          let gearVal = Math.abs(pos) / 2
          setGear(target, gearVal)
          clearInterval(target['int_' + target.id])
        }
        target['pos_' + target.id] = pos
        target.style['-webkit-transform'] = 'translate3d(0,' + pos + 'em,0)'
        target.setAttribute('top', pos + 'em')
        d++
      }, 30)
    }
    // 控制插件滚动后停留的值
    function setGear (target, val) {
      val = Math.round(val)
      target.setAttribute('val', val)
      switch (_self.type) {
        case 1:
          _self.setGearTooth(_self.data)
          break
        case 2:
          switch (target.dataset['areatype']) {
            case 'area_province':
              _self.setGearTooth(_self.data[0])
              break
            case 'area_city':
              let ref = target.childNodes[val].getAttribute('ref')
              let childData = []
              let nextData = _self.data[2]
              for (let i in nextData) {
                if (i === ref) {
                  childData = nextData[i]
                  break
                }
              }
              _self.index = 2
              _self.setGearTooth(childData)
              break
          }
      }
    }
    _self.getData(function () {
      _self.trigger.addEventListener('click', popupArea)
    })
  }
  // 重置节点个数
  setGearTooth (data) {
    let _self = this
    let item = data || []
    let l = item.length
    let gearChild = _self.gearArea.querySelectorAll('.gear')
    let gearVal = gearChild[_self.index].getAttribute('val')
    let maxVal = l - 1
    if (gearVal > maxVal) {
      gearVal = maxVal
    }
    gearChild[_self.index].setAttribute('data-len', l)
    if (l > 0) {
      let id = item[gearVal][this.keys['id']]
      let childData
      switch (_self.type) {
        case 1:
          childData = item[gearVal].child
          break
        case 2:
          let nextData = _self.data[_self.index + 1]
          for (let i in nextData) {
            if (i === id) {
              childData = nextData[i]
              break
            }
          }
          break
      }
      let itemStr = ''
      for (let i = 0; i < l; i++) {
        itemStr += '<div class="tooth"  ref="' + item[i][this.keys['id']] + '">' + item[i][this.keys['name']] + '</div>'
      }
      gearChild[_self.index].innerHTML = itemStr
      gearChild[_self.index].style['-webkit-transform'] = 'translate3d(0,' + (-gearVal * 2) + 'em,0)'
      gearChild[_self.index].setAttribute('top', -gearVal * 2 + 'em')
      gearChild[_self.index].setAttribute('val', gearVal)
      _self.index++
      if (_self.index > 2) {
        _self.index = 0
        return
      }
      _self.setGearTooth(childData)
    } else {
      gearChild[_self.index].innerHTML = '<div class="tooth"></div>'
      gearChild[_self.index].setAttribute('val', 0)
      if (_self.index === 1) {
        gearChild[2].innerHTML = '<div class="tooth"></div>'
        gearChild[2].setAttribute('val', 0)
      }
      _self.index = 0
    }
  }
  finish (e) {
    let _self = this
    let area_province = _self.gearArea.querySelector('.area_province')
    let area_city = _self.gearArea.querySelector('.area_city')
    let area_county = _self.gearArea.querySelector('.area_county')
    let provinceVal = parseInt(area_province.getAttribute('val'))
    let provinceText = area_province.childNodes[provinceVal].textContent
    let provinceCode = area_province.childNodes[provinceVal].getAttribute('ref')
    let cityVal = parseInt(area_city.getAttribute('val'))
    let cityText = area_city.childNodes[cityVal].textContent
    let cityCode = area_city.childNodes[cityVal].getAttribute('ref')
    let countyVal = parseInt(area_county.getAttribute('val'))
    let countyText = area_county.childNodes[countyVal].textContent
    let countyCode = area_county.childNodes[countyVal].getAttribute('ref')
    _self.trigger.value = provinceText + ((cityText) ? (',' + cityText) : ('')) + ((countyText) ? (',' + countyText) : (''))
    _self.value = [provinceVal, cityVal, countyVal]
    if (this.valueTo) {
      this.valueTo.value = provinceCode + ((cityCode) ? (',' + cityCode) : ('')) + ((countyCode) ? (',' + countyCode) : (''))
    }
    _self.close(e)
  }
  close (e) {
    e.preventDefault()
    let _self = this
    let evt = new CustomEvent('input')
    _self.trigger.dispatchEvent(evt)
    document.body.removeChild(_self.gearArea)
  }
}
