const profileData = [{
        name: 'John',
        age: 29,
        gender: 'male',
        interestedIn: 'female',
        hobbies: 'sports, music',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Sarah',
        age: 26,
        gender: 'female',
        interestedIn: 'male',
        hobbies: 'pottery, art',
        image: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
        name: 'Peter',
        age: 32,
        gender: 'male',
        interestedIn: 'female',
        hobbies: 'programming, hockey',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
        name: 'Katy',
        age: 30,
        gender: 'female',
        interestedIn: 'male',
        hobbies: 'horse-riding, pianist',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    }
]


const profiles = profileIterator(profileData);
showProfileInfo();

document.querySelector('#next-btn').addEventListener('click', showProfileInfo);

function showProfileInfo() {
    const profile = profiles.next();

    if (!profile.done) {
        document.querySelector('#user-display').innerHTML =
            `<ul class="list-group">
                <li class="list-group-item">Name : ${profile.value.name}
                <li class="list-group-item">Age : ${profile.value.age}
                <li class="list-group-item">Gender : ${profile.value.gender}
                <li class="list-group-item">Hobbies : ${profile.value.hobbies}
                <li class="list-group-item">Interested In : ${profile.value.interestedIn}
             </ul>`;

        document.querySelector('#profile-pic').innerHTML =
            `<img src="${profile.value.image}">`;

    } else {
        window.location.reload();
    }
}

function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}