let grade = "C";

let feedback;

switch (grade) {
    case "A": 
        feedback = "Excellent!";
        break;
    
    case "B":
        feedback = "Good!";
        break;
    
    case "C":
        feedback = "Average!";
        break;
    
    default:
        feedback = "Needs improvement.";

}

console.log(feedback)