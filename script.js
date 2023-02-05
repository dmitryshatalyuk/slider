import { loadUnsplashPhotos } from "./load-photos.js";
import { slider } from "./slider.js";

const sliderBox = document.querySelector(".slider");

loadUnsplashPhotos("wffJYfWq6IA4zqSObLQVWXzsBvmm2W0B8-8GJi-yj3E", sliderBox);
slider(document.querySelector(".slider_box"));
