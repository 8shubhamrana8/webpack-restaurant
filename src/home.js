
export const home = () => {
  let container = document.getElementById("container");
  container.innerHTML = "";
    container.style.cssText = `flex-direction: column;`

  let contentTop = document.createElement("div");
  contentTop.classList = ("content")
  contentTop.innerHTML = `
    <h2>Welcome to Zayeka</h2>
    <h3>Taste the Tradition, Savor the Moment</h3>
    <p>Welcome to Zayeka, where every spice tells a story and every meal is a celebration of rich heritage.</p>
    `
  let contentMiddle = document.createElement("div");
  contentMiddle.classList = ("content")
  contentMiddle.innerHTML = `
    <article>
        <h3>Our Story in Brief</h3>
        <p>At <strong>Zayeka</strong>, we believe dining is more than just eating—it’s a journey through rich culinary traditions, fragrant spices, and artisan techniques passed down through generations. Located in the heart of the city, Zayeka offers a warm, vibrant atmosphere perfect for family gatherings, romantic dinners, and friendly catch-ups.</p>
        <p>From slow-cooked curries and aromatic biryanis to handcrafted breads and sizzling tandoori specialties, every dish is crafted with locally sourced, fresh ingredients and authentic spices.</p>
    </article>`

  let contentBottom = document.createElement("div");
  contentBottom.classList = ("content")
  contentBottom.innerHTML = `
    <article>
        <h3>Highlights & Specialties</h3>
        <ul>
            <li><strong>Signature Biryani:</strong> Fragrant long-grain basmati rice layered with marinated tender meats, aromatic herbs, and hand-ground spices, cooked to perfection.</li>
            <li><strong>Artisanal Tandoori Delights:</strong> Freshly grilled meats and paneer infused with smoky flavors from our traditional clay oven.</li>
            <li><strong>Velvety Curries:</strong> Slow-simmered sauces cooked with fresh tomatoes, cream, and custom spice blends.</li>
            <li><strong>Handcrafted Desserts:</strong> Classic sweet endings with a modern twist, including cardamom-infused delights and rich kulfi.</li>
        </ul>
      `
  container.appendChild(contentTop);
  container.appendChild(contentMiddle);
  container.appendChild(contentBottom);
}