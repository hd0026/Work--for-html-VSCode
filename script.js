/*
    Student Name:
    File Name: script.js
    Date: 
*/

// Global variables
var figElement = document.getElementById("placeholder");
var imgSource = document.getElementById("image");
var figCap = document.querySelector("figcaption");

// Function to display the first image
function pic1() {
    imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "Elevated view of San Juan coast";
    figCap.textContent = "Coast of San Juan";
}

// Function to display the second image
function pic2() {
    imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "Elevated view of San Juan coast";
    figCap.textContent = "Coast of San Juan";
}

// Function to display the third image
function pic3() {
    imgSource.src = "images/curacao.jpg";
    imgSource.alt = "The blue waters of Curacao";
    figCap.textContent = "Curacao";
}
