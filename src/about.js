export const about = () => {
  let container = document.getElementById("container");
  container.innerHTML = ""
  container.style.cssText = `flex-direction: row;`

  let restaurantImage = document.createElement("img");
  restaurantImage.src = "https://www.fineindianrestaurants.com/media/jirnkkel/v_regent_verandah_mw8_p.webp";
  restaurantImage.style.height = "85vh";
  
  let imgDiv = document.createElement("div");
  imgDiv.appendChild(restaurantImage);
  imgDiv.style.cssText = `
    display: flex;
    align-items: center;
    background: #fcfcfb;
    border-radius: 5px;
    margin-top: 10px;
    padding:11px;
    `
  
  let content = document.createElement("div");
  content.classList = ("content");
  content.innerHTML = `
    <h2>About Us</h2>
    
    <article>
        <h3>Our Story</h3>
        <p>Founded with a passion for genuine hospitality and culinary excellence, <strong>Zayeka</strong> was born from a simple desire: to bring authentic, flavor-packed heritage cuisine to your table without compromising on quality or tradition.</p>
        <p>The word <em>Zayeka</em> stands for "taste" and "flavor"—a promise we strive to fulfill in every bite. What started as a family dream has grown into a beloved dining destination for food lovers seeking rich, comfort-driven meals prepared with skill and heart.</p>
    </article>

    <article>
        <h3>Our Philosophy</h3>
        <ul>
            <li><strong>Authenticity First:</strong> We honor traditional recipes and time-tested cooking methods.</li>
            <li><strong>Fresh & Locally Sourced:</strong> We partner with local suppliers to select the freshest produce and highest quality ingredients daily.</li>
            <li><strong>No Shortcuts:</strong> From grinding our own spices to slow-cooking signature sauces, quality requires time and care.</li>
            <li><strong>Warm Hospitality:</strong> Every guest is treated like family from the moment they step through our doors.</li>
        </ul>
    </article>
    `
  container.appendChild(imgDiv);
  container.appendChild(content);
}