const div = document.getElementById('container');
const button = document.getElementById('btn');

const h2 = document.createElement('h2');
h2.innerText = "Learn JS";

async function display() {
    try {
        // Loading text
        div.appendChild(h2);

        const serverdata = await fetch('https://fakestoreapi.com/products');
        const jsondata = await serverdata.json();

        let table = `
            <table border="4">
                <tr>
                    <th>Item_Image</th>
                    <th>Item_Id</th>
                    <th>Item_Title</th>
                    <th>Item_Price</th>
                </tr>

                ${jsondata.map((ele) => `
                    <tr>
                        <td>
                            <img src="${ele.image}" height="200" width="200">
                        </td>
                        <td>${ele.id}</td>
                        <td>${ele.title}</td>
                        <td>${ele.price}</td>
                    </tr>
                `).join('')}

            </table>
        `;

        div.innerHTML = table;

    } catch (e) {
        console.log(e);
    }
}

button.addEventListener('click', display);