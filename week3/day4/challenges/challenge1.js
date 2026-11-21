class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        return `${this.uploader} watched all ${this.time} of ${this.title}!`;
    }
}

const firstVideo = new Video("Arrays in JavaScript", "Elie", 600);
console.log(firstVideo.watch());

const secondVideo = new Video("Object destructuring", "Matt", 420);
console.log(secondVideo.watch());

const videoData = [
    { title: "Loops", uploader: "Colt", time: 540 },
    { title: "Functions", uploader: "Elie", time: 720 },
    { title: "Array methods", uploader: "Matt", time: 810 },
    { title: "Classes", uploader: "Jonas", time: 660 },
    { title: "Promises", uploader: "Sarah", time: 900 },
];

const videos = videoData.map(({ title, uploader, time }) => new Video(title, uploader, time));
videos.forEach((video) => console.log(video.watch()));
