function clickHandler()
{
    document.body.classList.toggle("darkMode")
}

darkTheme.addEventListener("click",clickHandler, {once:false});