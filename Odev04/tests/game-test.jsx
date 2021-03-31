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

test("kedi", () => {
    let driver = mount(<Game/>);

    for(let i = 0; i < 3; i++){
        let card = driver.find(".kart").at(i);
        card.simulate("click");
        card = driver.find(".kart").at(i);
        const srcName = card.find("img").prop("src");

        checkGame(driver);

        if(srcName != "img/dog.png"){
            expect(srcName).toBe("img/cat.png");
        }

        driver = mount(<Game/>);
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

    let card = driver.find(".kart").at(0);
    card.simulate("click");
    card = driver.find(".kart").at(0);
    const srcName = card.find("img").prop("src");
    console.log(srcName);
    expect(srcName === 'img/cat.png' || srcName ==='img/dog.png').toBeTruthy();

});
