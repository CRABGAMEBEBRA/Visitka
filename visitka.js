const entities=[
  {
  	city: 'Rostov-on-Don LCD admiral',
  	apartment: '81 m2',
  	repair: '3.5 months',
  	cost: 'Upon request',
  	image: 'image 2.1.png',
  	kruj: 'Group 7.1 (8).png',
  },
  {
  	city: 'Sochi Thieves',
  	apartment: '105 m2',
  	repair: '4 months',
  	cost: 'Upon request',
  	image: 'image 2.png',
  	kruj: 'Group 7.1 (9).png',
  },
  {
  	city: 'Rostov-in-Don Patriotic',
  	apartment: '93 m2',
  	repair: '3 months',
  	cost: 'Upon request',
  	image: 'Mask Group (8).png',
  	kruj: 'Group 7.1 (10).png',
  }]




const text = document.querySelector('.text')
const img = document.querySelector('.image')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const gorod1 = document.querySelector('.gorod1')
const gorod2 = document.querySelector('.gorod2')
const gorod3 = document.querySelector('.gorod3')
const gorod4 = document.querySelector('.gorod4')
const kruj = document.querySelector('.kruj')
const nazv1 = document.querySelector('.nazv1')
const nazv2 = document.querySelector('.nazv2')
const nazv3 = document.querySelector('.nazv3')

const nazv_mass=[nazv1,nazv2,nazv3]


const setEntity = (index) => {
  gorod1.innerText = entities[index].city
  gorod2.innerText = entities[index].apartment
  gorod3.innerText = entities[index].repair
  gorod4.innerText = entities[index].cost

  img.innerHTML = `<img src="${entities[index].image}" class = "image1" />`
  kruj.innerHTML = `<img src="${entities[index].kruj}" class = "kruj1" />`
  //kruj.style.backgroundImage = `url(${entities[index].kruj})`
  nazv_mass[index].classList.add("right");
}


let currentIndex = 0



gorod1.innerText = entities[currentIndex].city
gorod2.innerText = entities[currentIndex].apartment
gorod3.innerText = entities[currentIndex].repair
gorod4.innerText = entities[currentIndex].cost

//kruj.style.backgroundImage = `url(${entities[currentIndex].kruj})`
nazv_mass[currentIndex].classList.add("right");
img.innerHTML = `<img src="${entities[currentIndex].image}" class = "image1" />`
kruj.innerHTML = `<img src="${entities[currentIndex].kruj}" class = "kruj1" />`



prev.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  nazv_mass[currentIndex].classList.remove("right");
  currentIndex -= 1;
})
next.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  nazv_mass[currentIndex].classList.remove("right");
  currentIndex += 1;
})