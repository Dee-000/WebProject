exports.CheckboxPage = class CheckboxPage {

    constructor(page) {

        this.page = page
        this.checkbox1 = page.getByRole('checkbox').first()
        this.checkbox2 = page.getByRole('checkbox').nth(1)

    }
    async gotoCheckboxPage() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }

    async checkboxselect() {
        await this.checkbox1.click();
        await this.checkbox2.click(); //unselect
                
    }

}
