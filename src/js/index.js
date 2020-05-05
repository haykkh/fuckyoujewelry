const body = document.getElementsByTagName('body')
const middle_horizontal = (body[0].offsetWidth - window.innerWidth) / 2
const middle_vertical = (body[0].offsetHeight - window.innerHeight) / 2
window.scrollTo(middle_horizontal, middle_vertical)

const scrollToInquiries = () => {
    const width = middle_horizontal + (0.75 * (846/1122) * window.innerHeight)
    const height = middle_vertical - (0.75 * window.innerHeight)

    window.scrollTo(width, height)
}