// @ts-check
import { test, expect } from '@playwright/test';
import {LoginPage,SignUpPage} from '../pages/login.js'


test.beforeEach('Setup',async({page,baseURL})=>{
//1.Go to home page
  await page.goto('https://meetadev-client-production.up.railway.app/');
})
test.describe('Create and sign in as a new user',()=>{
  tag : '@functionality : sign up and sign in'
  annotation : {
    type : 'task';
    description : 'User should be able to sign in to web aplication'

  }

//User can sign up for an account
test('User can sign up for an account',async({page}) => {
const signUpNewUser = new SignUpPage(page);
await signUpNewUser.SignUp('charleneRuto@getMaxListeners.com','Pass1234*')
//expect success response

})
//rerun first test to valid existing user
test('User can reuse credentials to sign up for an account',async({page}) => {
const signUpNewUser = new SignUpPage(page);
await signUpNewUser.SignUp('charleneRuto@getMaxListeners.com','Pass1234*')
//expect failure response


})

//User can submit an empty form
test('User can submit an empty form', async ({ page }) => {
  //2.Click on sign up
await page.getByRole('button', { name: 'Sign Up' }).click()
// 3.Continue with email
await page.getByRole('button', { name: 'Continue with Email' }).click()
 //4.Submit an empty form
await page.getByRole('button', { name: 'Create account' }).click()
//5.Expect an error message



})


test('login as existing user',async({page})=>{
//call login method and enter valid credentials
const loginExistingUser = new LoginPage(page);
await loginExistingUser.login('1nonlynelly@gmail.com','ASD1234asd!@#$')
//validate successful login


})
//User can sign in with invalid credentials
test('User can sign in with invalid credentials', async ({ page }) => {
  const logininvalidUser = new LoginPage(page);
  await logininvalidUser.login('1nonlynelly@gmail.com','ASD1234asd!@#$')

  //expected outcome : error message
})
})