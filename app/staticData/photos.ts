import { Photo } from "app/interfaces/IPhoto";
import commencementPhoto from "../assets/Commencement.png";
import headshot from "../assets/Headshot.png";
import workProfilePhoto from "../assets/WorkProfile.jpg";

const photos: Photo[] = [
	{
		src: commencementPhoto.src,
		alt: "Brett Spangler speaking at his UWO graduation ceremony",
		externalUrl: "https://youtu.be/Ar0J7Tdikmk?si=4Wjm49j2cHhQQEwt",
	},
	{
		src: headshot.src,
		alt: "Brett Spangler's professional headshot",
		externalUrl: "https://www.linkedin.com/in/brett-spangler/",
	},
	{
		src: workProfilePhoto.src,
		alt: "Brett Spangler's work profile photo",
		externalUrl: "https://www.linkedin.com/in/brett-spangler/",
	},
];

export default photos;
