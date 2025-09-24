exports.createPost =
class postPage{
        constructor(page){
            this.page = page;
            this.navigateToHome = page.waitForURL('https://meetadev-client-production.up.railway.app/posts') 
            this.newPostButton = page.getByRole('button', { name: 'Post' });
            this.postContent = page.getByRole('textbox', { name: 'What\'s on your mind?' })
            this.submitPost = page.getByRole('button', { name: 'Post' }).nth(2)
        }
        async createRecentPost(randomContent){
            await this.navigateToHome
            await this.newPostButton.first().click()
            await this.postContent.fill(randomContent)
            await this.submitPost.click()
    }
}