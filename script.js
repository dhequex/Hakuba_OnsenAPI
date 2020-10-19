const emojis = ["A", "B", "C"]

emojis.forEach((emoji) =>{
    const element = document.createElement("div");
    element.innerText = emoji;
    document.body.appendChild(element);
});