export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "will"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    query = query.replace("Which of the following numbers is the largest: ", "");
    query = query.replace("?", "");
    query = query.replace(",", "");
    // 78 93 38
    var splitstring : string[] = query.split(" ", 3);
    
    return (
      String(Math.max(parseInt(splitstring[0]), parseInt(splitstring[1]), parseInt(splitstring[2])))
    );
  }

  if (query.toLowerCase().includes("plus")) {
    query = query.replace("What is ", "");
    query = query.replace("plus ", "");
    query = query.replace("?", "");
    // 78 93
    var splitstring : string[] = query.split(" ", 2);
    
    return (
      String(parseInt(splitstring[0]) + parseInt(splitstring[1]))
    );
  }

  if (query.toLowerCase().includes("minus")) {
    query = query.replace("What is ", "");
    query = query.replace("minus ", "");
    query = query.replace("?", "");
    // 78 93
    var splitstring : string[] = query.split(" ", 2);
    
    return (
      String(parseInt(splitstring[0]) - parseInt(splitstring[1]))
    );
  }

  if (query.toLowerCase().includes("multiplied")) {
    query = query.replace("What is ", "");
    query = query.replace("multiplied by ", "");
    query = query.replace("?", "");
    // 78 93
    var splitstring : string[] = query.split(" ", 2);
    
    return (
      String(parseInt(splitstring[0]) * parseInt(splitstring[1]))
    );
  }

  if (query.toLowerCase().includes("asdfasdf")) {
    query = query.replace("Which of the following numbers is both a square and a cube: ", "");
    query = query.replace(",", "");
    query = query.replace("?", "");
    // 78 93
    var splitstring : string[] = query.split(" ", 7);
    var answer : string = "";
    for (var num of splitstring) {
      if (Number.isInteger(Math.sqrt(parseInt(num))) && Number.isInteger(Math.cbrt(parseInt(num)))) {
        answer = answer + num + ",";
      }
    }

    return (
      answer
    );
  }

  return "";
}
