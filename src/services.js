export const services = () => {
  let container = document.getElementById("container");
  container.innerHTML = ""; // Clean previous page
  let content = document.createElement("div");
  content.innerHTML = `
    <section id="services">
    <h2>Our Services</h2>
    <p>Whether you are dining in, hosting a grand celebration, or enjoying a cozy meal at home, <strong>Zayeka</strong> provides culinary services tailored to your needs.</p>

    <table border="1" cellpadding="8" cellspacing="0">
        <thead>
            <tr>
                <th>Service</th>
                <th>Description</th>
                <th>Availability</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Dine-In Experience</strong></td>
                <td>Immerse yourself in our stylish dining space with full table service, ambient music, and crafted drink pairings.</td>
                <td>Lunch & Dinner Daily</td>
            </tr>
            <tr>
                <td><strong>Private Dining & Events</strong></td>
                <td>Exclusive seating areas for birthdays, corporate dinners, anniversaries, and family celebrations.</td>
                <td>Reservations Required</td>
            </tr>
            <tr>
                <td><strong>Catering Services</strong></td>
                <td>Custom menus for weddings, corporate functions, and private parties, featuring live-cooking stations and buffet options.</td>
                <td>On-demand / Inquire</td>
            </tr>
            <tr>
                <td><strong>Takeout & Delivery</strong></td>
                <td>Freshly prepared, securely packed meals delivered directly to your doorstep or ready for quick pickup.</td>
                <td>Daily via Direct Order & Delivery Apps</td>
            </tr>
            <tr>
                <td><strong>Custom Menu Planning</strong></td>
                <td>Personalized menu curation to accommodate dietary preferences, including Vegan, Vegetarian, Gluten-Free, and Halal options.</td>
                <td>Consultation Required</td>
            </tr>
        </tbody>
    </table>

    <h3>Host Your Event with Zayeka</h3>
    <p>Looking to host an event? Let us handle the food so you can focus on making memories.</p>
    <p>Contact our events team at <a href="mailto:events@zayekarestaurant.com">events@zayekarestaurant.com</a> or call <strong>+1 (555) 019-2834</strong> to plan your custom catering menu.</p>
</section>
    `;
  content.classList = ("content")
  container.appendChild(content)
}