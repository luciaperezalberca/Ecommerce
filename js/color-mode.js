function detectColorScheme() {
        let theme = "light"

        if (localStorage.getItem("theme")) {
                if (localStorage.getItem("theme") == "dark") {
                        theme = "dark"
                }
        } else if (!window.matchMedia) {
                return false
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                theme = "dark"
        }

        if (theme == "dark") {
                document.documentElement.setAttribute("data-theme", "dark")
        }
}
detectColorScheme()

const colorModeSwitch = document.querySelector('#color-mode')

colorModeSwitch.addEventListener("click", () => {
        if (document.documentElement.getAttribute("data-theme") == "dark") {
                localStorage.setItem('theme', 'light')
                document.documentElement.setAttribute('data-theme', 'light')
        } else {
                localStorage.setItem('theme', 'dark')
                document.documentElement.setAttribute('data-theme', 'dark')
        }
})