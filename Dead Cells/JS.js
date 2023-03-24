const hi = document.getElementById
("hi");
window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    hi.style.backgroundPositionY = offset * 0.7 + "px";
})