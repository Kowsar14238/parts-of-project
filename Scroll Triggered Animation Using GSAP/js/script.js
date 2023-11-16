
document.addEventListener("DOMContentLoaded", function (){

    var itemsContainer = document.querySelector(".container-items");

    //Dynamically load images into the gallery
    for (var i = 1; i <= 30; i++) {
        var item = document.createElement("div");
        item.classList.add("container-single-item");
        var img = document.createElement("img");
        img.src = `./images/${i}.jpg`;
        img.alt = `Image ${i}`;
        item.appendChild(img);
        itemsContainer.appendChild(item);
    }

    //Create a GSAP timeline
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".container-wrapper",
            pin: true,
            scrub: 2,
            start: "top top",
            end: "50%+=500px31.25rem",
        }
    });

    //Set initial properties for the timeline
    tl.to(".container-items img", { scale: 1 }, 0);
    tl.to(".container-items", { scale: 2, rotate: 0 }, 0);

    //Animate the overlay and items during scroll
    tl.to(".container-overlay", { height: "100%" }, 0.2);
    tl.to(".container-overlay h1", { scale: .5 }, 0.6);
    tl.to(".container-items", { scale: 0.8, opacity: 0.6 }, 0.6);
});
