"use strict"

let counter = 1;

function startScript() {
// Task 1
    const colorfulDiv = document.getElementsByClassName("col-xs-4")[0];
    colorfulDiv.style.backgroundColor = "beige";

// Task 2
    const footer = document.getElementsByTagName("footer")[0];
    const paragraph = footer.getElementsByTagName("p")[0];

    paragraph.innerText += ` -> Franchuk-${counter}`;

// Task 3
    const allParagraphs = document.getElementsByTagName("p");
    document.body.style.position = "relative";

    for (const p of allParagraphs) {
        p.style.position = "absolute";
        p.style.right = "0";
        p.style.padding = "20px";

        if (p === allParagraphs[4]) p.style.paddingTop = "80px";
    }

// Task 4
    const image = document.getElementsByTagName("img")[0];
    image.className = "img-style";

    counter++;
    alert("Script started");
    setTimeout(() => alert("Script finished"), 1000)
}
