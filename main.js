(function() {
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
    //Add Event Listener to each scroller
    inputs.forEach(input => input.addEventListener('change', handleUpdate));

    //Provide a random Image
//    function randomImg() {
//        var randomNum = Math.random() * 10;
//        document.querySelector('img').setAttribute('src', `https://source.unsplash.com/random/800x${600 + randomNum}`)
//    }
    function displayLoader() {
      document.querySelector('img').removeAttribute('src');
      document.querySelector('#loadbox').className = 'loader';
      document.querySelector('img').style.border = 'none';
    }
    function randomImg() {
      displayLoader();
      var randomNum = Math.random() * 10;
      console.time('Took this long');
      fetch(`https://source.unsplash.com/random/800x${600 + randomNum}`)
      .then(function(response) {
        document.querySelector('img').setAttribute('src', response.url);
        document.querySelector('#loadbox').className = '';
        setTimeout(function(){
          document.querySelector('img').style.border = '10px var(--base) solid';
        }, 100)
        console.timeEnd('Took this long');
      })
    }
  
    //When submit is clicked, change the image
    var imgInput = document.getElementById('newImg');
    document.getElementById('changeImg').addEventListener('click', function() {
        changeImg(imgInput.value);
    });

    //When random is clicked, provide a random image
    document.getElementById('randomImg').addEventListener('click', function() {
        randomImg();
    });
})();