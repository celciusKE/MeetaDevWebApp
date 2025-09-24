exports.LoginPage =
class LoginPage {
    constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.continueWithEmailButton = page.getByRole('button', { name: 'Continue with Email' });
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
  }


//User Login
    async login(enterEmail, enterPassword){
        //2.Go to login
    await this.loginLink.click()
    // 3.Continue with email
    await this.continueWithEmailButton.click()
    //4. Enter email and password
    await this.emailInput.fill(enterEmail)
    
    await this.passwordInput.fill(enterPassword)
    //5. Click on sign in
    await this.signInButton.click()
    //6. Confirm successful sign in
        }
}

exports.SignUpPage=
class SignUpPage {
    constructor(page){
        this.page = page;
        this.signUpLink = page.getByRole('button', { name: 'Sign Up' })
        this.continueWithEmailButton = page.getByRole('button', { name: 'Continue with Email' })
        this.enterFirstName = page.getByRole('textbox', { name: 'First Name' })
        this.enterLastName = page.getByRole('textbox', { name: 'Last Name' })
        this.enterEmailAddress = page.getByRole('textbox', { name: 'Email address' })
        this.createNewPassword = page.getByRole('textbox', { name: 'Password' })
        this.createAccount = page.getByRole('button', { name: 'Create account' })

    }
        async SignUp(newUserEmail, newUserPassword){
            //2.Click on sign up with email
        await this.signUpLink.click()
        // continue with email
        await this.continueWithEmailButton.click()
        //3.Fill out form
        await this.enterFirstName.fill('Jane')
        await this.enterLastName.fill('Doe')
        await this.enterEmailAddress.fill(newUserEmail)
        await this.createNewPassword.fill(newUserPassword)
        //4.Create account
        await this.createNewPassword.click()

        
    }
}


