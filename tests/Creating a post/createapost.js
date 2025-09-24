import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.js';
import { createPost } from '../../pages/post.js';

test.beforeEach('Setup',async({page,baseURL})=>{
//1.Go to home page
  await page.goto('https://meetadev-client-production.up.railway.app/');
})
test.describe('Validate new post',()=>{
  tag : '@functionality : creating posts'
  annotation : {
    type : 'task';
    description : 'User should be able to create a post'
  }

  //create a new post
  test('User can create a new post',async({page}) => {
        const loginExistingUser = new LoginPage(page);
        await loginExistingUser.login('cliffosego2000@gmail.com','Password123*')
        const createNewPost = new createPost(page);
        await createNewPost.createRecentPost('Not a post,An automated test running ...')
        //expect failure response


})
})