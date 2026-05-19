function addRecommendation() {

    let senderName =
        document.getElementById("senderName").value

    let recommendationText =
        document.getElementById("newRecommendation").value

    if(senderName.trim() === "" ||
        recommendationText.trim() === "") {

        alert("Please fill all fields!")

        return
    }

    let recommendation =
        document.createElement("div")

    recommendation.className = "recommendation"

    recommendation.innerHTML =
        "<strong>" +
        senderName +
        ":</strong> " +
        '"' + recommendationText + '"'

    document
        .getElementById("recommendation-list")
        .appendChild(recommendation)

    alert("Recommendation submitted successfully!")

    document.getElementById("senderName").value = ""

    document.getElementById("newRecommendation").value = ""
}