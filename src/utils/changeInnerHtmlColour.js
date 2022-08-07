
/////////////////FUNCTION DONT WORK!!!!!!!!!!.....................////////////////////////////////
  export default function changeInnerHtmlColour(episodeSearchTerm ) {

    const elementHtml  = document.getElementById("episode-thumbnail")
    const originalHtml  = elementHtml?.innerHTML;
    const newHtml  = originalHtml?.replace(new RegExp(episodeSearchTerm, "g"), episodeSearchTerm.fontcolor("darkorange")); // "g" means "global"
    console.log("is this working")
    return newHtml

  }