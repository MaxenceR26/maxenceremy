nextButton = document.querySelector(".next");
lastButton = document.querySelector(".last");

pageData = {
    0:'firstInternship',
    1:'secondInternship',
    2:'thirdInternship',
    3: 'quatroInternship'
}

page = 4
CurrentPage = 0;

nextButton.addEventListener('click', function() {
    try {
        CurrentPage += 1;
        if (CurrentPage <= page) {
            document.getElementById(pageData[CurrentPage]).style.display = "block";
            document.getElementById(pageData[CurrentPage - 1]).style.display = "none";
        
            document.querySelector('.numberpage').innerHTML = CurrentPage + 1;
        }
    } catch {
        console.log("Erro no botão de próximo")
    }
    
})

lastButton.addEventListener('click', function() {
    try {
        CurrentPage -= 1;
        if (CurrentPage <= page) {
            document.getElementById(pageData[CurrentPage]).style.display = "block";
            document.getElementById(pageData[CurrentPage + 1]).style.display = "none";
        
            document.querySelector('.numberpage').innerHTML = CurrentPage + 1;
        }
    } catch {
        console.log("Erro no botão de anterior")
    }
    
})