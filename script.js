let i= 0;
let btn = document.getElementById('add');
btn.addEventListener('click', (e) => { 
    e.preventDefault();
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;
    
    if (title != "" && description != "") {
        document.getElementsByTagName("table")[0].removeAttribute("class")

        localStorage.setItem(title, description);
        let tb = document.getElementById('tBody');
        i++;
        tb.innerHTML += `<tr>
            <td>${title}</td>
            <td>${description}</td>
            <td><button class="del btn btn-primary mt-2">Delete</button></td>
            </tr>`;
            document.getElementById('title').value = null
            document.getElementById('desc').value = null
    } else {
        alert("Please fill both fields")
     }


});

let tb = document.getElementById("tBody");
tb.addEventListener('click', (e) => {
    if (e.target.classList.contains("del")) {
        let row = e.target.closest("tr")
        console.log(row)
        row.closest("td")
        // console.log(x.textContent)
        row.remove()
    }
})
 
window.onclose = () => {
    localStorage.clear()
 }
window.onload = () => {
    localStorage.clear()
 }