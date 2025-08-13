var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');
console.log(mainEl)
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
let headline = document.createElement('h1');
mainEl.appendChild(headline);
headline.textContent = "DOM Manipulation";
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%'
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')


// Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks) {
    // Create an <a> element.
    let menuBtn = document.createElement('a');
    // On the new element, add an href attribute with its value set to the href property of the "link" object.   
    menuBtn.setAttribute('href', link.href);
    // menuBtn.href = link.href; <------ Alex's code that works the same as mine
    // Set the new element's content to the value of the text property of the "link" object.    
    menuBtn.textContent = link.text;
    // Append the new element to the topMenuEl element.    
    topMenuEl.appendChild(menuBtn)
};
console.log(topMenuEl)


// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu")
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = `100%`
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add(`flex-around`)
console.log(subMenuEl)



// Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll('a')
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener(`click`, handleActiveCheck)

function handleActiveCheck(evt) {
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    evt.preventDefault()
    console.log(evt)
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (evt.target.localName !== 'a') return;
        // Log the content of the <a> to verify the handler is working.
        console.log(evt.target.textContent);
    // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
    evt.target.classList.toggle('active')
    // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    for(link of topMenuLinks){
        if(link !== evt.target){
            link.classList.remove('active')
        }
    }
    // Hint: Removing a non-existent class from an element does not cause an error!
}



