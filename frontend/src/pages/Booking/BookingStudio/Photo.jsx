const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800, alt: "photo-1" },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620, alt: "photo-2" },
  { id: "RkBTPqPEGDo", width: 1080, height: 720, alt: "photo-3" },
  { id: "Yizrl9N_eDA", width: 1080, height: 721, alt: "photo-4" },
  { id: "KG3TyFi0iTU", width: 1080, height: 1620, alt: "photo-5" },
  { id: "Jztmx9yqjBw", width: 1080, height: 607, alt: "photo-6" },
  { id: "-heLWtuAN3c", width: 1080, height: 608, alt: "photo-7" },
  { id: "xOigCUcFdA8", width: 1080, height: 720, alt: "photo-8" },
  { id: "1azAjl8FTnU", width: 1080, height: 1549, alt: "photo-9" },
  { id: "ALrCdq-ui_Q", width: 1080, height: 720, alt: "photo-10" },
  { id: "twukN12EN7c", width: 1080, height: 694, alt: "photo-11" },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620, alt: "photo-12" },
  { id: "sEXGgun3ZiE", width: 1080, height: 720, alt: "photo-13" },
  { id: "S-cdwrx-YuQ", width: 1080, height: 1440, alt: "photo-14" },
  { id: "q-motCAvPBM", width: 1080, height: 1620, alt: "photo-15" },
  { id: "Xn4L310ztMU", width: 1080, height: 810, alt: "photo-16" },
  { id: "iMchCC-3_fE", width: 1080, height: 610, alt: "photo-17" },
  { id: "X48pUOPKf7A", width: 1080, height: 160, alt: "photo-18" },
  { id: "GbLS6YVXj0U", width: 1080, height: 810, alt: "photo-19" },
  { id: "9CRd1J1rEOM", width: 1080, height: 720, alt: "photo-21" },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440, alt: "photo-22" },
];

const Photo = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  alt: photo.alt,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default Photo;
