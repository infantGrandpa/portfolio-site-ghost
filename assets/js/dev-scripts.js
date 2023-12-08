document.addEventListener("DOMContentLoaded", function () {
    // Function to replace image URL in src, srcset, and data-src
    function replaceImageUrl(element) {
        if (element.src && element.src.includes("/content/images")) {
            element.src = `https://www.brettabraham.com${element.src.replace(
                "http://localhost:2368",
                ""
            )}`;
        }
        if (element.srcset) {
            element.srcset = element.srcset
                .split(",")
                .map((src) => {
                    return src.includes("/content/images")
                        ? src.replace(
                              "http://localhost:2368",
                              "https://www.brettabraham.com"
                          )
                        : src;
                })
                .join(",");
        }
        if (
            element.dataset.src &&
            element.dataset.src.includes("/content/images")
        ) {
            element.dataset.src = `https://www.brettabraham.com${element.dataset.src.replace(
                "http://localhost:2368",
                ""
            )}`;
        }
    }

    // Replace URLs in <img> tags
    document.querySelectorAll("img").forEach(replaceImageUrl);

    // Replace URLs in inline background images
    document.querySelectorAll("[style]").forEach((element) => {
        if (element.style.backgroundImage.includes("/content/images")) {
            element.style.backgroundImage =
                element.style.backgroundImage.replace(
                    /url\((['"]?)(\/content\/images\/.*?)\1\)/g,
                    `url(https://www.brettabraham.com$2)`
                );
        }
    });
});
