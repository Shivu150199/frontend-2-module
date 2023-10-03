const data = [
  {
    name: 'Veggie Delight',
    imageSrc: 'https://source.unsplash.com/random?veggies',
    time: '30 min',
    type: 'veg',
    isLiked: false,
    rating: 4.2,
  },
  {
    name: 'Chicken Grill',
    imageSrc: 'https://source.unsplash.com/random?chicken',
    time: '45 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.5,
  },
  {
    name: 'Cheese Pizza',
    imageSrc: 'https://source.unsplash.com/random?pizza',
    time: '40 min',
    type: 'veg',
    isLiked: false,
    rating: 4.1,
  },
  {
    name: 'Steak',
    imageSrc: 'https://source.unsplash.com/random?steak',
    time: '60 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.7,
  },
  {
    name: 'Grilled Salmon',
    imageSrc: 'https://source.unsplash.com/random?salmon',
    time: '50 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.6,
  },
  {
    name: 'Tomato Pasta',
    imageSrc: 'https://source.unsplash.com/random?pasta',
    time: '35 min',
    type: 'veg',
    isLiked: false,
    rating: 4.0,
  },
  {
    name: 'Vegan Salad',
    imageSrc: 'https://source.unsplash.com/random?salad',
    time: '20 min',
    type: 'veg',
    isLiked: false,
    rating: 3.9,
  },
  {
    name: 'Fried Chicken',
    imageSrc: 'https://source.unsplash.com/random?friedChicken',
    time: '55 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.3,
  },
  {
    name: 'Mushroom Risotto',
    imageSrc: 'https://source.unsplash.com/random?risotto',
    time: '45 min',
    type: 'veg',
    isLiked: false,
    rating: 4.5,
  },
  {
    name: 'Burger',
    imageSrc: 'https://source.unsplash.com/random?burger',
    time: '30 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.2,
  },
  {
    name: 'Paneer Tikka',
    imageSrc: 'https://source.unsplash.com/random?paneerTikka',
    time: '40 min',
    type: 'veg',
    isLiked: false,
    rating: 4.4,
  },
  {
    name: 'BBQ Ribs',
    imageSrc: 'https://source.unsplash.com/random?ribs',
    time: '70 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.6,
  },
  {
    name: 'Caesar Salad',
    imageSrc: 'https://source.unsplash.com/random?caesarSalad',
    time: '25 min',
    type: 'veg',
    isLiked: false,
    rating: 3.8,
  },
  {
    name: 'Fish Tacos',
    imageSrc: 'https://source.unsplash.com/random?fishTacos',
    time: '35 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.3,
  },
  {
    name: 'Chocolate Cake',
    imageSrc: 'https://source.unsplash.com/random?chocolateCake',
    time: '90 min',
    type: 'veg',
    isLiked: false,
    rating: 4.9,
  },
]

const toggle = document.querySelector('.toggle-btn')
const productContainer = document.querySelector('.products')
const filterBtn = [...document.querySelectorAll('.btn')]
const checkboxes = document.querySelectorAll('.filter-check')
const vegItem = data.filter((item) => item.type == 'veg')

const nonVeg = data.filter((item) => item.type == 'non-veg')

const aboveRating = data.filter((item) => item.rating >= 4.2)

const belowRating = data.filter((item) => item.rating < 4.2)

window.addEventListener('DOMContentLoaded', loadItem(data))

function loadItem(menuItem) {
  let displayMenu = menuItem.map((item) => {
    return `<div class="card-container">
          <div class="card-image">
            <img src=${item.imageSrc} alt="" class="card-image" />
          </div>

          <p class="food-type">${item.type}</p>
          <div class="food-detail">
            <h2>${item.name}</h2>
            <div class="rating">
              <img src="assets/Star.svg" alt="" />
              <span>${item.rating}</span>
            </div>
          </div>
          <div class="foot">
            <p class="price">${item.time}</p>
            <div class="like" id="like">
            
             
              <img src='assets/likered.svg' alt="" id='rIcon' class='hide' />
              <img src='assets/like1.svg' alt="" id='bIcon' />
              <img src="assets/comments.svg" alt="" />
            </div>
          </div>
        </div>`
  })

  displayMenu = displayMenu.join('')
  productContainer.innerHTML = displayMenu
  const like = document.querySelectorAll('.like')
  like.forEach((item) =>
    item.addEventListener('click', (e) => {
      e.currentTarget.children.rIcon.classList.toggle('hide')
      e.currentTarget.children.bIcon.classList.toggle('hide')
    })
  )
}

console.log(filterBtn)
filterBtn.forEach((item) => {
  item.addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('veg')) {
      loadItem(vegItem)
    } else if (e.currentTarget.classList.contains('non-veg')) {
      loadItem(nonVeg)
    } else {
      loadItem(data)
    }
  })
})

console.log(checkboxes)

checkboxes.forEach((item) => {
  item.addEventListener('change', updateFilter)
})
function updateFilter() {
  if (above.checked && !below.checked) {
    loadItem(aboveRating)
  }
  if (below.checked && !above.checked) {
    loadItem(belowRating)
  }
  if (above.checked && below.checked) {
    loadItem(data)
  }
  if (!above.checked && !below.checked) {
    loadItem(data)
  }
}

form.addEventListener('keyup', (e) => {
  e.preventDefault()
  const value = formInput.value.toLowerCase()
  console.log(value)

  //    if (value) {
  //       const newStore = store.filter((product) => {
  //         let { name } = product;
  //         name = name.toLowerCase();
  //         if (name.startsWith(value)) {
  //           return product;
  //         }
  //       });

  if (value) {
    const newStore = data.filter((product) => {
      let { name } = product
      name = name.toLowerCase()
      if (name.startsWith(value)) {
        return product
      }
    })
    loadItem(newStore)
    if (newStore.length < 1) {
      productContainer.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`
    }
  } else if (value == '') {
    loadItem(data)
  }
})

const sidebar = document.querySelector('.sidebar')
toggle.addEventListener('click',(e)=>{
console.log('click')
sidebar.classList.add('show-sidebar')
console.log(sidebar.parentElement)
!sidebar.addEventListener('click',()=>{
  sidebar.classList.remove('show-sidebar')
})
})