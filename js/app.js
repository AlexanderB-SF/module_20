window.addEventListener ('DOMContentLoaded', () => {

    // получение элементов html
    const cityBtn = document.querySelector('.projects__nav-gallery'),
          cityBtnChild = document.querySelectorAll('.projects__nav-item'),
          circlePagination = document.querySelectorAll('.circle-pagination'),
          cityLocation = document.querySelector('.city'),
          appartamenArea = document.querySelector('.appartamen-area'),
          repairTime = document.querySelector('.repaire-time'),
          imgProject = document.querySelector('.projects__img'),
          arrLeft = document.querySelector('.arr-left'),
          arrRight = document.querySelector('.arr-right'),
          arrLeftMobile = document.querySelector('.arr-left-mibile'),
          arrRightMobile = document.querySelector('.arr-right-mobile');

    // массивы с данными
    const imgProjectArr = ['images/projects/1.jpg', 'images/projects/2.jpg', 'images/projects/3.jpg'],
          cityLocationArr = ['Rostov-on-Don <br> LCD admiral', 'Sochi <br> Thieves', 'Rostov-on-Don <br> Patriotic'],
          appartamenAreaArr = ['81 m2', '97 m2', '75 m2'],
          repairTimeArr = ['3.5 months', '5.3 months', '4.7 months'],
          cityIdArr = ['rostov-admiral', 'sochi', 'rostov-patriotic'];

    // Счетчик
    let i = 0;

    // Генерация контента
    function showContent (i) {
        hideClassActive (cityBtnChild, 'projects__nav-item--active');
        hideClassActive (circlePagination, 'circle-active');
        showClassActive (i, cityBtnChild, 'projects__nav-item--active');
        showClassActive (i, circlePagination, 'circle-active');
        content (i);
    };
    showContent(i, 'projects__nav-item--active', );

    // Вывод содержимого контента
    function content (i) {
        imgProject.src = imgProjectArr[i];
        cityLocation.innerHTML = cityLocationArr[i];
        appartamenArea.innerHTML = appartamenAreaArr[i];
        repairTime.innerHTML = repairTimeArr[i];
    };

    // При клике по точкам пагинации или названию города меняется содержимое
    function clickCity () {
        cityBtn.addEventListener('click', (event) => {
            if (event.target && event.target.classList.contains('projects__nav-item')) {
                const i = cityIdArr.indexOf(event.target.id);
                showContent(i);
            }
        })
    };
    clickCity();

    // При клике на стрелку влево меняется контент
    function clickLeft (buttonLeft) {
        buttonLeft.addEventListener('click', function () {
            (i <= 0) ? i = 2 : i--;
            showContent (i);
        })
    };
    clickLeft(arrLeft);
    clickLeft(arrLeftMobile);
    
    // При клике на стрелку вправо меняется контент
    function clickRicht (buttonRight) {
        buttonRight.addEventListener('click', function () {
            (i >= cityLocationArr.length - 1) ? i = 0 : i++;
            showContent (i);
        })
    };
    clickRicht(arrRight);
    clickRicht(arrRightMobile);

    // Удаление активного класса
    function hideClassActive (array, className) {
        array.forEach(item => {
            item.classList.remove(className)
        });
    }

    // Добвление активного класса
    function showClassActive (i, arraySelector, className) {
        arraySelector[i].classList.add(className);
    }

});


