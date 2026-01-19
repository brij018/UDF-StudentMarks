function calculateResult() {
    const s1 = Number(document.getElementById("sub1").value)
    const s2 = Number(document.getElementById("sub2").value)
    const s3 = Number(document.getElementById("sub3").value)

    if (s1 > 100 || s2 > 100 || s3 > 100) {
        alert("Marks cannot be more than 100")
        return
    }
    
    const total = s1 + s2 + s3
    const percentage = total / 3

    let grade

    switch (true) {
        case percentage >= 90:
            grade = "A"
            break
        case percentage >= 75:
            grade = "B"
            break
        case percentage >= 60:
            grade = "C"
            break
        case percentage >= 40:
            grade = "D"
            break
        default:
            grade = "Fail"
    }

    document.getElementById("total").innerText = "Total: " + total
    document.getElementById("percentage").innerText = "Percentage: " + percentage.toFixed(2) + "%"
    document.getElementById("grade").innerText = "Grade: " + grade
}
