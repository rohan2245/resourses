// This is your content database. Add new items here.
const items = [
    {
        name: "Google",
        link: "https://careers.google.com/",
        category: "jobs",
        postDate: "2025-09-07"
    },
    {
        name: "Microsoft",
        link: "https://careers.microsoft.com/",
        category: "jobs",
        postDate: "2025-09-06"
    },
    {
        name: "Free JavaScript Ebook",
        link: "https://javascript.info/ebooks",
        category: "notes-pdf",
        postDate: "2025-09-05"
    },
    {
        name: "Python Crash Course PDF",
        link: "https://www.google.com",
        category: "notes-pdf",
        postDate: "2025-09-04"
    },
    {
        name: "Coursera: AI for Everyone",
        link: "https://www.coursera.org/learn/ai-for-everyone",
        category: "courses",
        postDate: "2025-09-03"
    }
];

// Function to calculate days ago
function calculateDaysAgo(date) {
    const postDate = new Date(date);
    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = today.getTime() - postDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    if (diffInDays === 0) {
        return "today";
    } else if (diffInDays === 1) {
        return "1d ago";
    } else {
        return `${diffInDays}d ago`;
    }
}

// Function to create and append a link item to the list
function createLinkItem(item) {
    const itemRow = document.createElement("div");
    itemRow.classList.add("item-row");

    const itemDetails = document.createElement("div");
    itemDetails.classList.add("item-details");

    const itemName = document.createElement("span");
    itemName.classList.add("item-name");
    itemName.textContent = item.name;

    const itemLink = document.createElement("a");
    itemLink.classList.add("item-link");
    itemLink.href = item.link;
    itemLink.textContent = "link";
    itemLink.target = "_blank";

    const itemDate = document.createElement("span");
    itemDate.classList.add("item-date");
    itemDate.textContent = calculateDaysAgo(item.postDate);

    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemLink);

    itemRow.appendChild(itemDetails);
    itemRow.appendChild(itemDate);

    return itemRow;
}

// Get main containers and buttons
const categoryGrid = document.getElementById("category-grid");
const contentView = document.getElementById("content-view");
const linkList = document.getElementById("link-list");
const contentTitle = document.getElementById("content-title");
const backButton = document.getElementById("back-button");
const categoryBoxes = document.querySelectorAll(".category-box");

// Show content for the selected category
function showCategoryContent(category, title) {
    categoryGrid.classList.add("hidden");
    contentView.classList.remove("hidden");
    contentTitle.textContent = title;
    linkList.innerHTML = "";

    const filteredItems = items.filter(item => item.category === category);
    filteredItems.forEach(item => {
        const itemElement = createLinkItem(item);
        linkList.appendChild(itemElement);
    });
}

// Event listeners for category boxes
categoryBoxes.forEach(box => {
    box.addEventListener("click", () => {
        const categoryId = box.id.split("-")[0];
        const categoryTitle = box.querySelector(".box-label").textContent;
        showCategoryContent(categoryId, categoryTitle);
    });
});

// Event listener for the back button
backButton.addEventListener("click", () => {
    contentView.classList.add("hidden");
    categoryGrid.classList.remove("hidden");
});
