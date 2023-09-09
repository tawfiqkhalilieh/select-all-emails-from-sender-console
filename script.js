for (let email of emails) {
    try {
         let emlName = email.querySelector('[name="Twitch"]'); // select all the emails from Twitch
        if (emlName) {
            email.querySelector('[role="checkbox"]').click();
        }
    } catch (err) {
        console.log(err)
    }
}
