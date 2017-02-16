const inputs = document.querySelectorAll('.controls input');

function changeImg(url) {
    document.querySelector('img').setAttribute('src', url);
}

function handleUpdate() {
    //Padding and blur require px suffix, but other properties do not.
    const suffix = this.dataset.sizing || '';
    //Handle case for opacity because values are 0 to 1
    if (this.id === 'opacity') {
        document.documentElement.style.setProperty(`--${this.name}`, this.value / 100);
        return;
    }
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function randomImg() {
    var randomNum = Math.random() * 10;
    document.querySelector('img').setAttribute('src', `https://source.unsplash.com/random/800x${600 + randomNum}`)
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));