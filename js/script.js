let chart = document.querySelector("#chart");

fetch('data.json')
  .then((response) => response.json())
  .then((json) => {
    // use the json data to get the heights of the bars
    let biggestNum = 0;
    let index = 0;
    for (let i = 0; i < json.length; i++) {
        if (json[i].amount > biggestNum) {
            biggestNum = json[i].amount;
            index = i;
        }
    }
    for (let i = 0; i < json.length; i++) {
        let tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.appendChild(document.createTextNode('$' + json[i].amount));
        chart.children[i].appendChild(tooltip);
        chart.children[i].style.height = json[i].amount / biggestNum * 100 + '%';
    }
    chart.children[index].style.backgroundColor = "hsl(var(--cyan))";
  })
  .catch((error) => {
    // handle errors
    console.error('Error fetching JSON:', error);
  });

