import githubLoginPage from '../pages/githubLoginPage';
import githubLogindata from '../testdata/githubLoginData'

fixture `GitHub login test cases`
    .page `https://github.com/login`;

test('correct username and password', async I => {
    await githubLoginPage.login(githubLogindata.admin.name,githubLogindata.admin.pwd);
});

test('no username and password', async I=>{
    await I.click(githubLoginPage.loginButton);
});

test('no username', async I=>{
    await I.typeText(githubLoginPage.password, githubLogindata.admin.pwd);
});

test('no password', async I=>{
    await I.typeText(githubLoginPage.username,githubLogindata.admin.name)
}).skip;
