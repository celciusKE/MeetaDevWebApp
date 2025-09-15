// @ts-check
import { test, expect } from '@playwright/test';
import { URL } from 'url';

test.beforeEach('Setup',async({page})=>{
//1.Go to home page
await page.goto('/')
})
test.describe('Create and sign in as a new user',()=>{
  tag : '@functionality : sign up and sign in'
  annotation : {
    type : 'task';
    description : 'User should be able to sign in to web aplication'

  }

//User can sign up for an account
test('User can sign up for an account',async({page}) => {
//2.Click on sign up with email
await page.getByRole('button', { name: 'Sign Up' }).click()
// await expect(page).toHaveTitle('signup');
await page.getByRole('button', { name: 'Continue with Email' }).click()
//3.Fill out form
await page.getByRole('textbox', { name: 'First Name' }).fill('Jane')
await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe')
await page.getByRole('textbox', { name: 'Email address' }).fill('gaudencianellyb@getMaxListeners.com')
await page.getByRole('textbox', { name: 'Password' }).fill('Admin@123')
//4.Create account
await page.getByRole('button', { name: 'Create account' }).click()
//5. Confirm successful sign up
})
//User can sign in with valid credentials
test('User can submit an empty form', async ({ page }) => {
  //2.Click on sign up
await page.getByRole('button', { name: 'Sign Up' }).click()
// 3.Continue with email
await page.getByRole('button', { name: 'Continue with Email' }).click()
 //4.Submit an empty form
await page.getByRole('button', { name: 'Create account' }).click()
//5.Expect an error message



})
//User can sign in with valid credentials
test('User can sign in with valid credentials', async ({ page }) => {
  //2. Click on sign in
  //3. Continue with email
  //4. Enter email and password
  //5. Click on sign in
  //6. Confirm successful sign in

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('meetadev');
})
})