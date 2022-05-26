import AppURL from "../api/AppURL";

const profileImagePath = (image: string) => {
  if (image) {
    const imageArray = image.split("/").length;
    const imageName = image.split("/")[imageArray - 1];
    return `${AppURL.UserPhoto}/${imageName}`;
  }
};

export default profileImagePath;
