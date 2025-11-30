let activitiesName = [
    "Blood donation program",
    "2025 Volunteer Campaign",
    "2025 Spring Volunteer Campaign",
    "Run For The Heart",
    "A Million Compassionate Steps – Continuing the Golden Legacy",
]
let activitiesHost = [
    "Saigon Times Group",
    "Nguyen Huu Tien",
    "Ho Chi Minh City Youth Union and Vietnam Student Association.",
    "Gamuda Land Vietnam",
    "Vietnam Red Cross Society Central Committee.",
]
let activitiesSignUpTime = [
    "Before 01/10/2025",
    "Before 01/7/2025",
    "Before 22/12/2024.",
    "Before 2/72025.",
    "Before 8:00 23/10/2024",
]
let activitiesTime = [
    "4/10/2025 (7:30 to 11:50)",
    "2/7/2025 - 21/7/2025.",
    "22/12/2024 - 28/1/2025.",
    "28/9/2025.",
    "23/11/2024 - 28/4/2025.",
]
let activitiesLocation = [
    "35 Nam Ky Khoi Nghia, Ben Thanh Ward, Ho Chi Minh City",
    "Cai Nhum, Tan Long Hoi, Nhon Phu communes, Binh Chanh, Vinh Loc, Hiep Phuoc and Nha Be",
    "Thu Duc City",
    "MetroPole Thu Thiem, Ho Chi Minh city",
    "Cai Nhum, Tan Long Hoi, and Nhon Phu communes, Vinh Long Province and Ho Chi Minh City.",    
]
let activitiesDesciption = [
    "Ho Chi Minh City is lacking blood because the amount of donations has decreased. In July 2025, it received less than needed, so the reserve decreased sharply. The health sector warns that it may only meet 70–80% of treatment needs. The Department of Health calls on people and units to increase blood donation, and Saigon Times Group organizes Blood Donation Day 2025 to contribute to solving this situation.",
    "With the aim of creating an environment for university students and people to promote their pioneering spirit, contribute their youthful energy, and grow through volunteer activities, thereby contributing to sustainable development goals in alignment with the university’s strategic orientation",
    "Voluntary blood donation, caring for disadvantaged children, migrant workers who cannot return home for Tet, the homeless, the needy, elderly living alone, and sick children…",
    "The purpose of Run for the Heart 2025 is to raise funds for heart surgery for underprivileged children with congenital heart defects, promote community spirit and compassion, and encourage healthy, active lifestyles.",
    "To create an environment for students to promote their pioneering spirit, contribute their youthful energy, and grow through volunteer activities, while contributing to sustainable development goals in alignment with the university’s strategic orientation.",    
]
let activitiesURL = [
    "/assets/activities-picture/blood.png",
    "/assets/activities-picture/activities2.png",
    "/assets/activities-picture/spring.png",
    "/assets/activities-picture/heart.png",
    "/assets/activities-picture/steps.png",
]
let activity = {
    name: "",
    host: "",
    signUpTime: "",
    time: "",
    location: "",
    description: "",
    imageURL: "",

}
function setEvent(name) {
    let activityID = activitiesName.indexOf(name)
    activity.name = name
    activity.host = activitiesHost[activityID]
    activity.signUpTime = activitiesSignUpTime[activityID]
    activity.time = activitiesTime[activityID]
    activity.location = activitiesLocation[activityID]
    activity.description = activitiesDesciption[activityID]
    activity.imageURL = activitiesURL[activityID]

    localStorage.setItem("currentEvent", JSON.stringify(activity))
    window.location.assign('/pages/activityDetails/')
}
function getEvent() {
    return JSON.parse(localStorage.getItem("currentEvent"))
}
function buildPage(event = getEvent()) {
    let picture = document.getElementById("picture") || ""
    if (picture != "") {
        picture.style.backgroundImage = `url(${event.imageURL.replace("\"", "")})`
    }

    let eventName = document.getElementById("title") || ""
    if (eventName != "") {
        eventName.textContent = event.name
    }

    let eventHost = document.getElementById("organizer") || ""
    if (eventHost != "") {
        eventHost.textContent = event.host
    }

    let eventSignUpTime = document.getElementById("signUpTime") || ""
    if (eventSignUpTime != "") {
        eventSignUpTime.textContent = event.signUpTime
    }

    let eventTime = document.getElementById("eventTime") || ""
    if (eventTime != "") {
        eventTime.textContent = event.time
    }

    let eventLocation = document.getElementById("eventLocation") || ""
    if (eventLocation != "") {
        eventLocation.textContent = event.location
    }

    let eventDescription = document.getElementById("description") || ""
    if (eventDescription != "") {
        eventDescription.textContent = event.description
    }
}
buildPage()