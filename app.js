// Init Github
const github = new Github;
//init Ui
const ui = new UI;

//seartch input

const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input Text

    var userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show Alert
                    ui.showAlert('User not Found', 'alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }

            })

    } else {

       //Clear profile
    	    ui.clearProfile();
    }
});	 