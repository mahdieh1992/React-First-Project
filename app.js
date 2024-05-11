class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height

    }

    fullDescribe() {
        return `this is rectangle ${this.width} ,${this.height}`
    }
}


class ColorRectangle extends Rectangle {

    constructor(width, height, color) {
        super(width, height)
        this.color = color
    }

    show() {
        return "<div style='width:" + this.width + "px;height:" + this.height + "px;background-color:" + this.color + " '></div>"
    }
}




let test = new ColorRectangle(250, 250, ' rgb(197, 159, 219)')
document.getElementById("mydiv1").innerHTML = test.fullDescribe()
document.getElementById("mydiv").innerHTML = test.show()