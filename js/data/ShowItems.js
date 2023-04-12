

window.onload = () => {
    let mainCont1 = document.querySelector('#main-cont1-c2')
    let json = [
        {
            'src':'img/basket.png',
            'price':'$5000.90'
        },
        {
            'src':'img/basket.png',
            'price':'$5000.90'
        },
        {
            'src':'img/basket.png',
            'price':'$5000.90'
        },
        {
            'src':'img/basket.png',
            'price':'$5000.90'
        },
        {
            'src':'img/basket.png',
            'price':'$5000.90'
        },
    ]
    const addItem = () => {
        let template = document.querySelector('#item');
        json.map(jsonItem =>{
            let{src,price} = jsonItem;
            let item = template.cloneNode(true);
            item.querySelector('img').src = src
            item.querySelector('h3').innertext = price
            mainCont1.append(item)
            console.log(1)
        });
    }

    addItem()
}
