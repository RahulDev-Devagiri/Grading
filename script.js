function calculateGrade() 
{
    const marks = document.getElementById('marks').value;
    let grade = '';
    let pass = '';

    if (marks >= 90 && marks <= 100) 
    {
        grade = 'A+';
        pass = 'Passed';
    } else if (marks >= 80 && marks < 90) 
    {
        grade = 'A';
        pass = 'Passed';
    } else if (marks >= 70 && marks < 80) 
    {
        grade = 'B+';
        pass = 'Passed';
    } else if (marks >= 60 && marks < 70) 
    {
        grade = 'B';
        pass = 'Passed';
    } else if (marks >= 50 && marks < 60) 
    {
        grade = 'C+';
        pass = 'Passed';
    } else if (marks >= 40 && marks < 50) 
    {
        grade = 'C';
        pass = 'Passed';
    } else if (marks >= 30 && marks < 40) 
    {
        grade = 'D+';
        pass = 'Passed';
    } else if (marks >= 20 && marks < 30) 
    {
        grade = 'D';
        pass = 'Passed';
    } else if (marks < 20) 
    {
        grade = 'E';
        pass = 'Failed';
    } else 
    {
        grade = 'Invalid';
        pass = 'Invalid marks entered';
    }

    document.getElementById('result').innerText = `Grade: ${grade}, ${pass}`;
}