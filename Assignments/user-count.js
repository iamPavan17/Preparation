// You are newly appointed as the data analyst of a company. The first task you are given is described below:

// For each year from the establishment year (1990), you are given the user count till that year from 1990 (cumulative user count over the years). You have to find the new users added per year.

// You are given a table which consists of two fields which are described below:

// Year: Year till which the user count is given.

// Count: Count of users from 1990 to the respective year.

// Input table consists of consecutive years in ascending order starting from the year 1991.

// Input Format:
// Table : UserCount

// Field	Type
// Year	integer
// Count	integer
// Output Format:
// Field	Type
// Year	integer
// NewUserCount	integer
// Sample Input:
// Sample UserCount Table:

// Year	Count
// 1991	360
// 1992	1000
// 1993	2000
// Sample Output:
// Year	NewUserCount
// 1991	360
// 1992	640
// 1993	1000
// Explanation:

// From year 1990 to 1991, 360 new users are added.
// From year 1991 to 1992, 640 new users are added.
// From year 1992 to 1993, 1000 new users are added.

// Note:

// field and type / year and count to be treated as a object. Output should also be a object. 
// Output should contain consecutive years in ascending order starting from the year 1991 

// Sample:   userCount({'1991':360,'1992':1000,'1993':2000})

// {'1991':360,'1992':640,'1993':1000}

function userCount(obj) {
    var keysArr = Object.keys(obj);
    var valuesArr = Object.values(obj);
    var resultObj = {};

    var resultArr = [];
    resultArr.push(valuesArr[0])
    for(let i = 1; i < valuesArr.length; i++) {
        resultArr.push(valuesArr[i] - valuesArr[i - 1]);
    }
    // console.log(resultArr);
    for(let i = 0; i < resultArr.length; i++) {
        resultObj[keysArr[i]] = resultArr[i]
    }
    
    console.log(resultObj);
}

console.log(userCount({'1991':360,'1992':1000,'1993':2000}));
