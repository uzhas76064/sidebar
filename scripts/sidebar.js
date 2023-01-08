window.addEventListener('load', () => {
    const menuOption = document.querySelectorAll('.side-element')
    const hoverClass = document.querySelector('.hover-bar')
    const sections = document.querySelectorAll('.hover-mid')
    const menuBtn = document.getElementById('menu-btn')

    menuOption.forEach(handleMenuOptions)

    function handleMenuOptions(item) {
        item.addEventListener('click', handleElementOnClick)
    }

    function addActiveClasses(chosenElement, item) {
        document.getElementById(chosenElement).classList.add('active-hover')
        hoverClass.classList.add('active-hover')
        document.querySelector('.main-content').classList.add('mc-extend')
        item.classList.add('chosen-section')
    }

    function removeActiveClasses(chosenElement, item) {
        document.getElementById(chosenElement).classList.remove('active-hover')
        hoverClass.classList.remove('active-hover')
        document.querySelector(".main-content").classList.remove("mc-extend")
        item.classList.remove("chosen-section")
    }

     function handleElementOnClick() {
        if(this.dataset.hover !== undefined) {
            menuOption.forEach((item) => {
                item.classList.remove('chosen-section')
            })

            const chosenSection = this.dataset.hover
            sections.forEach((item) => {
                if(chosenSection === item.id) {
                    let containsHover = document.getElementById(chosenSection)

                    console.log(containsHover)

                    switch (containsHover) {
                        case false:
                            addActiveClasses(chosenSection, item)
                            break

                        case true:
                            removeActiveClasses(chosenSection, item)
                            break
                    }
                }
                else document.getElementById(item.id).classList.remove('active-hover');
            })
        }
    }


    const sideBarOptions = document.querySelector(".side-mid");
    menuBtn.addEventListener('click', function(){
        let icon;
        let displayCheck = window.getComputedStyle(sideBarOptions).display;
        if(displayCheck === 'none'){
            sideBarOptions.style.display = 'block';
            icon = this.querySelector('.fa-bars');
            icon.classList.add('fa-xmark');
            icon.classList.remove('fa-bars');
        } else {
            sideBarOptions.style.display = 'none';
            icon = this.querySelector('.fa-xmark');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
            menuOption.forEach(function (m) {
                m.classList.remove('chosen-section');
            });
            hoverClass.classList.remove('active-hover');
            sections.forEach(function(s){
                document.getElementById(s.id).classList.remove('active-hover');
            });
        }
    });

})
