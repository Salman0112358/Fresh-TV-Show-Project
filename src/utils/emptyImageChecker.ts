import { IEpisode, IShow } from "../types";

const defaultImage =
  "https://img.freepik.com/free-vector/business-team-looking-new-people-allegory-searching-ideas-staff-woman-with-magnifier-man-with-spyglass-flat-illustration_74855-18236.jpg?w=1380&t=st=1659563374~exp=1659563974~hmac=425acd33626553981baf377307c4f914a43dbe3d60e0e7adb00b3c99d4000562";

const emptyImageChecker = (item: IEpisode | IShow): string => {
  if (item.image && item.image.medium) {
    //console.log("image.medium has been found with a valid string", item.id);
    return item.image.medium;
  } else {
    //console.log("This image source is null :( ", item.id);
    return defaultImage;
  }
};

export { emptyImageChecker };
