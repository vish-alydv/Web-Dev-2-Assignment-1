const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const demoContent = document.getElementById("demoContent");
const eventContainer = document.getElementById("eventContainer");

const sampleEvent = [
    {
        title: "web-Dev",
        date: "4-5-23",
        category: "workshop",
        description: "iubuvihu ohfowihfw fuwbwi"
    },
    {
        title: "web-Dev2",
        date: "3-3-25",
        category: "confrence",
        description: "nud buwouhw h9whg9wro g"
    }
];

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,  
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
});

function createEventCard(eventData) {
    const card = document.createElement("div");
    card

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    return card;
}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}

Function.add

clearAllBtn.addEventListener("click" ,() => {
    eventContainer.innerHTML = `
    <div class = "empty-state"> No Events Yet. Add your First Event! </div>`
    
})

addSampleBtn.addEventListener("click" , ()=> {
    sampleEvents.forEach(addEvent);
})


eventContainer.addEventListener("click", (event) => {
    const card = event.target.closest('.event-card'); //event-card
    console.log(card, "inside line 73");

    if (event.target.classList.contains("delete-btn")) {
        card.remove()
    }

    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML = `
            <div class="empty-state">
                No events yet. Add your first event!
            </div>`
    }

})
