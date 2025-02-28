document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

   

    // 返回顶部按钮
    const backToTop = document.createElement("button");
    backToTop.innerText = "↑ Top";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.backgroundColor = "#333";
    backToTop.style.color = "#fff";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "5px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none"; // 初始隐藏

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 显示当前年份
    const footer = document.querySelector("footer p");
    if (footer) {
        footer.innerHTML = `&copy; ${new Date().getFullYear()} 華興株式会社. All rights reserved.`;
    }
});