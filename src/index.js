// src/index.js
import "./styles.css";
import { home } from "./home.js";
import { about } from "./about.js";
import { services } from "./services.js";

document.addEventListener("DOMContentLoaded", () => {
  home()
  const homeBtn = document.getElementById("home");
  const aboutBtn = document.getElementById("about");
  const servicesBtn = document.getElementById("services");
  homeBtn.addEventListener("click", home)
  aboutBtn.addEventListener("click", about)
  servicesBtn.addEventListener("click", services)
})
