import slider3 from "./sliders.js";

const catalogList = document.querySelector('.catalog-list');
const catalogMore = document.querySelector('.catalog__more');
const prodModal = document.querySelector(`[data-graph-target="prod-modal"] .modal-content`);
let prodQuantity = 6;
let dataLength = null;

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

if (catalogList) {
  const loadProducts = (quantity = 6) => {
    fetch('../resourses/data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dataLength = data.length;

        catalogList.innerHTML = '';

        for (let i = 0; i < dataLength; i++) {
          if (i < quantity) {
            let item = data[i];
            console.log(item);

            catalogList.innerHTML += `
              <li class="catalog-list__item">
                <article class="good">
                  <div class="good__image">
                    <img src="${item.mainImage}" alt="${item.title}">
                  </div>
                  <div class="good__content">
                    <h3 class="good__title">${item.title}</h3>
                    <div class="good__price">${normalPrice(item.price)} руб.</div>
                  </div>
                  <div class="good__btns">
                    <button class="btn-reset good__btn" data-graph-path="prod-modal" data-id="${item.id}" aria-label="Показать информацию о товаре">
                      <i class="fa-regular fa-eye"></i>
                    </button>
                    <button class="btn-reset good__btn" aria-label="Добавить товар в корзину">
                      <i class="fa-solid fa-cart-plus"></i>
                    </button>
                  </div>
                </article>
              </li>
            `
          };
        };
      })
      .then(() => {
        const modal = new GraphModal({
          isOpen: (modal) => {
            const openBtnId = modal.previousActiveElement.dataset.id;

            loadModalData(openBtnId);

            slider3.update();
          }
        });
      });
  };

  loadProducts(prodQuantity);

  const loadModalData = (id = 1) => {
    fetch('../resourses/data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // prodModal.innerHTML = '';

        for (let dataItem of data) {
          if (dataItem.id == id) {

          }
        }
      });
  };

  catalogMore.addEventListener('click', e =>{
    prodQuantity = prodQuantity + 3;

    loadProducts(prodQuantity);

    if (prodQuantity >= dataLength) {
      catalogMore.style.display = 'none';
    } else {
      catalogMore.style.display = 'block';
    }
  });
}
