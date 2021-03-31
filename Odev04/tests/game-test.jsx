const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/Game');

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
    console.log(card);

});
