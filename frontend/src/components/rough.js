let problem=document.getElementsByClassName("ProblemStatement")[0];
        let problemClone=problem.cloneNode(true);
        problemClone.querySelector(".proHeading").innerHTML=data.Heading;
        problemClone.querySelector(".proStatement").innerHTML=data.Problem;
        problemClone.style.display="block";
        document.getElementsByClassName("container")[0].append(problemClone);
        for(let i of data.Solutions)
        {
            let solution=document.getElementsByClassName("TotalSolution")[0];
            let solutionClone=solution.cloneNode(true);
            solutionClone.style.display="block";
            solutionClone.querySelector(".solHeading").innerHTML=i.solHeading;
            solutionClone.querySelector(".solStatement").innerHTML=i.Solution;
            solutionClone.querySelector(".attachedFile").innerHTML=i.Filename;
            document.getElementsByClassName("AllSolutions")[0].append(solutionClone);
        }
