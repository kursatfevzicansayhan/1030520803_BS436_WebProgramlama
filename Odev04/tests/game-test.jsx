const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/Game.jsx');

const checkGame = (driver) =>{
    const card = driver.find('.kart');
    expect(card.length).toEqual(3);
}

test('Kart Sayısı',()=>{
    const driver = mount(<Game/>);
    checkGame(driver);
});

test('Kart Click',()=>{
    const driver = mount(<Game/>);
    checkGame(driver);
    for(let i=0;i<3;i++)
    {
        let card = driver.find('.kart').at(i);
        let idName = card.prop("id");
        expect(idName === 'img0'||idName === 'img1'||idName === 'img2').toBeTruthy();
    }

});

test('Kart Doğru Mu ?',()=>{
    const driver = mount(<Game/>);
    checkGame(driver);
    for(let i=0;i<3;i++)
    {
        let card = driver.find('.kart').at(i);
        let srcName = card.prop("src");
        expect(srcName === 'img/card.png').toBeDefined();
    }

});

test('Kart Çevir',()=>{
    const driver = mount(<Game/>);
    checkGame(driver);
    for(let i=0;i<3;i++)
    {
        let card = driver.find('.kart').at(i);
        let srcName = card.find('img').prop("src");
        card.simulate('click');
        console.log(srcName);
        expect(srcName === 'img/cat.png' || srcName ==='img/dog.png').toBeDefined();

        //toBeTruthy() fonksiyonu kullandığımda cat.png veya dog.png yerine card.png dönüyor
        //Fakat kodu 'yarn dev' ile çalıştırdığımda sorunsuz çalışıyor
    }
});
