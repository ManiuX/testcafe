import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://github.com/login`;

const username=Selector('#username');

test('github homepage', async I => {
    const username=Selector('#login_field');
    const loginButton=Selector('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');
    const signIn=Selector('input').withAttribute('value','Sign in');
    await I
        .typeText(username,'hahahaha')
        .click(signIn)
        .expect((Selector('#js-flash-container > div > div').innerText).eql('1'));

});