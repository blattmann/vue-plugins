const swVuePlugins = {
  install(Vue) {
    const setVue = Vue
    setVue.prototype.$swplugins = {
      getImagePath: (assetsPath, path, image) => {
        // Get the physical image path
        const imgSrc = `${path}/${image}`
        // console.log('imgSrc: ', imgSrc)
        return require(`@/${assetsPath}/` + imgSrc)
      },
      imageResize: (asset, minWidth, defaultWidth, maxWidth, width) => {
        let newWidth = 0
        let result = ''
        let setWidth = 0

        // Return the resized image
        if (width === null) {
          setWidth = minWidth
        }

        if (width > maxWidth) {
          setWidth = defaultWidth
        }

        if (asset && setWidth) {
          newWidth = Math.round(width)
          result = `${asset}?newWidth=${newWidth}`
        } else {
          result = ''
        }

        return result
      },
      locationRedirect: (vm, url, target) => {
        if (url) {
          const urlTest = url.includes('http')

          // Redirect to the requested page
          if (!urlTest) {
            const newUrl = `${url}`
            vm.$router.push({ path: `${newUrl}` })
            vm.$forceUpdate()
          } else {
            window.open(url, target).focus()
          }
        }
      },
      setBackground: (bgImage, bgUrl, bgClass) => {
        const body = document.querySelector('body')
        if (bgImage) {
          body.classList.remove(bgClass)
          body.style.background = `url(${bgUrl})`
          body.style.backgroundSize = 'cover'
          body.style.backgroundAttachment = 'fixed'
          body.style.backgroundRepeat = 'no-repeat'
        } else {
          body.classList.add(bgClass)
        }
      },
      setDocumentTitle: (title, project) => {
        // Set the current page title
        let result = ''
        let staticTitle = project

        if (!project) {
          staticTitle = '' // add a static pre title
        }

        if (staticTitle) {
          result = `${title} - ${staticTitle}`
        } else {
          result = `${title}`
        }

        return result
      },
      titleCase: str => {
        const matcher = txt => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        }

        return str.replace(/\w\S*/g, matcher)
      },
      togglePassword: element => {
        if (element) {
          // Toogle password
          const passwordField = document.querySelectorAll(`${element}`)
          for (let i = 0; i < passwordField.length; i += 1) {
            if (passwordField[i].getAttribute('type') === 'password') {
              passwordField[i].setAttribute('type', 'text')
            } else {
              passwordField[i].setAttribute('type', 'password')
            }
          }
        }
      },
      urlBeautify: item => {
        // Create a pretty URL (including some title info)
        return encodeURI(
          item
            .replace(/[^\w\s]/gi, '')
            .replace(/[\s]/gi, '-')
            .toLowerCase()
        )
      }
    }
  }
}

export default swVuePlugins
