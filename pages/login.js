class LoginPage {
    constructor(page){
        this.page = page;
        this.enterUsername = 'Nelly';
        this.enterEmail = 'testemail@gmail.com';
        this.enterPassword = 'password'
        this.submitButton = ''
    }

    async login(username, password){
        //2.Go to login
    await page.getByRole('link', { name: 'Login' }).click()
    // 3.Continue with email
    await page.getByRole('button', { name: 'Continue with Email' }).click()
    //4. Enter email and password
    await page.getByRole('textbox', { name: 'Email address' }).fill('1nonlynelly@gmail.com')
    
    await page.getByRole('textbox', { name: 'Password' }).fill('ASD1234asd!@#$')
    //5. Click on sign in
    await page.getByRole('button', { name: 'Sign in' }).click()
    //6. Confirm successful sign in
        }
}

module.exports = { LoginPage };
