const imagesToLoad = document.querySelectorAll("img[data-src]");
const mapToLoad = document.querySelectorAll("iframe[data-src]");
const bgToLoad = document.querySelectorAll(".lazy-bg-load[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    });

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

const loadMap = (iframe) => {
    iframe.setAttribute('src', iframe.getAttribute('data-src'));
    iframe.onload = () => {
        iframe.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const mapObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadMap(item.target);
                mapObserver.unobserve(item.target);
            }
        });
    });

    mapToLoad.forEach((iframe) => {
        mapObserver.observe(iframe);
    });
} else {
    mapToLoad.forEach((iframe) => {
        loadMap(iframe);
    });
}

// The lazy background loads
bgToLoad.forEach((bg) => {
    const url = bg.getAttribute('data-src'); // get the full size image
    const image = new Image(); // create a virtual image
    image.src = url;
    image.onload = () => {
        bg.classList.remove("lazy-bg-load");
        // Update the CSS image
        bg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + url + "')";
    };
})