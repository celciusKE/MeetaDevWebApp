// @ts-check
import { test, expect } from '@playwright/test';


test.beforeEach('Setup',async({page,baseURL})=>{
//1.Go to home page
  await page.goto('https://meetadev-client-production.up.railway.app/');
})

test.describe('Validate user can create a post',()=>{

    tag : '@functionality : create a post'
    annotation : {
        task : 'validate user can create a post'
        description :"create a random post and submit on the app, the post should be displayed on posts page, user should be able to search and find the post"
    }

})
test ('User can create a post',async({page})=>{

})