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
    query.replace("Which of the following numbers is the largest: ", "");
    query.replace("?", "");
    query.replace(",", "");
    // 78 93 38
    var splitstring : string[] = query.split(" ", 3);
    
    return (
      String(Math.max(parseInt(splitstring[0]), parseInt(splitstring[1]), parseInt(splitstring[2])))
    );
  }

  return "";
}
