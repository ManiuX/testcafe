import {Selector} from 'testcafe';

fixture('canvas test')
    .page`https://realtimeboard.com/login/`;

const email=Selector('input').withAttribute('name','email');
const pwd=Selector('input').withAttribute('name','password');
const login=Selector('button').withText('Log In');
test('drag the borad', async t=>{
    await t.typeText(email,'yhai@thoughtworks.com')
        .typeText(pwd,'Hy123456.')
        .click(login);

    const closeIcon=Selector('.icon').nth(0);

    await t.click(closeIcon);

    const flowchart=Selector('.board-brick__preview__overlay').nth(0);

    await t.doubleClick(flowchart);

    // const pen=Selector('.toolbar__item').nth(6);
    const pen=Selector('#canvasContainer > div:nth-child(3) > div > div.board-toolbar__customized-box > div.toolbar__item.toolbar__item--customized.AT__toolbar--PEN.toolbar__item--draw').nth(0);
    const canvas=Selector('canvas').nth(0);

    await t.wait(50000).click(pen).drag(canvas,-100,100);


})