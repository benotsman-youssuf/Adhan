const babList = document.querySelector('#babList');
const hadithList = document.querySelector('#hadithList');

const hadithContainer = document.querySelector('.hadith');
const babContainer = document.querySelector('.bab');

let hadith;

const fetchBab = async () => {
    try {
        const response = await fetch('./adhkar.json');
        const data = await response.json();
        
        for (let i = 0; i < data.length; i++) {
            const babTitle = document.createElement('li');
            babList.appendChild(babTitle);
            babTitle.textContent = data[i].category;

            babTitle.addEventListener('click', () => {
                if (hadithList.children.length > 0) {
                    hadithList.innerHTML = '';
                }
                for (let j = 0; j < data[i].array.length; j++) {
                    hadith = document.createElement('li');
                    hadithList.appendChild(hadith);
                    hadith.textContent = data[i].array[j].text;
                }

                if(window.innerWidth < 768){
                    const returnButton = document.createElement('button');
                    returnButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
                    returnButton.classList.add('return');
                    hadithContainer.appendChild(returnButton);


                    hadithContainer.style.display = 'block';
                    babContainer.style.display = 'none';
                    returnButton.addEventListener('click' , () => {
                        hadithContainer.style.display = 'none';
                        babContainer.style.display = 'block';
                    });
                }
            });
        }
    } catch (error) {
        // Handle error
    }
}

fetchBab();
