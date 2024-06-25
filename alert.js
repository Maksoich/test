function pow(first_number, second_number){
    let result=first_number

    if(second_number%1===0)
    {
        for(let i = 1; i < second_number; i++)
        {
            result*=first_number
        }

        return result
    }

    return "fwerefewsrf"
}

alert(pow(2, 2.6))