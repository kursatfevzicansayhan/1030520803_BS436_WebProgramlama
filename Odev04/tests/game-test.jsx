const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/Game.jsx');

const checkGame = (driver) =>{
    const card = driver.find('.kart');
    expect(card.length).toEqual(3);
}


test('Oyun Oluşturuldu',()=>{
    const driver = mount(<Game/>);
    checkGame(driver);
});

test("kart bul",()=>{
    const driver = mount(<Game/>);
    checkGame(driver);
    let card = driver.find('.kart').at(0);
    let srcName = card.prop("src");


    console.log(srcName);
    card.simulate('click');
    //Click eventinde takılıyor
    // 32.satırda TypeError: Cannot set property 'src' of null hatası alıyorum
    //Ama kodu "yarn dev" ile normal çalıştırdığımda çalışıyor.

    expect(srcName === 'img/cat.png' || srcName ==='img/dog.png').toBeTruthy();


});
