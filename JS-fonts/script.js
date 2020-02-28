let fontsG = [
    "Comic Sans MS",
    "Consolas",
    "Arial",
    "Impact",
    "Curier",
    "MS Gothic",
    "Times New Roman"
]

let currentFont = "Arial"
let range = null

function createFontList(fonts) {
    for(let font of fonts) {
        let fontItem = document.createElement("div")
        fontItem.setAttribute("class", "font-item")
    
        let fontName = document.createElement("p")
        fontName.style.fontFamily = font
        fontName.textContent = font
    
        fontItem.appendChild(fontName)
    
        fontItem.addEventListener("mousedown", () => {
                let fontTrigger = document.getElementById("font-trigger")
                fontTrigger.children[0].textContent = font
                fontTrigger.children[0].style.fontFamily = font
                currentFont = font
    
                document.execCommand("fontName", false, font)
            }
        )
    
        fontItem.addEventListener("mouseover", () => {
            document.execCommand("fontName", false, font)
        })
        
    
    
        let fontList = document.getElementById("font-list")
        fontList.appendChild(fontItem)
    }
}

createFontList(fontsG)

let fontListBlur = document.getElementById("font-list")
fontListBlur.addEventListener("mouseleave", () => {
    document.execCommand("fontName", false, currentFont)
})

let fontInput = document.getElementById("font-trigger")

fontInput.addEventListener("dblclick", () => {
    if (fontInput.children[0].nodeName === "P") {

        let input = document.createElement("input")
        input.value = fontInput.children[0].textContent
        input.setAttribute("class", "input")
        


        input.addEventListener("blur", e => {

            let p = document.createElement("p")
            p.style.fontFamily = currentFont
            p.textContent = currentFont

            fontInput.replaceChild(
                p,
                fontInput.children[0]
            )
        })

        input.addEventListener("input", e => {
            let lowerCaseValue = e.target.value.toLocaleLowerCase()
            
            let list = fontsG.filter((item) => {
                let lowerCaseItem = item.toLocaleLowerCase()

                if(lowerCaseItem.indexOf(lowerCaseValue) >= 0) {
                    return item
                }
            })

            document.getElementById("font-list").innerHTML = ""
            createFontList(list)

        })

        fontInput.replaceChild(
            input,
            fontInput.children[0]
        )
    }
})


let editor = document.getElementById('editor')

editor.addEventListener('blur', e => {

    let selection = window.getSelection()
    range = selection.getRangeAt(0)
})


let fontSize = document.getElementById('font-size')

fontSize.addEventListener("input", e => {
    let fontSizeValue = parseInt(e.target.value)

    if(range != null && !isNaN(fontSizeValue)) {
        let selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)

        document.execCommand(
            'fontSize',
            false,
            parseInt(fontSizeValue),
        )
        
    }
})


fontSize.addEventListener('mousedown', e => {
        let selection = window.getSelection()
        range = selection.getRangeAt(0)
})

fontSize.addEventListener('focusin', e => {
    let selection = window.getSelection()
    selection.addRange(range)
})
