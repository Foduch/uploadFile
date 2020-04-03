describe('Upload file', () => {
    it('Should upload file over 5 MB', () => {
        browser.uploadFile('fileOver5MB.jpg')
    })
})