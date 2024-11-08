// script.js
const responses = {
    "How to file a cyber complaint?": "Filing a cyber complaint on the platform is a simple and straightforward process. Users begin by accessing the complaint submission form, which is available on both the website and mobile application. To initiate a complaint, users must first create an account or log into their existing account. Once logged in, they will be prompted to provide a detailed description of the incident, including when it occurred, what happened, and who was involved. The form also includes sections for uploading supporting evidence, such as screenshots, emails, documents, and any other relevant material. After filling in all the necessary details, users can submit the complaint for review. The platform's user interface is designed to guide users through each step of the process, ensuring that all required information is included for a thorough investigation.",

    "Which cyber complaints are accepted?": "The platform is designed to handle a wide range of cyber complaints to support users who are facing various online threats. Some of the common types of complaints accepted include hacking, identity theft, phishing, online fraud, cyberbullying, data breaches, harassment, and cyberstalking. The platform also accepts complaints related to intellectual property theft, unauthorized access to personal or corporate data, and any incidents involving illegal online content, such as malware distribution or online scams. Whether it’s an individual or a business facing cybercrime, the platform allows users to report a broad spectrum of online criminal activities.",

    "What is a high-priority case?": "A high-priority case is defined as an incident that poses an immediate threat to the safety, security, or financial well-being of the individual or organization involved. This can include situations where sensitive personal or financial data has been compromised, or where the incident is likely to cause significant harm in the near future. For example, a hacking attack that targets a large organization or a phishing attempt that could lead to identity theft are considered high-priority. Additionally, cases involving severe personal harm or violence—such as threats, harassment, or cyberstalking—are classified as high priority. The platform has a set of criteria that help in determining the priority level of each complaint, such as the urgency of the threat, the number of individuals affected, the potential for financial loss, and the severity of the incident.",

    "How are cases prioritized?": "Cases are prioritized based on a set of predefined criteria that evaluate the severity, impact, and urgency of the situation. When a complaint is submitted, the platform’s triage system categorizes it as high, medium, or low priority. High-priority cases involve immediate threats or significant damage, such as cyberattacks, data breaches, and identity theft. These cases are treated with the utmost urgency and assigned to dedicated cybersecurity experts for quick resolution. Medium-priority cases are those that present a moderate risk or require attention but do not demand immediate action. Examples may include cases of online fraud or harassment. Low-priority cases typically involve minor issues or complaints that can be resolved in a longer timeframe, such as technical problems or less severe forms of online bullying.",

    "How to submit complaint evidence?": "Submitting evidence for a cyber complaint is an essential part of the filing process, as it helps to validate the complaint and supports the investigation. To submit evidence, users can upload files directly through the complaint submission form. The platform accepts a variety of file formats, including images (such as screenshots), text files, video recordings, and documents (such as logs, emails, or contracts). Users can drag and drop the files into the designated upload sections of the form, or they can use the file selection tool to browse their device and choose the appropriate files. Each file is securely encrypted during submission to ensure privacy and integrity. Users are encouraged to submit as much relevant evidence as possible to help expedite the investigation. After submitting the evidence, users will receive a confirmation notification, and the uploaded files will be stored securely in the platform’s database.",

    "How is complaint data verified?": "To ensure the integrity and authenticity of the complaint data, the platform employs a combination of automated and manual verification techniques. Upon submission, automated systems run initial checks to verify the consistency and legitimacy of the complaint data. For example, the platform checks for common signs of fraud, such as duplicate complaints, suspicious email addresses, or files with altered metadata. If the automated system detects any inconsistencies or red flags, the case is flagged for further review. After the automated verification, cybersecurity professionals manually review the complaint and supporting evidence to ensure its validity. This includes cross-referencing the data with known sources, checking the authenticity of the submitted evidence, and contacting the complainant if additional clarification or proof is needed.",

    "Can complaints be updated?": "Yes, users can update their complaints even after they have been submitted. If there is new evidence, additional information, or changes to the case, users can log into their account and navigate to their complaint dashboard. There, they will find an option to edit their existing complaint. Users can add new files, update descriptions, correct errors, or provide further context that may assist in the investigation. All updates are securely recorded and tracked by the system, ensuring that the complaint history remains accurate and up to date. Additionally, the platform sends notifications to the appropriate department whenever a complaint is updated, so that the investigation team is aware of the changes and can review them promptly.",

    "What info is needed for a complaint?": "To file a complete and actionable cyber complaint, users must provide several key pieces of information. First, a detailed description of the incident is required, including what happened, when it occurred, how it happened, and any individuals or organizations involved. Users should also specify the impact of the incident, such as financial loss, personal harm, or data theft. Additionally, users must provide their contact information, including a phone number and email address, to ensure that investigators can reach them for follow-up. The platform also requires supporting evidence, such as screenshots, documents, videos, or logs, that help verify the details of the incident.",

    "How are users notified of updates?": "Users are kept informed throughout the complaint resolution process through a range of notifications. Once a complaint is submitted, users receive an initial confirmation email with a reference number, allowing them to track the status of their complaint. As the complaint progresses, users receive regular updates via email and SMS notifications about key milestones in the case, such as when the complaint is reviewed, when additional information is needed, or when the case is resolved. Users are also notified of any changes in the status of their complaint, such as if the case is re-prioritized or if new evidence is added.",

    "What help is available for filing?": "The platform offers comprehensive help to users throughout the complaint filing process. A dedicated FAQ section is available on the website, covering common questions and providing step-by-step instructions on how to file a complaint, submit evidence, and track the progress of a case. Additionally, the platform offers video tutorials that walk users through each stage of the complaint submission process, making it easy for even first-time users to file their complaints correctly. For real-time assistance, users can access a live chat feature, where they can chat with support agents who are available to answer questions and guide them through the filing process."
};



// Start the chat with a welcome message and options
function startChat() {
    displayMessage("Welcome! How can I assist you today?", "bot");
    displayOptions([
        "How to file a cyber complaint?",
        "Which cyber complaints are accepted?",
        "What is a high-priority case?",
        "How are cases prioritized?",
        "How to submit complaint evidence?",
        "How is complaint data verified?",
        "Can complaints be updated?",
        "What info is needed for a complaint?",
        "How are users notified of updates?",
        "What help is available for filing?"
    ]);

}

// Function to display a new message
function displayMessage(text, sender) {
    const chatMessages = document.querySelector(".chat-messages");

    // Create message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender === "bot" ? "bot-response" : "user-message");
    messageElement.textContent = text;

    // Append message to chat container
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
}

// Function to display clickable options below the chat container
function displayOptions(options) {
    const questionContainer = document.querySelector(".question-container");
    questionContainer.innerHTML = ''; // Clear previous options

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");

    options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option-button");
        button.textContent = option;
        button.onclick = () => handleOption(option);
        optionsContainer.appendChild(button);
    });

    // Append options to the container
    questionContainer.appendChild(optionsContainer);
}

// Handle the selected option, show response, and clear options for next question
function handleOption(option) {
    const chatMessages = document.querySelector(".chat-messages");

    // Clear previous chat content
    chatMessages.innerHTML = '';
    displayMessage("Welcome! How can I assist you today?", "bot");

    // Display user's choice
    displayMessage(option, "user");

    // Scroll to the top of the chat container

    // Display bot response based on the option selected
    if (responses[option]) {
        displayMessage(responses[option], "bot");
    } else {
        displayMessage("I'm here to help with anything you need.", "bot");
    }

    // After bot response, reset options for the next question
    setTimeout(() => {
        displayOptions([
            "How to file a cyber complaint?",
            "Which cyber complaints are accepted?",
            "What is a high-priority case?",
            "How are cases prioritized?",
            "How to submit complaint evidence?",
            "How is complaint data verified?",
            "Can complaints be updated?",
            "What info is needed for a complaint?",
            "How are users notified of updates?",
            "What help is available for filing?"
        ]);
    }, 2000); // Delay to show the response first, then reset options
    chatMessages.scrollTo({
        top: 0,
        behavior: 'smooth' // This enables smooth scrolling
    });
}


// Start chat when the page loads
document.addEventListener("DOMContentLoaded", startChat);
