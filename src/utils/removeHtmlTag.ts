export default function removeHtmlTag(inputString: string): string {
  inputString = inputString.replace("<p>", ""); // opening html tag removal
  inputString = inputString.replace("</p>", ""); // closing html tag removal

  return inputString;
}
// function
/*
 "summary": "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, 
 while in the distant east Viserys Targaryen plots to reclaim his father's throne, 
 usurped by Robert, by selling his sister in marriage.</p>"


-----------------PSEUDO CODE--------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


1 param type string
return type string

function removeHtmlTag (inputString) {



    if (inputString contains "<p>" or "</p>") {
        replace with ""  same as removing them 
    }

    return inputString
}

*/
