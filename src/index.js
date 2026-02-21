import './styles.css';

class MyDOM {
  constructor() {
    this.container = document.querySelector('#content');
  }

  createDOM() {
    const title = document.createElement('h1');
    title.textContent = "Hello Webpack";

    console.log(this.container)

    this.container.appendChild(title);
  }
}

const myDOM = new MyDOM();
myDOM.createDOM();